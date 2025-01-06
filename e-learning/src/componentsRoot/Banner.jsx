import banner180 from '../assets/banner180.png';
import './rootLayout.css';

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
        message = "1805. Pronto para liderar a gestão da aprendizagem?";
    }
    if (role === 'teacher') {
        message = "O conhecimento está nas suas mãos. Pronto para criar conteúdo e acompanhar os seus formandos?";
    }


    return (

        <div className='banner'>
            <img src={banner180} alt="image-banner" />
            <h2>Olá, {userName ? userName : "180"}!</h2>
            {message}
        </div>

    )

}

export default Banner;