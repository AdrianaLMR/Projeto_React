function conteudo(props) {
    const tituloPagina = <h1>Aprendendo React</h1>;
    const imagemReact = <img src={props.imagemReact} className="img-react" alt="Imagem do React" />;


    const sobreReact = (
        <div>
            <p>
                React é uma biblioteca JavaScript de
                código aberto desenvolvida pelo Facebook. É usada para construir interfaces
                de usuário (UI) interativas e dinâmicas para aplicativos da web e móveis.
                O React utiliza um conceito chamado componentização, onde os elementos da
                interface do usuário são divididos em componentes independentes e reutilizáveis.
                Isso permite o desenvolvimento modular e a construção de interfaces complexas de
                forma mais organizada e eficiente. O React é baseado em JSX, uma extensão da
                sintaxe do JavaScript que permite escrever marcação HTML dentro do código JavaScript.
            </p>
        </div>
    );

    return (
        <div>
            <div className="titulos-pagina">
                {tituloPagina}
            </div>
            <div className="img-react">
                {imagemReact}
            </div>
            <div className="conteudo-react">
                {sobreReact}
            </div>
        </div>
    );
}

function conceitoReact() {
    const tituloConceitos = <h2>Conceitos importantes sobre React!</h2>;

    const conceitosReact = (
        <div>
            <ul>
                <li>
                    <span>Componentes:</span> São pedaços isolados de código que encapsulam a lógica e a interface do usuário. Eles podem ser compostos e reutilizados em toda a aplicação.
                </li>
                <li>
                    <span>Virtual DOM:</span> Aumentar o desempenho das aplicações, em vez de atualizar diretamente o DOM (Document Object Model) do navegador, o React cria uma representação virtual do DOM em memória e compara-a com a versão anterior para determinar as mudanças necessárias.
                </li>
                <li>
                    <span>JSX(JavaScript XML):</span> É uma extensão do JavaScript que permite escrever código HTML dentro do JavaScript. Isso facilita a criação de componentes React e torna o código  mais legível e declarativo.
                </li>
                <li>
                    <span>Unidirecionalidade de Dados:</span> Os dados fluem em uma direção específica através da hierarquia de componentes. Isso significa que as mudanças nos dados de um componente pai podem ser passadas para os componentes filhos, mas não o contrário. Isso ajuda a manter a integridade dos dados e simplifica o rastreamento de bugs.
                </li>
                <li>
                    <span>Flexibilidade:</span> O React é altamente flexível e é frequentemente combinado com outras bibliotecas e frameworks, como o Redux para gerenciamento de estado, React Router para navegação, e muitos outros. Ele é amplamente utilizado na indústria e é uma escolha popular entre os desenvolvedores para a construção de interfaces de usuário modernas e reativas.
                </li>
            </ul>
        </div>
    );

    return (
        <div>
            <div className="titulos-pagina">
                {tituloConceitos}
            </div>
            <div className="list-conceitos">
                {conceitosReact}
            </div>
        </div>
    )
}

function reactDom() {
    const tituloReactDom = <h2>React DOM</h2>;

    const sobreReactDom = (
        <p>
            O React DOM é uma parte fundamental da arquitetura do React, sendo responsável pela interação com o DOM (Document Object Model) em aplicativos web construídos
            com React. Ele utiliza uma Representação Virtual do DOM para efetuar atualizações eficientes na interface do usuário.
            Essa representação é uma versão em memória do DOM real, permitindo ao React comparar e aplicar alterações de forma otimizada.
            O React DOM atualiza apenas as partes do DOM que foram modificadas, resultando em uma renderização rápida e responsiva. Sua abordagem reativa automatiza o
            processo de atualização do DOM, garantindo uma experiência de desenvolvimento mais eficiente e uma interface de usuário mais ágil.
        </p>

    );
    return (
        <div>
            <div className="titulos-pagina">
                {tituloReactDom}
            </div>
            <div className="react-dom">
                {sobreReactDom}
            </div>
        </div>
    )
}

const imgReact = './assets/img/img-react.jpg';

ReactDOM.render(
    <div>
        <conteudo imagemReact={imgReact} />
        <conceitoReact />
        <ceactDom />
    </div>,
    document.getElementById("root")
);