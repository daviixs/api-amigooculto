import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { Transporter } from 'nodemailer';

@Injectable()
export class EmailProvider {
  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  async sendDrawResultEmail(
    participantEmail: string,
    participantName: string,
    drawnPersonName: string,
    drawnPersonEmail: string,
    drawnPersonPhone: string | null,
    wishlistItems: any[],
    groupName: string,
    minValue: number | null,
    maxValue: number | null,
  ) {
    const wishlistHtml = wishlistItems?.length
      ? `
        <h3>📝 Lista de Desejos:</h3>
        <ul>
          ${wishlistItems
            .map(
              (item) => `
            <li>
              <strong>${item.name}</strong>
              ${item.description ? `<br><small>${item.description}</small>` : ''}
              ${item.link ? `<br><a href="${item.link}">Ver produto</a>` : ''}
            </li>
          `,
            )
            .join('')}
        </ul>
      `
      : '<p><em>Esta pessoa não adicionou uma lista de desejos ainda.</em></p>';

    const valueRangeHtml =
      minValue && maxValue
        ? `<p><strong>Valor sugerido:</strong> R$ ${minValue} - R$ ${maxValue}</p>`
        : '';

    const contactHtml = drawnPersonPhone
      ? `<p><strong>Telefone:</strong> ${drawnPersonPhone}</p>`
      : '';

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .gift-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
            ul { padding-left: 20px; }
            li { margin: 10px 0; }
            a { color: #667eea; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎁 Resultado do Amigo Oculto</h1>
              <h2>${groupName}</h2>
            </div>
            <div class="content">
              <p>Olá <strong>${participantName}</strong>!</p>
              <p>O sorteio foi realizado! 🎉</p>
              
              <div class="gift-box">
                <h2 style="color: #667eea; margin-top: 0;">Você tirou:</h2>
                <h3 style="margin: 10px 0;">${drawnPersonName}</h3>
                <p><strong>Email:</strong> ${drawnPersonEmail}</p>
                ${contactHtml}
                ${valueRangeHtml}
              </div>

              ${wishlistHtml}

              <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
              
              <p><strong>⚠️ Importante:</strong></p>
              <ul>
                <li>Mantenha o resultado em segredo! 🤫</li>
                <li>Entre em contato se precisar de mais informações</li>
                <li>Não responda este email - ele foi enviado automaticamente</li>
              </ul>
            </div>
            <div class="footer">
              <p>Sistema Amigo Oculto - Sorteio Automático</p>
              <p>Este é um email automático, por favor não responda.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const mailOptions = {
      from: process.env.EMAIL_FROM || 'Amigo Oculto <noreply@amigooculto.com>',
      to: participantEmail,
      subject: `🎁 Resultado do Amigo Oculto - ${groupName}`,
      html,
    };

    return await this.sendWithRetry(mailOptions);
  }

  private async sendWithRetry(mailOptions: any, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
      try {
        return await this.transporter.sendMail(mailOptions);
      } catch (error) {
        console.error(`Tentativa ${i + 1} de envio falhou:`, error);
        if (i === maxRetries - 1) throw error;
        // Aguardar antes de tentar novamente
        await new Promise((resolve) => setTimeout(resolve, 1000 * (i + 1)));
      }
    }
  }

  async testConnection(): Promise<boolean> {
    try {
      await this.transporter.verify();
      console.log('✅ Conexão com servidor de email estabelecida com sucesso');
      return true;
    } catch (error) {
      console.error('❌ Erro ao conectar com servidor de email:', error);
      return false;
    }
  }
}
