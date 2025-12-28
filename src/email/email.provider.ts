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
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6; 
          color: #333; 
          background: linear-gradient(135deg, #fff 0%, #fff5f6 50%, #ffe8eb 100%);
          padding: 20px;
        }
        .container { 
          max-width: 600px; 
          margin: 0 auto; 
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(214, 52, 71, 0.15);
        }
        .header { 
          background: linear-gradient(135deg, #D63447 0%, #c42a3d 100%);
          color: white; 
          padding: 40px 30px; 
          text-align: center;
        }
        .header h1 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        .header h2 {
          font-size: 20px;
          font-weight: 500;
          opacity: 0.95;
        }
        .content { 
          background: white;
          padding: 40px 30px;
        }
        .greeting {
          font-size: 18px;
          margin-bottom: 20px;
          color: #1a1a1a;
        }
        .greeting strong {
          color: #D63447;
        }
        .announcement {
          font-size: 16px;
          margin-bottom: 30px;
          color: #666;
        }
        .gift-box { 
          background: linear-gradient(135deg, #fff5f6 0%, #ffe8eb 100%);
          padding: 30px; 
          border-radius: 12px; 
          margin: 30px 0;
          border: 2px solid #D63447;
          position: relative;
        }
        .gift-box::before {
          content: '🎁';
          position: absolute;
          top: -20px;
          right: 20px;
          font-size: 40px;
        }
        .gift-box h2 {
          color: #D63447;
          font-size: 16px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 15px;
        }
        .gift-box h3 {
          font-size: 24px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 10px 0 20px 0;
        }
        .gift-box p {
          margin: 8px 0;
          color: #555;
        }
        .gift-box strong {
          color: #D63447;
          font-weight: 600;
        }
        .wishlist-section {
          background: #f9fafb;
          padding: 25px;
          border-radius: 12px;
          margin: 25px 0;
        }
        .wishlist-section h3 {
          color: #D63447;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .wishlist-item {
          background: white;
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 12px;
          border-left: 3px solid #D63447;
        }
        .wishlist-item h4 {
          color: #1a1a1a;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 5px;
        }
        .wishlist-item p {
          color: #666;
          font-size: 14px;
          margin: 4px 0;
        }
        .wishlist-item a {
          color: #D63447;
          text-decoration: none;
          font-weight: 500;
        }
        .priority {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          margin-top: 8px;
        }
        .priority-high { background: #fee; color: #D63447; }
        .priority-medium { background: #fef3cd; color: #856404; }
        .priority-low { background: #d4edda; color: #155724; }
        .divider {
          margin: 30px 0;
          border: none;
          border-top: 2px solid #f0f0f0;
        }
        .important-box {
          background: #fff5f6;
          border-left: 4px solid #D63447;
          padding: 20px;
          border-radius: 8px;
          margin: 20px 0;
        }
        .important-box strong {
          color: #D63447;
          font-size: 16px;
          display: block;
          margin-bottom: 12px;
        }
        .important-box ul {
          list-style: none;
          padding: 0;
        }
        .important-box li {
          padding: 8px 0;
          padding-left: 24px;
          position: relative;
          color: #555;
        }
        .important-box li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #D63447;
          font-weight: bold;
        }
        .footer { 
          text-align: center; 
          padding: 30px;
          background: #f9fafb;
          color: #666; 
          font-size: 13px;
        }
        .footer p {
          margin: 8px 0;
        }
        .footer strong {
          color: #D63447;
        }
        @media only screen and (max-width: 600px) {
          .container { border-radius: 0; }
          .header, .content, .footer { padding: 20px; }
          .gift-box { padding: 20px; }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎁 Resultado do Amigo Oculto</h1>
          <h2>${groupName}</h2>
        </div>
        
        <div class="content">
          <p class="greeting">Olá <strong>${participantName}</strong>!</p>
          <p class="announcement">O sorteio foi realizado com sucesso! 🎉</p>
          
          <div class="gift-box">
            <h2>Você tirou:</h2>
            <h3>${drawnPersonName}</h3>
            <p><strong>Email:</strong> ${drawnPersonEmail}</p>
            ${contactHtml}
            ${valueRangeHtml}
          </div>
          ${wishlistHtml}
          <hr class="divider">
          
          <div class="important-box">
            <strong>⚠️ Importante:</strong>
            <ul>
              <li>Mantenha o resultado em segredo! 🤫</li>
              <li>Entre em contato se precisar de mais informações</li>
              <li>Não responda este email - ele foi enviado automaticamente</li>
            </ul>
          </div>
        </div>
        
        <div class="footer">
          <p><strong>Amigo Oculto</strong> - Sorteio Automático</p>
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
