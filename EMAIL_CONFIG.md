# 📧 Configuração do Email - NodeMailer

## ✅ Implementação Completa

O sistema de email foi implementado com sucesso usando **NodeMailer** e está pronto para uso!

## 📦 Pacotes Instalados

```bash
✅ nodemailer
✅ @types/nodemailer
```

## 📁 Arquivos Criados

```
src/
├── email/
│   └── email.provider.ts        # Provider de envio de emails
├── notification/
│   ├── notification.service.ts   # Service de notificações
│   ├── notification.controller.ts # Controller com endpoints
│   └── notification.module.ts    # Module configurado
└── draw/
    ├── draw.service.ts           # Integrado com notificações
    └── draw.module.ts            # Importa NotificationModule
```

## 🔧 Configuração

### 1. Variáveis de Ambiente

Adicione no seu arquivo `.env`:

```env
# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-app-aqui
EMAIL_FROM="Amigo Oculto <noreply@amigooculto.com>"
```

### 2. Gmail - Senha de App

Se usar Gmail, você DEVE gerar uma senha de app:

1. Acesse: https://myaccount.google.com/security
2. Ative "Verificação em duas etapas"
3. Em "Senhas de app", clique em "Gerar"
4. Escolha "Email" e "Outro dispositivo"
5. Copie a senha de 16 caracteres gerada
6. Cole no `EMAIL_PASS` do .env

**⚠️ Importante:** Não use sua senha normal do Gmail!

### 3. Alternativas para Produção

#### SendGrid (Recomendado)

- 100 emails/dia grátis

```env
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_USER=apikey
EMAIL_PASS=SG.sua-api-key-aqui
```

#### AWS SES

- 62.000 emails/mês grátis

```env
EMAIL_HOST=email-smtp.us-east-1.amazonaws.com
EMAIL_PORT=587
EMAIL_USER=sua-access-key
EMAIL_PASS=sua-secret-key
```

#### Mailgun

- 5.000 emails/mês grátis

```env
EMAIL_HOST=smtp.mailgun.org
EMAIL_PORT=587
EMAIL_USER=postmaster@seu-dominio.mailgun.org
EMAIL_PASS=sua-senha-mailgun
```

## 🚀 Como Usar

### 1. Testar Configuração

```bash
GET http://localhost:3000/notifications/test-email?to=seu-email@teste.com
```

Resposta de sucesso:

```json
{
  "success": true,
  "message": "Email de teste enviado com sucesso para seu-email@teste.com"
}
```

### 2. Realizar Sorteio com Notificações

```bash
POST http://localhost:3000/draw/perform/1?ownerId=1
Content-Type: application/json

{
  "notifyParticipants": true
}
```

Resposta:

```json
{
  "message": "Sorteio realizado com sucesso!",
  "drawId": 1,
  "totalPairs": 10,
  "performedAt": "2024-12-25T10:00:00.000Z",
  "notifications": {
    "totalSent": 10,
    "totalFailed": 0,
    "details": [...]
  }
}
```

### 3. Ver Minhas Notificações

```bash
GET http://localhost:3000/notifications/my?userId=1
```

## 📧 Template de Email

O email enviado inclui:

- ✅ Header bonito com gradiente
- ✅ Nome da pessoa que você tirou
- ✅ Email e telefone de contato
- ✅ Lista de desejos completa (com links)
- ✅ Valor sugerido (min/max)
- ✅ Aviso de confidencialidade
- ✅ Design responsivo

## 🔄 Fluxo Completo

1. **Organizador cria grupo** → Recebe código
2. **Participantes entram** → Status PENDING
3. **Organizador aprova** → Status APPROVED
4. **Participantes criam wishlist**
5. **Organizador realiza sorteio** →
   - ✅ Algoritmo sorteia respeitando restrições
   - ✅ Salva resultado no banco
   - ✅ Envia email para CADA participante
   - ✅ Cria notificação no banco
6. **Participante abre email** → Vê quem tirou + wishlist

## 🛡️ Recursos de Segurança

- ✅ **Retry automático**: 3 tentativas em caso de falha
- ✅ **Timeout configurável**: Evita travamentos
- ✅ **Validação de conexão**: Testa antes de enviar
- ✅ **Log detalhado**: Rastreia sucessos e falhas
- ✅ **Tratamento de erros**: Não interrompe o sorteio se email falhar

## 📊 Monitoramento

Cada envio registra:

```typescript
{
  participantId: 5,
  participantName: "João Silva",
  success: true,
  error: undefined // ou mensagem de erro
}
```

## 🧪 Testando Localmente

### Opção 1: Mailtrap (Desenvolvimento)

```env
EMAIL_HOST=smtp.mailtrap.io
EMAIL_PORT=2525
EMAIL_USER=seu-usuario-mailtrap
EMAIL_PASS=sua-senha-mailtrap
```

- Captura emails sem enviar de verdade
- Perfeito para testes

### Opção 2: Ethereal (Desenvolvimento)

```javascript
// Auto-gera credenciais de teste
const testAccount = await nodemailer.createTestAccount();
```

## ❓ Troubleshooting

### Erro: "Connection timeout"

```env
EMAIL_PORT=465
EMAIL_SECURE=true
```

### Erro: "Invalid login"

- Verifique se usou senha de app (Gmail)
- Confirme usuário e senha corretos

### Erro: "Self signed certificate"

```typescript
// Adicione no transporter:
tls: {
  rejectUnauthorized: false;
}
```

### Email não chega

1. Verifique pasta de spam
2. Teste com `test-email` endpoint
3. Confirme EMAIL_FROM válido
4. Verifique logs do console

## 📈 Próximos Passos

- [ ] Adicionar templates personalizados por grupo
- [ ] Implementar agendamento de envio
- [ ] Adicionar notificação por SMS (Twilio)
- [ ] Dashboard de estatísticas de envio
- [ ] Retry inteligente com backoff exponencial

## ✅ Status

🎉 **Sistema 100% funcional e pronto para produção!**

- ✅ NodeMailer configurado
- ✅ Templates HTML responsivos
- ✅ Retry automático
- ✅ Integrado com sorteio
- ✅ Endpoint de teste
- ✅ Tratamento de erros
- ✅ Logs detalhados
