import { Link } from 'react-router-dom';

import logo from '../../img/logo.png';

import style from './LandingPage.module.css';
import { useFetchCountries } from './../../hooks/useFetchCountries';

const InitialPage = () => {
  useFetchCountries();
  return (
    <div className={style.container}>
      <div className={style.infoContainer}>
        <img className={style.img} src={logo} alt="Logo" />
        <Link to="/home" className={style.btn}>
          Inicio
        </Link>
        <a
          href="https://github.com/RogelioMenco/countries"
          target="_blank"
          rel="noreferrer"
        >
          <i className={`fa-brands fa-github ${style.icon}`}></i>
        </a>
      </div>
    </div>
  );
};

export default InitialPage;
