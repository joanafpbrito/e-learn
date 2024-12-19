import "./rootLayout.css";

function SideBar () {
    return (
        <aside className="sidebar">
            <div>
                <h2>olá sidebar</h2>
                <hr />
                <p>Aqui queremos um menu lateral com as funcionalidades</p>
                <hr />
                <p>Ex. Registar novo usuario</p>
                <hr />
                <p> mediante a funcionalidade escolhida o conteudo muda</p>
                <hr />
                <p>para já o registo de novo usuario esta fixo e esses botoes ainda nao existem</p>
                <hr />
                <p>Seria interessante ter um leque de funcionalidades de estatistica para consulta</p>
                <hr />
                <p>Isto no caso de ser o administrador da 180</p>
                <hr />
                <p>No caso de ser um usuario, o menu seria menos extenso e apresentaria por exemplo o link para a pagina de cursos, as suas conquistas e diplomas e cursos em utilização no momento</p>
            </div>
        </aside>
    )
}

export default SideBar