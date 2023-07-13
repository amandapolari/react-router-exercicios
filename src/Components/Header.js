import { useNavigate } from 'react-router-dom';
import { goToBiscoito, goToHome, goToProducts, goToProfile } from '../routes/coordinator';

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
            <button
                onClick={() => {
                    goToProducts(navegate, 123);
                }}
            >
                Ir para página de produtos
            </button>
        </div>
    );
}

export default Header;
