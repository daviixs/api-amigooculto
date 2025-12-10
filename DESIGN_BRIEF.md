# Amigo Oculto - Landing Page Design Brief

## Design System (design.json)

```json
{
  "brand": {
    "name": "Amigo Oculto",
    "tagline": "Organize seu amigo secreto sem complicação",
    "personality": ["festive", "friendly", "playful", "trustworthy", "warm"],
    "designPhilosophy": "Design alegre e acolhedor que transmite a magia das festas de fim de ano. Inspirado em embrulhos de presente, fitas e cores festivas, com tipografia moderna e elementos visuais que remetem à celebração e à união. O design deve ser intuitivo, divertido e acessível para todas as idades."
  },

  "colors": {
    "primary": {
      "main": "#D63447",
      "light": "#FF4D63",
      "dark": "#B91C2E",
      "contrast": "#FFFFFF"
    },
    "secondary": {
      "main": "#1E8449",
      "light": "#28A745",
      "dark": "#145A32"
    },
    "accent": {
      "main": "#FFD700",
      "light": "#FFE55C",
      "dark": "#CCA000",
      "hover": "#FFDD33"
    },
    "neutral": {
      "white": "#FFFFFF",
      "snow": "#F8F9FA",
      "lightGray": "#E9ECEF",
      "gray": "#ADB5BD",
      "darkGray": "#495057",
      "charcoal": "#212529"
    },
    "semantic": {
      "success": "#28A745",
      "error": "#DC3545",
      "warning": "#FFC107",
      "info": "#17A2B8"
    },
    "gradients": {
      "festive": "linear-gradient(135deg, #D63447 0%, #E74C3C 50%, #FF6B6B 100%)",
      "winter": "linear-gradient(180deg, #F8F9FA 0%, #E9ECEF 100%)",
      "celebration": "radial-gradient(ellipse at 50% 20%, rgba(255, 215, 0, 0.2) 0%, rgba(248, 249, 250, 1) 70%)"
    }
  },

  "typography": {
    "fontFamilies": {
      "heading": "'Poppins', 'Helvetica Neue', sans-serif",
      "body": "'Inter', 'SF Pro Display', -apple-system, sans-serif",
      "accent": "'Pacifico', cursive"
    },
    "scale": {
      "hero": {
        "size": "56px",
        "lineHeight": "1.1",
        "weight": "700",
        "letterSpacing": "-0.01em"
      },
      "h1": {
        "size": "48px",
        "lineHeight": "1.15",
        "weight": "700",
        "letterSpacing": "-0.01em"
      },
      "h2": {
        "size": "36px",
        "lineHeight": "1.2",
        "weight": "600",
        "letterSpacing": "0"
      },
      "h3": {
        "size": "24px",
        "lineHeight": "1.3",
        "weight": "600",
        "letterSpacing": "0"
      },
      "h4": {
        "size": "20px",
        "lineHeight": "1.4",
        "weight": "600",
        "letterSpacing": "0"
      },
      "bodyLarge": { "size": "18px", "lineHeight": "1.6", "weight": "400" },
      "body": { "size": "16px", "lineHeight": "1.6", "weight": "400" },
      "bodySmall": { "size": "14px", "lineHeight": "1.5", "weight": "400" },
      "caption": {
        "size": "12px",
        "lineHeight": "1.4",
        "weight": "500",
        "letterSpacing": "0.02em"
      }
    },
    "rules": [
      "Headlines use Poppins para uma aparência moderna e amigável",
      "Body text usa Inter para ótima legibilidade",
      "Use fonte Pacifico para elementos decorativos e badges especiais",
      "Evite mais de 2 famílias de fontes por página"
    ]
  },

  "spacing": {
    "base": "8px",
    "scale": {
      "xs": "4px",
      "sm": "8px",
      "md": "16px",
      "lg": "24px",
      "xl": "32px",
      "2xl": "48px",
      "3xl": "64px",
      "4xl": "96px",
      "5xl": "128px"
    },
    "sections": {
      "paddingY": "80px",
      "paddingYMobile": "48px",
      "gap": "48px"
    },
    "container": {
      "maxWidth": "1200px",
      "padding": "24px",
      "paddingMobile": "16px"
    },
    "rules": [
      "Espaçamento generoso entre seções (mínimo 80px)",
      "Cards com padding interno de 24-32px",
      "Manter ritmo horizontal consistente usando base de 8px"
    ]
  },

  "layout": {
    "grid": {
      "columns": 12,
      "gutter": "24px",
      "gutterMobile": "16px"
    },
    "breakpoints": {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px"
    },
    "patterns": {
      "twoColumn": "Layouts 50/50 ou 60/40 para texto e imagem",
      "threeColumn": "Grid de cards com largura igual para features",
      "centeredContent": "Max-width 720px para conteúdo textual"
    }
  },

  "components": {
    "buttons": {
      "primary": {
        "background": "#D63447",
        "color": "#FFFFFF",
        "hoverBackground": "#B91C2E",
        "borderRadius": "12px",
        "paddingX": "32px",
        "paddingY": "16px",
        "fontWeight": "600",
        "fontSize": "16px",
        "transition": "all 0.2s ease",
        "shadow": "0 4px 12px rgba(214, 52, 71, 0.3)"
      },
      "secondary": {
        "background": "#1E8449",
        "color": "#FFFFFF",
        "hoverBackground": "#145A32",
        "borderRadius": "12px"
      },
      "outline": {
        "background": "transparent",
        "color": "#D63447",
        "border": "2px solid #D63447",
        "hoverBackground": "#D63447",
        "hoverColor": "#FFFFFF"
      },
      "rules": [
        "Botões primários em vermelho festivo para CTAs principais",
        "Botões secundários em verde para ações de confirmação",
        "Incluir ícone de presente (🎁) ou seta em CTAs principais",
        "Altura mínima de 48px para touch targets"
      ]
    },
    "cards": {
      "default": {
        "background": "#FFFFFF",
        "borderRadius": "16px",
        "padding": "32px",
        "shadow": "0 4px 20px rgba(0, 0, 0, 0.08)",
        "border": "1px solid rgba(0, 0, 0, 0.06)"
      },
      "festive": {
        "background": "#FFFFFF",
        "borderRadius": "16px",
        "border": "2px solid #FFD700",
        "shadow": "0 6px 24px rgba(255, 215, 0, 0.2)"
      },
      "elevated": {
        "shadow": "0 8px 32px rgba(0, 0, 0, 0.1)",
        "hoverShadow": "0 12px 40px rgba(0, 0, 0, 0.15)",
        "hoverTransform": "translateY(-6px)"
      }
    },
    "icons": {
      "library": "Lucide Icons",
      "style": "stroke",
      "strokeWidth": "2px",
      "sizes": {
        "sm": "20px",
        "md": "24px",
        "lg": "32px",
        "xl": "48px"
      },
      "colors": {
        "default": "#495057",
        "primary": "#D63447",
        "secondary": "#1E8449",
        "accent": "#FFD700"
      }
    },
    "badges": {
      "new": {
        "background": "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
        "color": "#FFFFFF",
        "borderRadius": "100px",
        "padding": "4px 12px",
        "fontSize": "11px",
        "fontWeight": "700",
        "textTransform": "uppercase"
      },
      "feature": {
        "background": "rgba(214, 52, 71, 0.1)",
        "color": "#D63447",
        "borderRadius": "8px",
        "padding": "6px 14px"
      }
    }
  },

  "effects": {
    "shadows": {
      "sm": "0 2px 8px rgba(0, 0, 0, 0.06)",
      "md": "0 4px 20px rgba(0, 0, 0, 0.08)",
      "lg": "0 8px 32px rgba(0, 0, 0, 0.12)",
      "festive": "0 8px 24px rgba(214, 52, 71, 0.2)"
    },
    "transitions": {
      "fast": "150ms ease",
      "default": "250ms ease",
      "slow": "350ms ease",
      "bounce": "400ms cubic-bezier(0.68, -0.55, 0.27, 1.55)"
    },
    "animations": {
      "fadeIn": "fade-in 0.6s ease forwards",
      "slideUp": "slide-up 0.5s ease forwards",
      "bounce": "bounce 1s ease infinite",
      "shake": "shake 0.5s ease"
    }
  },

  "imagery": {
    "style": {
      "aesthetic": "Fotos calorosas de celebrações, pessoas felizes trocando presentes",
      "colorTone": "Cores quentes, iluminação festiva, decorações natalinas sutis",
      "subjects": "Grupos de amigos, famílias, presentes embrulhados, smartphones",
      "avoid": "Imagens muito comerciais, foco excessivo em produtos, frieza"
    },
    "illustrations": {
      "style": "Ilustrações flat com presentes, fitas, estrelas e confetes",
      "colors": "Paleta de cores do brand com tons pastéis"
    }
  },

  "designPrinciples": [
    "Simplicidade: Processo deve parecer fácil e rápido",
    "Festividade: Transmitir alegria e espírito de celebração",
    "Confiança: Interface clara e transparente sobre funcionamento",
    "Inclusividade: Acessível para todas as idades e níveis técnicos",
    "Magia: Preservar o elemento surpresa e mistério do amigo oculto"
  ]
}
```

