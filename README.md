 

# Projects Manager

Este é um projeto que desenvolvi **por iniciativa própria**, utilizando **Next.js (App Router)**, com o objetivo de **aprofundar meu conhecimento no framework** e em conceitos modernos de aplicações web full stack.

O projeto consiste em um **gerenciador de projetos**, onde usuários podem se cadastrar, realizar login e gerenciar seus próprios projetos (criar, editar e excluir).

---

##  Funcionalidades

* Autenticação de usuários (Signup e Login)
* Criação, edição e exclusão de projetos
* Associação de projetos a um usuário (1:N)
* Controle de sessão utilizando **cookies**
* Proteção de rotas com base na sessão do usuário
* Interface moderna utilizando **shadcn/ui**
* Validação e gerenciamento de formulários

---

##  Conceitos e Tecnologias Utilizadas

### Next.js (App Router)

* Utilização do **App Router**
* Separação entre **Server Components** e **Client Components**
* Navegação e rotas dinâmicas

### Server Actions

* Uso extensivo de **Server Actions** para:

  * Criar usuários
  * Autenticar login
  * Criar, editar e excluir projetos
* Comunicação direta entre frontend e backend sem necessidade de APIs REST tradicionais

### Autenticação e Sessão

* Criação de um fluxo de autenticação **manual**, sem uso de bibliotecas prontas como NextAuth
* Gerenciamento de sessão com **cookies**
* Implementação de `getCurrentUser` para obter o usuário autenticado no servidor

### Segurança e Arquitetura

* Uso do conceito de **DAL (Data Access Layer)** para acesso ao banco de dados
* Utilização da biblioteca **`server-only`** para garantir que dados sensíveis nunca sejam enviados ao client
* Separação clara entre lógica de negócio e componentes de UI

### Banco de Dados

* **Prisma ORM**
* PostgreSQL
* Relacionamento **1:N (User → Projects)**
* Uso de **Enums** no banco de dados para status do projeto
* Migrations e versionamento do schema

### Formulários e Validação

* **React Hook Form** para gerenciamento de formulários
* **Zod** para validação e tipagem dos dados
* Schemas reutilizáveis para diferentes ações (login / signup)
* Uso de `discriminatedUnion` para lidar com múltiplos fluxos em um único formulário

---

##  Estratégia de Desenvolvimento

No início do projeto, utilizei **mocked data** (dados estáticos) para:

* Estruturar a interface
* Validar fluxos de navegação
* Ter uma visão visual clara da aplicação

Posteriormente, substituí os dados mockados por um banco de dados real, utilizando Prisma, o que facilitou a transição e organização do código.

---

##  Objetivo do Projeto

Este projeto teve como principal objetivo:

* Consolidar conhecimentos em **Next.js moderno**
* Entender melhor a separação entre client e server
* Aprender autenticação sem bibliotecas prontas
* Praticar boas práticas de organização de código
* Simular desafios reais de uma aplicação full stack

---

##  Próximos Passos (Possíveis Evoluções)

* Projeto ainda em desenvolvimento porem maior parte da funcionalidades estao ja funcionando. 
* Melhorar a proteção de rotas
* Implementar roles de usuário
* Criar filtros e buscas avançadas de projetos
* Adicionar testes
* Implementar logout automático por expiração de sessão

---

### Consideração Final

Este projeto representa um passo importante na minha evolução como desenvolvedor, principalmente no entendimento de **aplicações full stack com Next.js**, **server actions** e **controle manual de autenticação**.
 
