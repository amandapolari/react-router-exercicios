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

-   Em `src` criei uma pasta chamada `Components` com um arquivo `Header.js`. Em `Header.js` criei os botões para a troca de rotas;
-   Dentro de `routes` criei um arquivo chamado `coordinator.js`, dentro desse arquivo estão as funções responsáveis pelas mudanças de rotas;
-   Dentro das funções de `routes`, cada função precisa receber como **primeiro parâmetro** uma outra função, e esta outra função recebe um `path`, esse `path` é o caminho para o qual a função vai me levar;
-   Quando `Header.js` importar as funções de `coordinator.js`, ele irá passar como argumento o hook `useNavigate`;
-   O `useNavigate` serve para realizar a navegação, sem a necessidade de mudança manual no link da página, pois dentro dele é contido um `path` que mostra esse caminho;
-   Um observação importante é que o `useNavigate` só pode ser invocado **dentro de um componente**, por isso ele é invocado em `Header.js` e passado como **primeiro** argumento das funções importadas de `Header.js`;
-   Resumindo o fluxo da lógica:
    -   `Header.js` é chamado nas páginas onde desejo ter os botões para a troca de rotas, nesse casso em:
        -   `HomePage.js`;
        -   `ProfilePage.js`;
    -   `coordinator.js` exporta as funções de mudanças de rotas;
    -   `Header.js` importa as funções de `coordinator.js` usando-as no `OnClick` dos botões, passando como argumento de suas funções o hook `useNavigate`;
-   Dessa forma temos os seguintes códigos:

    -   `coordinator.js`:

        ```
        export const goToHome = (navegate) => {
            navegate('/');
        };

        export const goToProfile = (navegate, name) => {
            navegate(`/profile/${name}`);
        };
        ```

    -   `Header.js`:

        ```
        import { useNavigate } from 'react-router-dom';
        import { goToHome, goToProfile } from '../routes/coordinator';

        function Header() {
            const navegate = useNavigate();

            return (
                <div>
                    <button
                        onClick={() => {
                            goToHome(navegate);
                        }}
                    >
                        Ir para página inicial
                    </button>
                    <button
                        onClick={() => {
                            goToProfile(navegate, 'easley');
                        }}
                    >
                        Ir para página de perfil
                    </button>
                </div>
            );
        }

        export default Header;

        ```

    -   `HomePage.js`:

        ```
        import Header from "../Components/Header";

        function HomePage() {
            return (
                <section>
                    <h1>Página inicial</h1>
                    <Header/>
                </section>
            );
        }

        export default HomePage;
        ```

    -   `ProfilePage.js`:

        ```
        import Header from '../Components/Header';

        function ProfilePage() {
            return (
                <section>
                    <h1>Página de perfil</h1>
                    <Header />
                </section>
            );
        }

        export default ProfilePage;

        ```

## 4 Exercício 3

### Enunciado

Agora configure uma rota que utiliza path param:

Crie uma nova página de produto específico por id **“/product/:id”**

**Não se preocupe em aplicar navegação de rota nela**

### Resolução

## 5 Informações úteis sobre o assunto

1. [Router (documentação)](https://reactrouter.com/en/main)
