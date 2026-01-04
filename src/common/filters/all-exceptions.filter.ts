import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);
  private readonly isDevelopment = process.env.NODE_ENV === 'development';

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message: string | string[] = 'Erro interno do servidor';
    let error = 'Internal Server Error';

    // Log detalhado no servidor (sempre)
    if (exception instanceof Error) {
      this.logger.error(
        `Erro: ${exception.message}`,
        exception.stack,
      );
    } else {
      this.logger.error(`Erro desconhecido: ${JSON.stringify(exception)}`);
    }

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse();

      if (typeof exceptionResponse === 'object' && exceptionResponse !== null) {
        const responseObj = exceptionResponse as any;
        message = responseObj.message || exception.message;
        error = responseObj.error || exception.name;
      } else {
        message = exception.message;
        error = exception.name;
      }
    } else if (exception instanceof Error) {
      // Verificar se é erro do Prisma
      const errorName = exception.constructor.name;
      const errorMessage = exception.message || '';

      if (errorName.includes('Prisma') || errorMessage.includes('Prisma')) {
        // Erros do Prisma - nunca expor detalhes
        message = 'Erro ao processar solicitação no banco de dados';
        error = 'Database Error';
        status = HttpStatus.INTERNAL_SERVER_ERROR;

        // Log detalhado apenas no servidor
        this.logger.error(
          `Erro do Prisma: ${errorMessage}`,
          exception.stack,
        );
      } else if (errorMessage.includes('ECONNREFUSED') || errorMessage.includes('connection')) {
        // Erros de conexão - não expor detalhes
        message = 'Erro de conexão com o servidor';
        error = 'Connection Error';
        status = HttpStatus.SERVICE_UNAVAILABLE;
      } else if (errorMessage.includes('timeout')) {
        // Erros de timeout
        message = 'A solicitação expirou. Tente novamente.';
        error = 'Timeout Error';
        status = HttpStatus.REQUEST_TIMEOUT;
      } else {
        // Outros erros - em desenvolvimento mostrar mensagem, em produção genérico
        if (this.isDevelopment) {
          message = exception.message;
          error = exception.name;
        } else {
          message = 'Erro interno do servidor';
          error = 'Internal Server Error';
        }
      }
    }

    // Log da requisição com erro (sem stack trace)
    this.logger.error(
      `${request.method} ${request.url} - Status: ${status} - Message: ${Array.isArray(message) ? message.join(', ') : message}`,
    );

    // Resposta padronizada - NUNCA expor stack traces ou caminhos de arquivo
    const responseBody: any = {
      statusCode: status,
      message,
      error,
    };

    // Apenas em desenvolvimento, adicionar informações extras
    if (this.isDevelopment) {
      responseBody.timestamp = new Date().toISOString();
      responseBody.path = request.url;
      responseBody.method = request.method;
    }

    response.status(status).json(responseBody);
  }
}
