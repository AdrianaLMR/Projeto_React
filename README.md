# Projeto_React

O projeto consiste em componentes React que descrevem e explicam alguns conceitos importantes sobre o React. Vou explicar cada parte:

## Componente `conteudo`:

Este componente representa o conteúdo principal da página. Ele recebe uma propriedade `imagemReact` que contém o caminho para a imagem do React.

### Dentro do componente, há três seções:

- `tituloPagina`: Um título principal representado por um elemento h1.
- `imagemReact`: Uma imagem do React representada por um elemento img, onde o caminho da imagem é fornecido pela propriedade imagemReact.
- `sobreReact`: Um parágrafo que descreve brevemente o que é o React.

## Componente `conceitoReact`:

Este componente aborda conceitos importantes sobre o React. Ele consiste em:

- `tituloConceitos`: Um título que descreve o conteúdo que será abordado.
- `conceitosReact`: Uma lista de itens não ordenados que descrevem os conceitos importantes do React.

## Componente `reactDom`:

Este componente fala especificamente sobre o React DOM, que é uma parte fundamental da arquitetura do React. Ele contém informações sobre o que é o React DOM e como ele interage com o DOM real.

### Chamada de `ReactDOM.render()`:

Nesta parte, os componentes são renderizados no elemento com o ID "root" do HTML. São renderizados os componentes `conteudo`, `conceitoReact` e `reactDom`.

- A imagem do React é passada como uma propriedade para o componente `conteudo`.
- Os outros componentes não recebem propriedades e são apenas renderizados com seu conteúdo interno.
  
  ![img-projt-react](https://github.com/AdrianaLMR/Projeto_React/assets/98758967/78b25ed8-d83f-4d10-8c37-07eb2948f74c)
