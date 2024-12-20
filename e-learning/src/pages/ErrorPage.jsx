function ErrorPage () {
    return (
       
        <div className="Error">
        <h1>We lost this page</h1>
        <p>We searched high and low but couldn't find what you're looking for.</p>
        <p>Let's find a better place for you to go.</p>
        <a href="/"><button >Go Home</button></a>
        <img src="src\assets\ErrorPage.png" alt="" />
        </div>
    )
}

export default ErrorPage;