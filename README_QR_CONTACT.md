# 📱 QR Contact - Bruno Lemos Silva

Cartão de visita digital profissional com QR Code para partilha rápida de contacto.

---

## 🌟 Características

✅ **PWA Completa** - Funciona como app nativa no iPhone
✅ **QR Code** - Escanear para adicionar contacto instantaneamente
✅ **Download vCard** - Ficheiro .vcf direto
✅ **Partilha Nativa** - Web Share API do iOS
✅ **Offline First** - Funciona sem internet (Service Worker)
✅ **Responsivo** - Otimizado para todos os ecrãs
✅ **Modo Escuro** - Suporte automático dark mode
✅ **iOS Optimized** - Safe area, notch, standalone mode
✅ **Zero Dependências** - HTML, CSS, JS puro

---

## 📁 Ficheiros

```
contact/
├── index.html                      # Página principal (PWA)
├── manifest.json                   # PWA manifest
├── sw.js                          # Service Worker (offline)
├── qr_contact_brunolemossilva.png # QR Code image
└── BrunoLemosSilva.vcf            # vCard file
```

---

## 🚀 Instalação no GitHub Pages

### 1. Criar Repositório
```bash
# No GitHub
# Criar novo repositório ou usar existente
```

### 2. Upload dos Ficheiros
```bash
git clone https://github.com/blemossilva/contact.git
cd contact

# Copiar ficheiros
cp index.html .
cp manifest.json .
cp sw.js .
cp qr_contact_brunolemossilva.png .
cp BrunoLemosSilva.vcf .

# Commit e push
git add .
git commit -m "Add QR Contact PWA"
git push
```

### 3. Ativar GitHub Pages
1. Ir para **Settings** do repositório
2. Scroll até **Pages**
3. Source: **Deploy from branch**
4. Branch: **main** (ou master)
5. Folder: **/ (root)**
6. Clicar **Save**

### 4. Aceder
```
https://blemossilva.github.io/contact/
```

---

## 📲 Adicionar ao iPhone como App

### Método 1: Safari (Recomendado)

1. **Abrir em Safari**
   ```
   https://blemossilva.github.io/contact/
   ```

2. **Tocar no ícone Partilhar** (⎙)
   - Ícone no fundo da página (ou topo se iPhone com notch)

3. **Scroll e tocar em "Adicionar ao Ecrã Inicial"**

4. **Confirmar**
   - Nome: "Bruno Lemos" (editável)
   - Ícone: QR Code
   - Tocar "Adicionar"

5. **Pronto!**
   - App aparece no ecrã inicial
   - Abre em tela cheia (sem barra Safari)
   - Funciona offline

### Método 2: Link Direto
Envie o link por:
- **AirDrop**
- **WhatsApp**
- **Email**
- **SMS**

Instruções para destinatário:
1. Abrir link em Safari
2. Adicionar ao ecrã inicial (passos acima)

---

## 🎯 Como Usar

### Partilhar o Seu Contacto

#### Opção 1: Mostrar QR Code
1. Abrir app no iPhone
2. Mostrar ecrã para outra pessoa
3. Ela escaneia com câmara do smartphone
4. Contacto é adicionado automaticamente

#### Opção 2: Partilhar Link vCard
1. Abrir app
2. Tocar "Partilhar Contacto"
3. Escolher método (WhatsApp, Email, etc.)
4. Enviar para destinatário

#### Opção 3: Partilhar Link da Página
```
https://blemossilva.github.io/contact/
```

---

## 🎨 Personalização

### Alterar Cores
Editar em [index.html](index.html):
```css
:root {
  --primary: #0047BB;      /* Azul principal */
  --secondary: #003D82;    /* Azul escuro */
  --light: #F0F4F8;        /* Fundo claro */
}
```

### Alterar Informações
Editar campos no HTML:
```html
<h1>Bruno Lemos Silva</h1>
<h2>Product Manager</h2>
<p>First Solutions</p>
```

### Alterar QR Code
1. Gerar novo QR Code apontando para:
   ```
   https://blemossilva.github.io/contact/BrunoLemosSilva.vcf
   ```
2. Salvar como `qr_contact_brunolemossilva.png`
3. Substituir ficheiro

### Alterar vCard
1. Editar [BrunoLemosSilva.vcf](BrunoLemosSilva.vcf)
2. Upload para repositório
3. Gerar novo QR Code (opcional)

