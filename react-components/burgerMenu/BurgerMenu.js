import './BurgerMenu.css';
import burguerPic from '../../../assets/menu.svg';
import { parametersMenu } from './parametersBurgerMenu.js';

const BurgerMenu = () => {
  const offCheck = () => {
    const inputElement = document.getElementById('menu');
    inputElement.checked = false;
  };

  return (
    <div className='burger__menu__wrapper'>
      <label htmlFor='menu' className='burger__menu__label'>
        <img src={burguerPic} className='burger__menu__img' alt='Menu' />
      </label>
      <input type='checkbox' id='menu' className='burger__menu__input' />
      <div className='burger__menu__list' onClick={offCheck}>
        {parametersMenu.map((param) =>
          param.href.startsWith('#') ? (
            <a
              className='burger__menu__item'
              href={param.href}
              key={param.textContent}
            >
              {param.textContent}
            </a>
          ) : (
            <a
              className='burger__menu__item'
              href={param.href}
              key={param.textContent}
              target='_blank'
              rel='noreferrer noopener'
            >
              {param.textContent}
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default BurgerMenu;
