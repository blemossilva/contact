# 🚀 Deploy Rápido - QR Contact

Guia prático para colocar a página no ar em **5 minutos**.

---

## 📦 O Que Você Precisa

Ficheiros criados:
```
✅ index.html              (16KB) - Página principal PWA
✅ manifest.json           (756B) - PWA manifest
✅ sw.js                   (3.4KB) - Service Worker
✅ .htaccess               (3.2KB) - Apache config (opcional)
✅ qr_contact_brunolemossilva.png - QR Code (adicionar)
✅ BrunoLemosSilva.vcf     - vCard file (adicionar)
```

---

## 🎯 Opção 1: GitHub Pages (Recomendado)

### Vantagens
✅ **Grátis**
✅ **HTTPS automático**
✅ **Deploy automático**
✅ **CDN global**
✅ **Zero configuração**

### Passos

#### 1. Criar Repositório
```bash
# No GitHub.com
1. Clicar em "New Repository"
2. Nome: "contact" (ou outro)
3. Public (ou Private se tiver GitHub Pro)
4. Initialize: Yes (com README)
5. Create Repository
```

#### 2. Upload dos Ficheiros

**Método A: Interface Web (Mais Fácil)**
```
1. No repositório, clicar "Add file" > "Upload files"
2. Arrastar ficheiros:
   - index.html
   - manifest.json
   - sw.js
   - qr_contact_brunolemossilva.png
   - BrunoLemosSilva.vcf
3. Commit message: "Add QR Contact PWA"
4. Commit
```

**Método B: Git CLI**
```bash
# Clonar repositório
git clone https://github.com/blemossilva/contact.git
cd contact

# Copiar ficheiros
cp /path/to/index.html .
cp /path/to/manifest.json .
cp /path/to/sw.js .
cp /path/to/qr_contact_brunolemossilva.png .
cp /path/to/BrunoLemosSilva.vcf .

# Commit e push
git add .
git commit -m "Add QR Contact PWA"
git push origin main
```

#### 3. Ativar GitHub Pages
```
1. Ir para Settings do repositório
2. No menu lateral, clicar em "Pages"
3. Source: "Deploy from a branch"
4. Branch: "main" (ou "master")
5. Folder: "/ (root)"
6. Save
```

#### 4. Aguardar Deploy
```
⏱️ Tempo: 1-3 minutos
📍 URL será mostrado: https://blemossilva.github.io/contact/
```

#### 5. Testar
```bash
# Abrir no iPhone Safari
https://blemossilva.github.io/contact/

# Verificar:
✅ Página carrega
✅ QR Code aparece
✅ Botão download funciona
✅ Botão partilhar funciona
```

#### 6. Adicionar ao iPhone
```
1. Abrir Safari no iPhone
2. Navegar para: https://blemossilva.github.io/contact/
3. Tocar ícone Partilhar (⎙)
4. "Adicionar ao Ecrã Inicial"
5. Confirmar
6. App aparece no ecrã inicial ✅
```

---

## 🔧 Opção 2: Netlify

### Vantagens
✅ Grátis
✅ Deploy automático via Git
✅ HTTPS custom domain
✅ Forms integradas
✅ Analytics

### Passos

```bash
1. Criar conta em https://netlify.com
2. "Add new site" > "Import an existing project"
3. Conectar GitHub repository
4. Deploy settings:
   - Build command: (deixar vazio)
   - Publish directory: .
5. Deploy site
6. URL: https://RANDOM.netlify.app (ou custom domain)
```

---

## 🌐 Opção 3: Vercel

### Vantagens
✅ Grátis
✅ Deploy instantâneo
✅ Edge Network global
✅ Custom domains
✅ Analytics

### Passos

```bash
1. Criar conta em https://vercel.com
2. "Add New Project"
3. Import Git Repository (GitHub)
4. Deploy
5. URL: https://RANDOM.vercel.app
```

---

## 📱 Opção 4: Servidor Próprio

### Requisitos
- Apache ou Nginx
- HTTPS configurado (obrigatório para PWA)
- Domínio próprio

### Apache
```bash
# 1. Upload via FTP/SFTP
scp -r * user@server:/var/www/html/contact/

# 2. Configurar .htaccess (já criado)
# Verificar se mod_rewrite está ativo
sudo a2enmod rewrite
sudo systemctl restart apache2

# 3. Testar
https://seudominio.com/contact/
```

### Nginx
```nginx
# /etc/nginx/sites-available/contact
server {
    listen 443 ssl http2;
    server_name seudominio.com;

    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    root /var/www/html/contact;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    # Cache para imagens
    location ~* \.(png|jpg|jpeg|gif|ico)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    # vCard download
    location ~* \.vcf$ {
        add_header Content-Disposition "attachment";
        add_header Content-Type "text/vcard";
    }

    # Service Worker e Manifest
    location ~* (sw\.js|manifest\.json)$ {
        expires 1d;
        add_header Cache-Control "public";
    }

    # Segurança
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";
    add_header X-XSS-Protection "1; mode=block";
}

# Redirect HTTP para HTTPS
server {
    listen 80;
    server_name seudominio.com;
    return 301 https://$server_name$request_uri;
}
```