---

## 🔧 Tecnologias Utilizadas

| Tecnologia | Uso |
|------------|-----|
| **HTML5** | Estrutura semântica |
| **CSS3** | Design responsivo, gradientes, animações |
| **JavaScript** | Web Share API, PWA features |
| **Service Worker** | Cache offline, performance |
| **PWA Manifest** | Instalação como app |
| **Meta Tags** | SEO, Open Graph, iOS |

---

## ✨ Funcionalidades Técnicas

### PWA (Progressive Web App)
- ✅ Instalável no ecrã inicial
- ✅ Funciona offline (Service Worker)
- ✅ Cache inteligente (Cache First)
- ✅ Atualizações automáticas
- ✅ Modo standalone (sem barra do navegador)

### iOS Optimizations
- ✅ `apple-mobile-web-app-capable` - Modo fullscreen
- ✅ `apple-mobile-web-app-status-bar-style` - Barra de status
- ✅ `apple-touch-icon` - Ícone alta resolução
- ✅ `safe-area-inset` - Suporte notch iPhone
- ✅ `user-scalable=no` - Desabilita zoom (UX nativa)
- ✅ Touch feedback - Haptic-like feedback

### Web APIs
- ✅ **Web Share API** - Partilha nativa iOS
- ✅ **Clipboard API** - Copiar link (fallback)
- ✅ **Service Worker API** - Offline support
- ✅ **Media Queries** - Dark mode, standalone detection

### Performance
- ✅ Carregamento instantâneo (cache)
- ✅ Imagem QR otimizada
- ✅ CSS inline (zero requests externos)
- ✅ JavaScript inline (zero requests externos)
- ✅ Lazy loading desabilitado para QR (eager)

---

## 📊 Estrutura do Código

### HTML
```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <!-- Meta tags iOS -->
    <!-- PWA Manifest -->
    <!-- Inline CSS -->
  </head>
  <body>
    <div class="container">
      <div class="header">...</div>
      <div class="qr-section">
        <img src="qr_contact_brunolemossilva.png">
      </div>
      <div class="actions">
        <a href="BrunoLemosSilva.vcf" download>Download</a>
        <button onclick="shareContact()">Partilhar</button>
      </div>
      <div class="features">...</div>
      <div class="contact-info">...</div>
      <div class="footer">...</div>
    </div>
    <!-- Inline JavaScript -->
  </body>
</html>
```

### CSS (Mobile-First)
```css
/* Variáveis CSS */
:root { --primary: #0047BB; }

/* Layout flexbox/grid */
.container { display: flex; flex-direction: column; }

/* Animações */
@keyframes fadeInUp { ... }

/* Media queries */
@media (prefers-color-scheme: dark) { ... }
@media not all and (display-mode: standalone) { ... }
```

### JavaScript
```javascript
// Web Share API
async function shareContact() {
  if (navigator.share) {
    await navigator.share({...});
  } else {
    // Fallback: Clipboard API
    await navigator.clipboard.writeText(...);
  }
}

// Service Worker registration
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
```

---

## 🌐 SEO e Social Media

### Meta Tags Implementadas
```html
<!-- SEO -->
<meta name="description" content="...">
<meta name="keywords" content="...">

<!-- Open Graph (Facebook, LinkedIn) -->
<meta property="og:type" content="website">
<meta property="og:url" content="...">
<meta property="og:title" content="...">
<meta property="og:image" content="qr_contact_brunolemossilva.png">

<!-- Twitter Card -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:image" content="qr_contact_brunolemossilva.png">

<!-- iOS -->
<meta name="apple-mobile-web-app-title" content="Bruno Lemos">
```

### Preview ao Partilhar
Quando alguém partilha o link:
- **Título:** Bruno Lemos Silva - Cartão Digital
- **Descrição:** Product Manager na First Solutions
- **Imagem:** QR Code
- **URL:** https://blemossilva.github.io/contact/

---

## 📱 Compatibilidade

| Plataforma | Suporte |
|------------|---------|
| **iOS Safari** | ✅ 100% Suportado |
| **iOS Chrome** | ⚠️ Limitado (sem standalone) |
| **iOS Firefox** | ⚠️ Limitado (sem standalone) |
| **Android Chrome** | ✅ Suportado (PWA) |
| **Desktop** | ✅ Funcional (não instalável) |

