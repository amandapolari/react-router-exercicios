import { useNavigate } from 'react-router-dom';
import { goToHome, goToProfile } from '../routes/coordinator';

function Header() {
    const navegate = useNavigate();

    return (
        <div>
            <button
                onClick={() => {
                    goToHome(navegate);
                }}
            >
                Ir para página inicial
            </button>
            <button
                onClick={() => {
                    goToProfile(navegate, 'easley');
                }}
            >
                Ir para página de perfil
            </button>
        </div>
    );
}

export default Header;
