function ErrorPage () {
    return (
       
        <div className="Error">
        <h1>Estás perdido?</h1>
        <p>We searched high and low but couldn't find what you're looking for.</p>
        {/* alterar para pt */}
        <p>Let's find a better place for you to go.</p>
        <a href="/"><button >Go Home</button></a> 
        {/* Mudar o site para onde volta */}
        <img src="src\assets\ErrorPage.png" alt="" />
        </div>
    )
}

export default ErrorPage;