### Requisitos Mínimos
- iOS 12.2+ (para PWA completo)
- Safari 12.1+ (para Web Share API)
- Qualquer navegador moderno (para visualização básica)

---

## 🐛 Troubleshooting

### App não instala
- ✅ Verificar se está abrindo em **Safari** (não Chrome)
- ✅ iOS deve ser 12.2 ou superior
- ✅ Verificar se `manifest.json` está acessível

### QR Code não carrega
- ✅ Verificar caminho do ficheiro: `qr_contact_brunolemossilva.png`
- ✅ Verificar se imagem existe no repositório
- ✅ Limpar cache do navegador

### Botão "Partilhar" não funciona
- ✅ Verificar se está em HTTPS (GitHub Pages é HTTPS)
- ✅ Fallback para copiar link funciona sempre
- ✅ Web Share API requer gesture do utilizador (clique)

### Não funciona offline
- ✅ Service Worker registrado? (ver Console do navegador)
- ✅ Abrir página pelo menos uma vez online primeiro
- ✅ Verificar cache no DevTools > Application > Cache Storage

### Dark mode não ativa
- ✅ Verificar configurações iOS: Settings > Display & Brightness
- ✅ Media query `prefers-color-scheme` deve funcionar
- ✅ Testar com DevTools do Safari (Simulate: Dark Appearance)

---

## 📈 Analytics (Opcional)

Para rastrear uso, adicione Google Analytics:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Eventos úteis:
- Page view
- QR Code visualizado
- Download vCard
- Partilha realizada
- App instalada (standalone)

---

## 🔒 Segurança

### Boas Práticas Implementadas
- ✅ HTTPS obrigatório (GitHub Pages)
- ✅ Sem JavaScript externo (zero CDNs)
- ✅ Sem tracking de terceiros (privacidade)
- ✅ `rel="noopener"` em links externos
- ✅ Content Security Policy compatível

### Dados Pessoais
- ⚠️ vCard contém dados públicos (telefone, email)
- ⚠️ Considere criar versão "pública" vs "privada"
- ⚠️ Link é público - qualquer pessoa pode aceder

---

## 🚀 Melhorias Futuras (Opcional)

### V2.0
- [ ] Múltiplos idiomas (EN, PT, ES)
- [ ] Tema customizável (escolha de cores)
- [ ] Estatísticas de uso (quantas vezes QR foi escaneado)
- [ ] Formulário de contacto embutido
- [ ] Integração com CRM

### V3.0
- [ ] Backend para contadores
- [ ] QR Code dinâmico (atualiza sem mudar imagem)
- [ ] Autenticação (área privada)
- [ ] Múltiplos perfis/cartões
- [ ] Exportar para outros formatos (CSV, Excel)

---

## 📞 Suporte

**Criado para:**
Bruno Lemos Silva
Product Manager - First Solutions

**Contacto:**
- 📱 +351 967 865 855
- 📧 bruno.lemos@first-global.com
- 💼 [LinkedIn](https://linkedin.com/in/bruno-lemos)

---

## 📄 Licença

MIT License - Livre para usar, modificar e distribuir.

---

## ✅ Checklist de Deploy

```
[✓] index.html criado
[✓] manifest.json criado
[✓] sw.js criado
[✓] QR Code adicionado (qr_contact_brunolemossilva.png)
[✓] vCard criado (BrunoLemosSilva.vcf)
[✓] Repositório GitHub criado
[✓] GitHub Pages ativado
[ ] Testar em iPhone (Safari)
[ ] Adicionar ao ecrã inicial
[ ] Testar QR Code
[ ] Testar offline
[ ] Partilhar com contactos
```

---

## 🎉 Conclusão

Página PWA profissional pronta para uso!

**URL Final:**
```
https://blemossilva.github.io/contact/
```

**Funcionalidades:**
- ✅ QR Code para partilha rápida
- ✅ Instalável como app iOS
- ✅ Funciona offline
- ✅ Design profissional e responsivo

**Próximo passo:**
1. Upload para GitHub Pages
2. Testar no iPhone
3. Adicionar ao ecrã inicial
4. Partilhar com contactos! 🚀

---

**Criado com ❤️ para First Solutions**
