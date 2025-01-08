function ErrorPage () {
    return (
       
        <div className="errorPage">
        <h1>404: Página não encontrada</h1>
        <br />
        <p> <b>Oops! Não conseguimos encontrar a página que procura.</b></p>
        <p><b></b>Por favor, volte ao início ou explore os nossos cursos</p>
        {/* <a href="/"><button >Início</button></a>  */}
        <img src="src\assets\ErrorPage.png" alt="" />
        </div>
    )
}

export default ErrorPage;