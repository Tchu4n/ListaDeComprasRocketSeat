<div align="center">

# 🛒 Quicklist

**Projeto de estudo da [Rocketseat](https://www.rocketseat.com.br/): uma lista de compras feita com HTML, CSS e JavaScript puros, para praticar os fundamentos do desenvolvimento web.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/status-em%20estudo-CA3884?style=for-the-badge)

</div>

## 🎯 Sobre o projeto

O Quicklist é um **projeto educacional**. A ideia não é criar um produto completo: é usar um problema simples e do dia a dia (montar a lista de compras da semana) para praticar o que é a base de qualquer aplicação web:

- estruturar uma página com **HTML semântico**;
- estilizar uma interface a partir de um layout com **CSS**;
- dar vida à página com **JavaScript**, manipulando o DOM e reagindo às ações do usuário.

Por isso o projeto não usa nenhum framework, biblioteca ou ferramenta de build. Tudo é feito "na mão", para entender o que acontece por baixo dos panos.

## 🧩 O desafio

Construir uma lista de compras em que a pessoa usuária consiga:

- [x] Adicionar um novo item pelo campo de texto
- [x] Marcar um item como comprado
- [x] Remover um item da lista
- [x] Ver um aviso de que o item foi removido, que some sozinho ou ao clicar em fechar
- [x] Receber uma mensagem de erro ao tentar adicionar um item vazio

## 📚 O que foi praticado

### HTML
- Estrutura semântica com `header`, `main`, `form`, `ul` e `li`
- Formulários: `label` associado ao `input`, `button type="submit"`
- Acessibilidade: `aria-label`, `aria-live`, `aria-invalid`, `role="alert"` e a classe `.sr-only` para leitores de tela
- Ícones em SVG inline

### CSS
- Variáveis CSS (`:root`) para cores, raio e fonte
- Reset básico e `box-sizing: border-box`
- Estados visuais: `:hover`, `:focus`, item concluído e campo com erro
- Uso do atributo `[hidden]` para mostrar e esconder elementos

### JavaScript
- Seleção de elementos com `getElementById` e `querySelector`
- Criação de elementos com `createElement`, `append` e `cloneNode`
- Eventos `submit`, `input`, `change` e `click`, com `preventDefault`
- **Delegação de eventos**: um único listener na lista atende inclusive os itens criados depois
- `closest()` para encontrar o item a partir do botão clicado
- `setTimeout` e `clearTimeout` para controlar o tempo do alerta
- Validação de entrada com `trim()`

<div align="center">

Feito com 💜 por [Tchu4n](https://github.com/Tchu4n) durante os estudos na [Rocketseat](https://www.rocketseat.com.br/)

</div>
