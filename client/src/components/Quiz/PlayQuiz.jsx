import { useState } from 'react';
import { useFetchCountries } from '../../hooks/useFetchCountries';

import Loading from '../Loading/Loading';

import style from './PlayQuiz.module.css';

const PlayQuiz = () => {
  const { filteredCountries, loaded } = useFetchCountries(true);

  const [infoGame, setInfoGame] = useState({
    gameStarted: false,
    numberQuestions: 0,
    totalCorrect: 0,
    totalWrong: 0,
    isAnswerCorrect: null,
  });

  const [question, setQuestion] = useState({
    title: '',
    correct: {},
    seeQuestion: false,
    answers: [],
  });

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let random = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[random];
      array[random] = temp;
    }
    return array;
  };

  const getQuestion = () => {
    // Le damos un orden aleatorio al array de countries y agarramos las primeras 4 posiciones.
    const randomCountries = shuffleArray(filteredCountries).splice(0, 4);
    const correct = randomCountries[0];
    //desordenamos para que las respuestas se pongan en un orden aleatorio
    shuffleArray(randomCountries);
    setInfoGame((state) => {
      return { ...state, gameStarted: true };
    });
    setQuestion((state) => {
      return {
        ...state,
        title: `Cual es la capital de ${correct.name}?`,
        correct,
        seeQuestion: true,
        answers: [...randomCountries],
      };
    });
  };

  const seeScore = () => {
    setInfoGame({
      gameStarted: false,
      numberQuestions: 0,
      totalCorrect: 0,
      totalWrong: 0,
      isAnswerCorrect: null,
    });
  };

  const handleClickAnswer = (e) => {
    e.preventDefault();
    const finalAnswer = e.target.value;
    if (finalAnswer === question.correct.id) {
      setInfoGame((state) => {
        return {
          ...state,
          numberQuestions: state.numberQuestions + 1,
          totalCorrect: state.totalCorrect + 1,
          isAnswerCorrect: true,
        };
      });
    } else {
      setInfoGame((state) => {
        return {
          ...state,
          numberQuestions: state.numberQuestions + 1,
          totalWrong: state.totalWrong + 1,
          isAnswerCorrect: false,
        };
      });
    }
    setQuestion((state) => {
      return { ...state, seeQuestion: false };
    });
  };

  return (
    <div className="container">
      <div className={`infoContainer ${style.container}`}>
        {question.seeQuestion ? (
          <div className={`${style.infoContainer}`}>
            <h4>{question.title}</h4>
            <div className={style.options}>
              {question.answers.map((answer) => (
                <button
                  className={`${style.btn} ${style.btnOption}`}
                  onClick={handleClickAnswer}
                  value={answer.id}
                  key={answer.id}
                >
                  {answer.capital}
                </button>
              ))}
            </div>
          </div>
        ) : loaded ? (
          infoGame.gameStarted ? (
            <div className={style.infoContainer}>
              <p>Total de preguntas: {infoGame.numberQuestions}</p>
              <p>Tu respuesta es...</p>
              {infoGame.isAnswerCorrect ? (
                <p className={style.correct}>Correcta</p>
              ) : (
                <>
                  <p className={style.wrong}>Equivocada</p>
                  <p>La respuesta es {question.correct.capital}</p>
                </>
              )}
              {infoGame.numberQuestions < 5 ? (
                <button className={style.btn} onClick={getQuestion}>
                  Siguiente pregunta
                </button>
              ) : (
                <>
                  <p>Se acabo el juego :)</p>
                  <p>
                    Tienes{' '}
                    <span className={style.correct}>
                      {infoGame.totalCorrect}
                    </span>{' '}
                    respuestas correctas y{' '}
                    <span className={style.wrong}>{infoGame.totalWrong}</span>{' '}
                    equivocadas
                  </p>
                  <button className={style.btn} onClick={seeScore}>
                    Reiniciar
                  </button>
                </>
              )}
            </div>
          ) : (
            <div className={style.infoContainer}>
              <h3>Juego #1</h3>
              <p>
                Veras un pais y diferentes opciones, tendras que seleccionar la
                opcion que creas correcta.
              </p>
              <p>Son 5 preguntas en total.</p>
              <h3>Estas listo?</h3>
              <button className={style.btn} onClick={getQuestion}>
                Iniciar Juego!
              </button>
            </div>
          )
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default PlayQuiz;
