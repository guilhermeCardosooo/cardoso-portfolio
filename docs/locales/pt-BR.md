# ⚡ Cardoso Developer Portfolio

![Demonstração](https://i.imgur.com/CpDnfxb.mp4)

> **Documentação em outros idiomas:**
> 
> [🇺🇸 English](../../README.md) | [🇪🇸 Español](./es-ES.md) | [🇫🇷 Français](./fr-FR.md)

---

### 🚀 Introdução e os Bastidores
Este projeto é o meu portfólio pessoal e representa um passo direto na minha transição para me tornar um **desenvolvedor Full-Stack**.

Meu foco principal nos últimos tempos tem sido no backend, especialmente com **Java**. Já fazia vários meses que eu não mexia com TypeScript, então estava um pouco "enferrujado". Mesmo assim, decidi encarar o **Angular** moderno e construir este projeto do zero em um sprint intensivo de **um dia**. A experiência comprovou o poder do ecossistema: produtividade e organização muito superiores a qualquer HTML/CSS puro.

---

### 🎨 Do Conceito no Figma para o Código
Acredito que desenvolvimento de software começa pelo planejamento visual e estrutural antes da primeira linha de código:

1. **Conceito Visual no Figma:** Desenhei todo o layout base, espaçamentos e hierarquia visual diretamente no **Figma** (estrutura do banner, distribuição dos cards, carrossel e seção de contato).
2. **IA como Ferramenta de Aceleração:** Em vez de deixar a IA "inventar" telas genéricas, utilizei a IA estritamente como copiloto técnico para traduzir com agilidade o conceito que eu já havia desenhado no Figma para o template do Angular.
3. **Engenharia e Refinamento:** A gestão de estado, os contratos do TypeScript, o pipeline de múltiplos idiomas (i18n) e as variáveis de tema foram todos arquitetados e ajustados manualmente.

<p align="center">
  <img src="../assets/figma-concept.png" alt="Conceito no Figma" width="400" />
  <br>
  <em>Conceito inicial desenhado no Figma antes de iniciar a codificação.</em>
</p>

---

### 🎯 O que foi aplicado de Angular Moderno
Em vez de cair em tutoriais antigos com `NgModule`, o projeto utiliza os recursos contemporâneos do framework:
* **Signals e Reatividade Granular:** Controle do alternador de tema (*dark/light*), estado do dropdown e dados de idioma usando primitivas reativas (`signal`, `computed`, `input.required`).
* **Componentes Standalone:** Arquitetura enxuta, modular e livre de módulos legados.
* **Tipagem Estrita com TypeScript:** Contratos de dados claros e bem definidos para habilidades, projetos e links sociais.
* **i18n Reativo e Temas:** Troca de idiomas (`pt-BR`, `en-US`, `es-ES`, `fr-FR`) e temas visuais sem necessidade de recarregar a página.

### 📂 Estrutura do Projeto
```text
cardoso-portfolio
├─ docs
│  ├─ assets                 # Demonstrações e mockups do Figma
│  └─ locales                # READMEs em múltiplos idiomas
├─ public                    # Imagens de perfil e mídias estáticas
├─ src
│  ├─ app
│  │  ├─ app.config.ts       # Configuração de inicialização standalone
│  │  ├─ app.ts              # Componente raiz da aplicação
│  │  └─ modules
│  │     ├─ constants        # Dicionários de tradução (i18n)
│  │     ├─ models           # DTOs e interfaces de dados estritas
│  │     ├─ screens
│  │     │  └─ portfolio     # Componente da tela de portfólio
│  │     └─ services         # Hub de estado reativo (StorageService)
│  ├─ assets
│  │  └─ profile.json        # Dados estruturados do portfólio
│  ├─ styles.scss            # Variáveis de tema e resets globais
│  └─ main.ts                # Inicializador da aplicação
├─ angular.json              # Configurações de build do Angular CLI
├─ README.md                 # Documentação técnica principal
└─ tsconfig.json             # Configurações estritas do compilador TS
```

### 🛠️ Como Executar Localmente
```
# Clone o repositório
git clone https://github.com/guilhermeCardosooo/cardoso-portfolio.git

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm start
# ou
ng serve
```
Acesse http://localhost:4200/ no navegador.

---

### 📜 Licença
Projeto pessoal desenvolvido para fins de aprendizado, consolidação de stack e apresentação profissional.