```bash
# Ativar
sudo ln -s /etc/nginx/sites-available/contact /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## ✅ Checklist Pós-Deploy

### Testes Obrigatórios

```
[ ] Página carrega sem erros
[ ] QR Code aparece corretamente
[ ] Botão "Download vCard" funciona
[ ] Botão "Partilhar Contacto" funciona
[ ] Links de contacto funcionam (telefone, email, LinkedIn)
[ ] Service Worker registra (ver Console)
[ ] Manifest.json carrega (verificar Network tab)
[ ] Página funciona offline (desativar WiFi e recarregar)
[ ] Design responsivo (testar em diferentes ecrãs)
[ ] Dark mode ativa corretamente (iOS Settings)
```

### Testes iPhone Específicos

```
[ ] Abrir em Safari (não Chrome!)
[ ] Adicionar ao Ecrã Inicial
[ ] Abrir como app (fullscreen, sem barra Safari)
[ ] QR Code escaneável com outra pessoa
[ ] Download vCard salva em Contactos
[ ] Partilhar via WhatsApp funciona
[ ] Partilhar via AirDrop funciona
[ ] Funciona offline (modo avião)
```

### Otimizações (Opcional)

```
[ ] Google Analytics adicionado
[ ] Custom domain configurado
[ ] SEO otimizado (title, description)
[ ] Open Graph images corretas
[ ] Sitemap.xml criado
[ ] Robots.txt criado
```

---

## 🐛 Troubleshooting Deploy

### GitHub Pages não ativa
```
Possíveis causas:
✅ Repositório deve ser público (ou GitHub Pro para privado)
✅ Branch correta selecionada
✅ Aguardar 2-5 minutos para primeira build
✅ Verificar em Actions se build falhou
```

### 404 Not Found
```
Soluções:
✅ URL correta: https://USERNAME.github.io/REPO/
✅ Ficheiros no root do repositório
✅ index.html com nome exato (case-sensitive)
✅ Limpar cache do navegador
```

### HTTPS não funciona
```
GitHub Pages:
✅ Aguardar 10-15 minutos após primeiro deploy
✅ Verificar em Settings > Pages se certificado foi gerado
✅ Forçar HTTPS em Settings > Pages

Servidor próprio:
✅ Certificado SSL válido (Let's Encrypt grátis)
✅ Configurar redirect HTTP → HTTPS
```

### PWA não instala no iPhone
```
Verificar:
✅ HTTPS obrigatório
✅ Manifest.json acessível
✅ Abrir em Safari (não Chrome)
✅ iOS 12.2 ou superior
```

### Service Worker não registra
```
Console:
✅ Verificar erros no Console do navegador
✅ Path do sw.js correto
✅ HTTPS ativo
✅ Scope correto

Debug:
Safari > Develop > Service Workers
```

---

## 📊 Monitorização

### Google Analytics (Opcional)

Adicionar antes do `</head>` em index.html:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');

  // Eventos customizados
  function trackEvent(category, action, label) {
    gtag('event', action, {
      event_category: category,
      event_label: label
    });
  }

  // Rastrear downloads
  document.querySelector('a[download]').addEventListener('click', () => {
    trackEvent('Engagement', 'download_vcard', 'BrunoLemosSilva.vcf');
  });

  // Rastrear partilhas
  window.shareContact = async function() {
    trackEvent('Engagement', 'share_contact', 'web_share_api');
    // ... resto do código
  };
</script>
```

### Métricas Úteis
- Page views
- Downloads de vCard
- Partilhas realizadas
- Tempo na página
- Dispositivos (iOS vs Android)
- Navegadores

---

## 🔄 Atualizações Futuras

### Como Atualizar Conteúdo

```bash
# 1. Editar ficheiros localmente
# 2. Commit e push
git add index.html  # ou outro ficheiro alterado
git commit -m "Update contact info"
git push

# 3. GitHub Pages atualiza automaticamente (1-2 min)
```

### Atualizar vCard
```bash
1. Editar BrunoLemosSilva.vcf
2. Gerar novo QR Code (opcional, se URL mudou)
3. Substituir qr_contact_brunolemossilva.png
4. Commit e push
5. Service Worker cache expira em 1 dia
```

### Versioning
```bash
# Usar tags Git para versões
git tag -a v1.0.0 -m "Initial release"
git push origin v1.0.0

git tag -a v1.1.0 -m "Update contact info"
git push origin v1.1.0
```

---

## 📞 Suporte

Se encontrar problemas:

1. **Verificar [README_QR_CONTACT.md](README_QR_CONTACT.md)** - Troubleshooting completo
2. **Console do navegador** - Ver erros JavaScript
3. **GitHub Pages status** - https://www.githubstatus.com/
4. **Testar em modo anónimo** - Eliminar cache/cookies

---

## ✅ Resumo - Deploy em 5 Minutos

```bash
# Método mais rápido (GitHub Pages)

1. Criar repositório no GitHub (1 min)
2. Upload ficheiros via interface web (2 min)
3. Ativar GitHub Pages em Settings (1 min)
4. Aguardar deploy (1 min)
5. Testar URL (30 seg)

Total: ~5 minutos ✅
URL: https://blemossilva.github.io/contact/
```

---

## 🎉 Pronto!

Após deploy, partilhe:

**Link Direto:**
```
https://blemossilva.github.io/contact/
```

**Link Curto (opcional):**
```
Use bit.ly ou tinyurl.com:
https://bit.ly/bruno-contact
```

**QR Code:**
```
Mostrar ecrã do iPhone para escanear
```

**Adicionar ao iPhone:**
```
Instruções na própria página!
```

---

**Boa sorte com o deploy! 🚀**
