import { useNavigate } from 'react-router-dom';
import { goToBiscoito, goToHome, goToProfile } from '../routes/coordinator';

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
            <button
                onClick={() => {
                    goToBiscoito(navegate);
                }}
            >
                Ir para página de biscoito
            </button>
        </div>
    );
}

export default Header;
