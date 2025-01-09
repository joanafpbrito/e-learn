import '../App.css';

function Banner() {
    const userName = localStorage.getItem("name");
    const role = localStorage.getItem("role");
    let message = "";
    if (role === 'admin') {
        message = "A plataforma está nas suas mãos. Pronto para liderar a gestão da aprendizagem?";
    }
    if (role === 'user') {
        message = "O conhecimento está nas suas mãos. Pronto para investir em si e construir novas competências?";
    }
    if (role === '180') {
        message = "Pronto para liderar a gestão da aprendizagem?";
    }
    if (role === 'teacher') {
        message = "O conhecimento está nas suas mãos. Pronto para criar conteúdo e acompanhar os seus formandos?";
    }


    return (
        <>
            <div className='MainDivBanner'>
                <div className='bannerMSG'>
                    <h1>Olá, {userName ? userName : "180"}!</h1>
                    {message}
                </div>
                <div className="bannerIMG">
                    <img src="src\assets\wink-white.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Banner;