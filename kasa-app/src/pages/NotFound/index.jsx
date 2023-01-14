import { Link } from 'react-router-dom';

function NotFound() {
    document.title = 'Page introuvable';
    return (
        <section className="notfound">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </section>
    );
}

export default NotFound;
