import style from './Quiz.module.css';
import { Link } from 'react-router-dom';

const Quiz = () => {
  return (
    <div className="container">
      <div className="infoContainer">
        <div className={`titleContainer`}>
          <h3 className="title">Quiz</h3>
          <div className={style.infoContainer}>
            <p className={style.explication}>
              En este quiz tendras que responder preguntas sobre los paises.
            </p>
            <Link className={style.btn} to="/quiz/play">
              Comenzar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
