# 📚 Documentação do Projeto: Site de Fisioterapia

## 1\. Visão Geral do Projeto

Este é um site **Jamstack** de alta performance, construído para uma fisioterapeuta. Ele utiliza uma arquitetura "decoupled" (desacoplada), onde o frontend (o site visual) é separado do backend (o gerenciamento de conteúdo).

  **O Frontend:** É um site estático gerado pelo **Astro**. Isso significa que ele é extremamente rápido, seguro e otimizado para SEO, pois o navegador recebe HTML e CSS puros.

* **O Backend:** É um **Headless CMS (Sistema de Gerenciamento de Conteúdo sem Cabeça)** gerenciado pelo **Sanity.io**. Isso permite que a cliente (fisioterapeuta) edite todo o conteúdo do site (serviços, posts de blog, depoimentos) de forma independente, sem precisar de um desenvolvedor.

## 2\. Stack de Tecnologias

* **Frontend:** [Astro](https://astro.build/)
* **Backend (CMS):** [Sanity.io](https://www.sanity.io/)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
  * `@tailwindcss/typography`: Plugin para estilizar o "Rich Text" vindo do Sanity (`prose`).
* **Formulários:** [Formspree](https://formspree.io/) (para Contato e Newsletter)
* **Hospedagem (Planejada):** [Vercel](https://vercel.com/) (para o frontend Astro)
* **Pacotes-Chave:**
  * `@sanity/astro`: Integração oficial Sanity + Astro.
  * `@sanity/image-url`: Para construir URLs otimizadas das imagens do Sanity.
  * `@portabletext/to-html`: Para converter o "Rich Text" do Sanity em HTML seguro.

## 3\. Estrutura do Projeto

Abaixo está a arquitetura de pastas e o propósito dos arquivos-chave:

```bash
site-fisio/
│
├── backend/                  # O PAINEL DE ADMIN (SANITY STUDIO)
│   ├── sanity.config.ts      # Configuração do Studio (ID do projeto)
│   └── schemas/              # O "coração" do CMS: define os tipos de conteúdo
│       ├── servico.ts
│       ├── post.ts
│       └── depoimento.ts
│
├── public/                   # Arquivos públicos (copiados 1:1)
│   └── images/
│       └── foto-profissional.jpg # Imagem da pág. 'sobre' (referenciada por '/images/...')
│
├── src/                      # O "coração" do FRONTEND (ASTRO)
│   ├── assets/
│   │   └── whatsapp-icon-white.png # Imagens processadas pelo Astro
│   │
│   ├── components/
│   │   └── IconWhatsapp.astro    # Componente reutilizável (ícone)
│   │
│   ├── layouts/
│   │   └── LayoutBase.astro      # Molde principal (Header, Footer, Menu Responsivo)
│   │
│   ├── lib/
│   │   └── sanityClient.ts     # Configuração da conexão Astro -> Sanity
│   │
│   └── pages/                  # Todas as páginas e rotas do site
│       ├── index.astro         # Página Home
│       ├── sobre.astro         # Página Estática
│       ├── contato.astro       # Página Estática com Formulário
│       ├── obrigado.astro      # Página de redirecionamento do Formspree
│       ├── servicos/
│       │   └── [slug].astro    # Template dinâmico para cada serviço
│       └── blog/
│           └── [slug].astro    # Template dinâmico para cada post
│
├── astro.config.mjs          # Configuração principal do Astro (integrações)
├── tailwind.config.mjs       # Configuração do Tailwind (plugin 'typography')
└── package.json              # Dependências do frontend (Astro)
```

## 4\. Guia de Desenvolvimento Local

Para rodar o projeto em sua máquina local, você precisará de dois terminais.

1. Clone o repositório.
2. Instale as dependências do frontend (Astro):

    ```bash
    npm install
    ```

3. Instale as dependências do backend (Sanity):

    ```bash
    cd backend
    npm install
    cd ..
    ```

### Terminal 1: Rodar o Backend (Sanity Studio)

```bash
# A partir da pasta raiz 'site-fisio'
cd backend
npm run dev
```

* O Sanity Studio estará disponível em: `http://localhost:3333`

### Terminal 2: Rodar o Frontend (Astro)

```bash
# A partir da pasta raiz 'site-fisio'
npm run dev
```

* O site estará disponível em: `http://localhost:4321`

## 5\. Manual do Usuário (Para a Fisioterapeuta)

Este é o guia de como você (ou sua cliente) irá gerenciar o conteúdo do site.

**Acesso:** Para gerenciar o conteúdo, acesse o painel de administração em `http://localhost:3333` (ou, após o deploy, o link de produção, ex: `seusite.com/admin`).

### Como Adicionar/Editar um Serviço (RF 01)

1. No menu à esquerda, clique em **"Serviço"**.
2. Para editar um existente, clique nele. Para criar um novo, clique no ícone **"+"** (Adicionar).
3. Preencha os campos:
      * **Título:** O nome do tratamento (ex: "Fisioterapia Ortopédica").
      * **URL (Slug):** *Importante\!* Após digitar o título, clique no botão **"Generate"** (Gerar). Isso cria o link (ex: `.../servicos/fisioterapia-ortopedica`). **Este campo é obrigatório.**
      * **Resumo:** O texto curto que aparece na página Home e na página `/servicos`.
      * **Descrição Completa:** O conteúdo principal da página de detalhes. Use as ferramentas para criar listas, negrito, etc. (RNF 04).
4. Quando terminar, clique no botão verde **"Publish"** (Publicar) no canto inferior.

### Como Adicionar/Editar um Post do Blog (RF 01)

1. No menu à esquerda, clique em **"Post do Blog"**.
2. Preencha os campos:
      * **Título:** O título do artigo.
      * **URL (Slug):** *Importante\!* Clique em **"Generate"** após digitar o título. **Este campo é obrigatório.**
      * **Conteúdo:** O texto completo do artigo (Rich Text).
      * **Imagem de Capa:** Faça o upload da imagem que aparecerá no topo do post e no card da lista do blog.
3. Clique em **"Publish"**.

### Como Adicionar/Editar um Depoimento (RF 01)

1. No menu à esquerda, clique em **"Depoimento"**.
2. Preencha os campos:
      * **Nome do Paciente:** (ex: "Maria S.")
      * **Texto do Depoimento:** A mensagem que o paciente deixou.
3. Clique em **"Publish"**.

## 6\. Configuração e Chaves (IDs)

O projeto depende de algumas chaves externas para funcionar:

### A. Sanity (jysbbrsy)

* `projectId: "jysbbrsy"`
* `dataset: "production"`
* **Onde estão:**
    1. `backend/sanity.config.ts` (para o Studio)
    2. `astro.config.mjs` (para a integração Astro)
    3. `src/lib/sanityClient.ts` (para o helper de busca de dados)

### B. Formspree

* **ID do Formulário de Contato:** `SEU_ID_DO_FORM_CONTATO`
  * **Onde está:** `src/pages/contato.astro`
* **ID do Formulário da Newsletter:** `SEU_ID_DO_FORM_NEWSLETTER`
  * **Onde está:** `src/layouts/LayoutBase.astro`

## 7\. Guia de Deploy (Publicação)

O projeto será hospedado em duas plataformas:

### 1\. Backend (Sanity Studio)

O painel de administração (`http://localhost:3333`) precisa ser publicado na web.

1. Abra um terminal na pasta `backend/`.
2. Rode o comando: `npm run deploy` (ou `npx sanity deploy`).
3. Siga os passos. Ele pedirá um "hostname" (ex: `site-suzany-admin.sanity.studio`).
4. O seu painel de admin estará online nesse endereço.

### 2\. Frontend (Astro na Vercel)

1. Coloque seu projeto no **GitHub** (crie um repositório).
2. Crie uma conta na **Vercel** e conecte seu GitHub.
3. Importe o projeto (`site-fisio`). A Vercel detectará o Astro automaticamente.
4. **Antes de clicar em "Deploy"**, vá para "Environment Variables" (Variáveis de Ambiente) e adicione as chaves do Sanity:
      * `SANITY_PROJECT_ID`: `jysbbrsy`
      * `SANITY_DATASET`: `production`
5. Clique em **"Deploy"**. Seu site estará online\!

### 3\. (Pós-Deploy) Webhooks (O passo final)

Para que o site atualize *automaticamente* quando a fisioterapeuta clica em "Publish", você precisa conectar o Sanity à Vercel.

1. **Na Vercel:** Vá em "Settings" -\> "Git" -\> "Deploy Hooks". Crie um Hook, dê um nome (ex: "Sanity Update") e copie a URL gerada.
2. **No Sanity.io (online):** Vá em "API" -\> "Webhooks". Crie um Webhook.
3. **Cole a URL** da Vercel no campo "URL" do Sanity.
4. Configure o "Trigger" para "on Create, Update, Delete".
5. Salve.

**Pronto\!** Agora, quando a cliente publicar um novo post no blog, o Sanity "avisará" a Vercel, e a Vercel automaticamente fará um "re-build" do site com o novo conteúdo.

---
