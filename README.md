# PR Tracker Frontend

Este repositório contém a **Single-Page Application (SPA)** em **React 18 + TypeScript** que consome o **PR Tracker BFF** para exibir perfil, repositórios, pull requests, commits e branches do GitHub.

---

## Tecnologias Utilizadas

- **React 18** + **TypeScript**  
- **Vite** – bundler e dev server com Hot Module Replacement  
- **React Router v6** – roteamento client-side  
- **Axios** – cliente HTTP para chamar o BFF  
- **CSS Modules** (ou **styled-components**) – isolamento de estilos por componente  
- **Hooks** (`useState`, `useEffect`, `useParams`) – gerenciamento simples de estado e ciclo de vida  
- **Jest** + **React Testing Library** – testes unitários de componentes  
- **ESLint** + **Prettier** – lint e formatação automática  

---

## Padrão de Projeto

Adotamos a separação **“Presentational vs. Container”**:

- **Containers / Pages** (`src/pages/`)  
  – Fazem *fetch* dos dados (via Axios), gerenciam estados de loading e erro e passam *props* para os componentes de UI.  
- **Presentational Components** (`src/components/`)  
  – Componentes puros que recebem dados por *props* e apenas renderizam a interface  
  (por exemplo, `UserCard`, `RepoCard`, `PullItem`).  

---

## Integração com o BFF

Todas as chamadas de API passam pelo **PR Tracker BFF** (Node.js + NestJS), que serve como proxy e camada de validação para o microserviço Java:

- **Base URL** (definida em `src/api/api.ts`):  