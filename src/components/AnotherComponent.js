// esta é uma forma mais moderna de escrever o código
const AnotherComponent = () => {
const handleClick = () => {
    console.log("Clicou no botão!");
};    
    return (
        <div>
            <p>Outro componente</p>
            <button onClick={handleClick}>Evento de clique</button>
            <button onClick={() => console.log("Teste")}>Eventode elemento</button>
            </div>
    );

};

export default AnotherComponent;