---

## Section Specifications

### Section 1: Hero

**Layout:** 2 columns (55% / 45%)
**Background:** Linear gradient (celebration) com elementos decorativos sutis (confetes, estrelas)
**Spacing:** padding-top: 96px, padding-bottom: 80px

**Column 1:**

- **Badge:** "🎁 Grátis para até 50 participantes"
  - Style: festive badge
  - Margin-bottom: 24px

- **Title (h1):** "Organize seu amigo secreto sem dor de cabeça"
  - Font: Poppins, 56px, weight 700
  - Color: #212529
  - Max-width: 580px
  - Line-height: 1.1
- **Subtitle:** "Crie grupos, convide amigos, faça o sorteio automático e gerencie listas de desejos - tudo em um só lugar, de forma simples e gratuita."
  - Font: Inter, 18px, weight 400
  - Color: #495057
  - Line-height: 1.6
  - Max-width: 520px
  - Margin-top: 24px
- **CTA Buttons (horizontal stack):**
  - Primary: "Criar meu grupo grátis 🎁"
    - Style: Primary button (#D63447)
  - Secondary: "Ver como funciona →"
    - Style: Outline button
  - Gap: 16px, Margin-top: 32px

**Column 2:**

- **Ilustração:** Desenho colorido de pessoas em círculo trocando presentes com smartphone no centro. Usar cores do brand com estilo flat/moderno.
- Add floating animation suave
- Elementos decorativos: confetes, estrelas, presentes flutuando

---

### Section 2: Como Funciona

**Layout:** 1 column header + 4-column timeline grid
**Background:** #FFFFFF
**Spacing:** padding: 80px 0

**Header:**

- **Title (h2):** "Como funciona?"
  - Font: Poppins, 36px, weight 600
  - Text-align: center
  - Margin-bottom: 48px

**Timeline Cards:** 4 equal columns, gap: 24px, conectados por linha tracejada

**Card 1:**

- Number badge: "1" (circular, #D63447 background, white text)
- Icon: Users (Lucide) - 32px
- Title (h3): "Crie seu grupo" - Poppins, 20px, weight 600
- Description: "Defina nome, descrição e valor de presente sugerido"
- Card style: white background, subtle shadow, 24px padding

**Card 2:**

- Number badge: "2"
- Icon: Send (Lucide)
- Title: "Convide participantes"
- Description: "Compartilhe o código único ou link de convite com seus amigos"

**Card 3:**

- Number badge: "3"
- Icon: Shuffle (Lucide)
- Title: "Faça o sorteio"
- Description: "Com um clique, o sistema sorteia automaticamente os pares"

**Card 4:**

- Number badge: "4"
- Icon: Gift (Lucide)
- Title: "Revele o resultado"
- Description: "Cada participante vê quem tirou de forma privada e segura"

---

### Section 3: Recursos Principais

**Layout:** 1 column container with 3-column card grid
**Background:** #F8F9FA (neutral snow)
**Spacing:** padding: 80px 0

**Header:**

- **Title (h2):** "Tudo que você precisa para um amigo oculto perfeito"
  - Font: Poppins, 36px, weight 600
  - Text-align: center
  - Color: #212529
  - Margin-bottom: 56px

**Feature Grid:** 3 columns on desktop, 2 on tablet, 1 on mobile

**Card 1:**

- Icon: Shield (Lucide) - 48px, #1E8449 background circle
- Title: "Sorteio justo e seguro"
- Description: "Algoritmo inteligente que respeita restrições e garante que ninguém tire a si mesmo"
- Badge: "✓ Testado"

**Card 2:**

- Icon: List (Lucide) - 48px, #D63447 background circle
- Title: "Listas de desejos"
- Description: "Cada participante pode criar sua lista de desejos e dar dicas do que gostaria de ganhar"
- Badge: "✓ Popular"

**Card 3:**

- Icon: Bell (Lucide) - 48px, #FFD700 background circle
- Title: "Notificações automáticas"
- Description: "Avise participantes sobre convites, aprovações e resultados do sorteio"
- Badge: "✓ Novo"

**Card 4:**

- Icon: Lock (Lucide)
- Title: "Restrições personalizadas"
- Description: "Defina quem não pode tirar quem (casais, familiares, etc.)"

**Card 5:**

- Icon: Users (Lucide)
- Title: "Grupos ilimitados"
- Description: "Crie quantos grupos quiser - família, trabalho, amigos da escola"

**Card 6:**

- Icon: Smartphone (Lucide)
- Title: "Acesso mobile"
- Description: "Funciona perfeitamente em qualquer dispositivo, sem precisar baixar app"

---

### Section 4: Segurança e Privacidade

**Layout:** 2 columns (45% / 55%)
**Background:** White
**Spacing:** padding: 80px 0

**Column 1:**

- **Ilustração:** Cadeado com escudo, elementos de segurança
- Decoração: Check marks verdes, ícones de privacidade

**Column 2:**

- **Title (h2):** "Seus dados estão seguros"
  - Font: Poppins, 36px, weight 600
  - Color: #212529
  - Margin-bottom: 32px

**Security Points:** Stack vertical com ícones

- ✓ "Ninguém vê quem tirou quem (exceto você mesmo)"
  - Icon: Eye Off (Lucide), #1E8449
- ✓ "Dados criptografados e protegidos"
  - Icon: Shield Check (Lucide), #1E8449
- ✓ "Sem venda de informações para terceiros"
  - Icon: Lock (Lucide), #1E8449
- ✓ "Você é dono dos seus grupos e pode excluir quando quiser"
  - Icon: User Check (Lucide), #1E8449

**Each point:**

- Font: Inter, 16px, weight 500
- Color: #495057
- Gap: 20px between items

---

### Section 5: Depoimentos

**Layout:** 1 column header + 3-column testimonial cards
**Background:** Subtle gradient (winter)
**Spacing:** padding: 80px 0

**Header:**

- **Title (h2):** "O que nossos usuários dizem"
  - Font: Poppins, 36px, weight 600
  - Text-align: center
  - Margin-bottom: 56px

**Testimonial Cards:** 3 columns, gap: 24px

**Card Structure:**

- Avatar placeholder (circular, 56px)
- Quote text in italic, Inter 16px
- Name in bold, Poppins 14px
- Role/context in lighter color, Inter 12px
- 5 stars rating (⭐⭐⭐⭐⭐)

**Sample Testimonials:**

1. "Organizei o amigo oculto da empresa com 45 pessoas. Foi incrivelmente fácil e ninguém reclamou!"
   - **Maria Silva** - Gerente de RH

2. "Adorei poder adicionar minha lista de desejos. Finalmente vou ganhar algo que realmente quero! 😄"
   - **João Santos** - Designer

3. "Uso todo ano para o amigo oculto da família. Salvou nosso natal!"
   - **Ana Costa** - Professora

---

### Section 6: Pricing / CTA

**Layout:** 1 column, centered
**Background:** Festive gradient (#D63447 to #B91C2E)
**Spacing:** padding: 100px 0

**Content:** Max-width 700px, centered

- **Badge:** "🎉 100% Gratuito"
  - Style: white badge with accent color text
  - Margin-bottom: 24px

- **Title (h2):** "Comece agora - é grátis!"
  - Font: Poppins, 44px, weight 700
  - Color: #FFFFFF
  - Text-align: center
  - Margin-bottom: 24px

- **Subtitle:** "Sem cartão de crédito. Sem pegadinhas. Sem limite de tempo."
  - Font: Inter, 18px
  - Color: rgba(255,255,255,0.9)
  - Text-align: center

**Benefits List:** Centered, em 2 colunas

- ✓ Grupos ilimitados
- ✓ Até 50 participantes por grupo
- ✓ Listas de desejos
- ✓ Notificações por email
- ✓ Restrições personalizadas
- ✓ Suporte por email
  - Font: Inter, 16px, weight 500
  - Color: #FFFFFF
  - Check marks em #FFD700

- **CTA Button:** "Criar meu primeiro grupo 🎁"
  - Style: Large white button with primary text color
  - Background: #FFFFFF
  - Color: #D63447
  - Padding: 20px 48px
  - Font-size: 18px
  - Margin-top: 48px
  - Shadow: 0 8px 24px rgba(0,0,0,0.2)

---

### Section 7: FAQ

**Layout:** 1 column header + 2-column FAQ grid
**Background:** #FFFFFF
**Spacing:** padding: 80px 0

**Header:**

- **Title (h2):** "Perguntas frequentes"
  - Font: Poppins, 36px, weight 600
  - Text-align: center
  - Margin-bottom: 56px

**FAQ Items:** Accordion style, 2 columns on desktop

**Questions:**

1. **"Como funciona o sorteio?"**
   - "O sistema usa um algoritmo que garante que ninguém tira a si mesmo e respeita todas as restrições configuradas. O sorteio é 100% aleatório e justo."

2. **"Posso fazer o sorteio mais de uma vez?"**
   - "Não. Uma vez realizado o sorteio, os resultados são fixos para manter a integridade do jogo. Mas você pode criar um novo grupo se precisar."

3. **"Como os participantes são notificados?"**
   - "Enviamos notificações automáticas por email em cada etapa: convite, aprovação e resultado do sorteio."

4. **"E se alguém não puder participar depois do sorteio?"**
   - "O administrador do grupo pode remover participantes antes do sorteio. Após o sorteio, recomendamos criar um novo grupo."

5. **"Preciso baixar algum app?"**
   - "Não! Tudo funciona pelo navegador, em qualquer dispositivo."

6. **"Existe limite de grupos?"**
   - "Não! Você pode criar quantos grupos quiser, gratuitamente."

---

### Section 8: Footer

**Layout:** 4 columns no desktop, stack no mobile
**Background:** #212529 (charcoal)
**Spacing:** padding: 64px 0 32px

**Column 1: Brand**

- Logo "Amigo Oculto" (versão branca)
- Tagline: "Organize seu amigo secreto sem complicação"
  - Font: Inter, 14px, rgba(255,255,255,0.6)
- Social icons (Instagram, Twitter, Facebook)
  - 24px, rgba(255,255,255,0.7), hover #FFD700

**Column 2: Produto**

- Title: "Produto" (weight 600, 14px, white)
- Links: Como funciona, Recursos, Preços, Criar grupo
  - Font: Inter, 14px, rgba(255,255,255,0.7)
  - Hover: #FFD700

**Column 3: Suporte**

- Title: "Suporte"
- Links: Central de ajuda, FAQ, Contato, Reportar bug

**Column 4: Legal**

- Title: "Legal"
- Links: Termos de uso, Política de privacidade, Cookies

**Bottom Bar:**

- Divider: 1px solid rgba(255,255,255,0.1)
- Copyright: "© 2024 Amigo Oculto. Todos os direitos reservados."
  - Font: Inter, 12px, rgba(255,255,255,0.5)
  - Centered

---

## Elementos Decorativos Adicionais

1. **Confetes animados** no hero com CSS animation
2. **Fitas decorativas** nas bordas das sections principais
3. **Ícone de presente** como cursor em botões primários
4. **Partículas flutuantes** (estrelas, presentes pequenos) no background
5. **Badges "Novo"** em recursos recentes
6. **Selo de "Grátis para sempre"** visível no canto superior

---

## Responsividade Mobile

- Hero: Trocar ordem - imagem primeiro, texto depois
- Grid de features: 1 coluna em mobile
- Timeline: Vertical com linha conectora
- Testimonials: Carousel horizontal com swipe
- FAQ: Single column accordion
- Footer: Stack todas as colunas

---

## Micro-interações

1. Botões com scale(1.05) no hover
2. Cards com lift animation (-8px translateY)
3. Icons com rotate/bounce ao passar mouse
4. Números do timeline com pulse animation
5. Check marks com slide-in animation ao entrar no viewport
6. Confetes com gentle fall animation
7. CTA principal com subtle glow pulse

---

## Performance

- Lazy loading para imagens e ilustrações
- Preload para fonte principal (Poppins)
- Minimize uso de gradients complexos
- Optimize SVG icons
- Use will-change para animations
