function FirstComponent() {
    const name = "Felipe"
    return (
    // o HTML a seguir é chamado JSX, o qual é bastante utilizado pelo mercado
    <div className="firstcomponent">
        <p>Primeiro Componente</p>
        <p>Nome: {name}</p>
    </div>
    )
}

export default FirstComponent;