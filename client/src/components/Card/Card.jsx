import style from './Card.module.css';
import { getRegionLabel } from '../../utils/utils.js';

const Card = ({ name, flag, continent }) => {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <img src={flag} alt={`${name} flag`} />
      </div>
      <div className={style.infoContainer}>
        <h4 className={style.nameCountry}>{name}</h4>
        <h4>Continente</h4>
        <p>{getRegionLabel(continent)}</p>
      </div>
    </div>
  );
};

export default Card;
