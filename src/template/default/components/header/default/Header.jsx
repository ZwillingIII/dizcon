import './script.js';
import hatStyle from './css/style.module.css';
import logo from './../../../img/svg/logo.svg';

let Header = () => {
    return (
        <header>
            <div className={ hatStyle.header_logo }>
                <a href="/">
                    <img src={ logo } alt="" />
                </a>
                <span className={hatStyle.logo_text}>
                    tocha
                </span>
            </div>
            <div className={hatStyle.menu_desc}>
                <div>
                    <a href>
                        Подключение
                    </a>
                </div>
                <div>
                    <a href>
                        Оплата
                    </a>
                </div>
                <div>
                    <a href>
                        Контакты
                    </a>
                </div>
                <div>
                    <a href>
                        Войти
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;