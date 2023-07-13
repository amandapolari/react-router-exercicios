# React Router - Exercício

## Índice

-   [1. Configurações Iniciais](#1-configurações-iniciais)
-   [2. Exercício 1](#2-exercício-1)
-   [3. Exercício 2](#3-exercício-2)
-   [4. Exercício 3](#4-exercício-3)
-   [5. Informações úteis sobre o assunto](#5-informações-úteis-sobre-o-assunto)

## 1. Configurações Iniciais

-   Como o react router é uma biblioteca, precisamos instalá-la. Fazemos isso executando o seguinte comando na raiz do projeto:

    ```
    npm install react-router-dom
    ```

## 2 Exercício 1

### Enunciado

Crie um site com roteamento de 3 páginas, utilizando o React Router:

-   Página inicial
-   Página de perfil
-   Página de erro

### Resolução

-   Dentro da pasta `src` criei uma pasta `routes` e dentro de `routes` criei um arquivo chamado `Router.js`, nesse arquivo criei as rotas com os componentes importados: `<BrowserRouter></BrowserRouter>`, `<Routes></Routes>` e <Route/>. Cada `Route` recebe um `path` e um `element` que corresponde à qual página será escolhida para ser exibida diante do path apresentado.

    -   Código de `Router.js`:

        ```
        import React from 'react';
        import { BrowserRouter, Route, Routes } from 'react-router-dom';
        import HomePage from '../pages/HomePage';
        import ProfilePage from '../pages/ProfilePage';
        import ErrorPage from '../pages/ErrorPage';

        const Router = () => {
            return (
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/profile/:name" element={<ProfilePage />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </BrowserRouter>
            );
        };

        export default Router;

        ```

-   Além disso, é preciso chamar o arquivo `Router,js` em `App.js` para que ele possa ser renderizado conforme solicitado. Lembrando que até esse momento mudamos a url manualmente para ver a mudança de rotas acontecendo.

    -   Código de `App.js`:

        ```
        import Router from './routes/Router';

        function App() {
            return (
                <>
                    Exercicio de Router
                    <Router />
                </>
            );
        }

        export default App;
        ```

## 3 Exercício 2

### Enunciado

Agora monte a mudança de rota no clique dos botões do cabeçalho:

-   Botão de ir para página inicial
-   Botão de ir para página de perfil

### Resolução

## 4 Exercício 3

### Enunciado

Agora configure uma rota que utiliza path param:

Crie uma nova página de produto específico por id **“/product/:id”**

**Não se preocupe em aplicar navegação de rota nela**

### Resolução

## 5 Informações úteis sobre o assunto

1. [Router (documentação)](https://reactrouter.com/en/main)
