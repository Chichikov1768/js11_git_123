import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// const TimerControl2 = () => {
//   const [hours, setHours] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [seconds, setSeconds] = useState(0);
//   const [timerStarted, setTimerStarted] = useState(false);
//   const [isPaused, setIsPaused] = useState(false);
//   const [key, setKey] = useState(0); // Ключ для повторного вызова компонента

//   const startTimer = () => {
//     setTimerStarted(true);
//   };

//   const pauseTimer = () => {
//     setIsPaused(!isPaused); // Инвертируем состояние паузы
//   };

//   const resetTimer = () => {
//     setHours(0);
//     setMinutes(0);
//     setSeconds(0);
//     setTimerStarted(false);
//     setIsPaused(false);
//     setKey(prevKey => prevKey + 1); // Увеличиваем ключ, чтобы повторно вызвать компонент
//   };

//   return (
//     <div key={key}> {/* Используем ключ для повторного вызова компонента */}
//       {!timerStarted ? (
//         <div>
//           <input
//             type="number"
//             value={hours}
//             onChange={(e) => setHours(parseInt(e.target.value))}
//           />
//           <span>часы</span>
//           <input
//             type="number"
//             value={minutes}
//             onChange={(e) => setMinutes(parseInt(e.target.value))}
//           />
//           <span>минуты</span>
//           <input
//             type="number"
//             value={seconds}
//             onChange={(e) => setSeconds(parseInt(e.target.value))}
//           />
//           <span>секунды</span>
//           <button onClick={startTimer}>Start</button>
//         </div>
//       ) : (
//         <div>
//           <TimerContainer2 seconds={hours * 3600 + minutes * 60 + seconds} refresh={1000} paused={isPaused} render={ClockImagesTimer} />
//           <button onClick={pauseTimer}>{isPaused ? 'Продолжить' : 'Пауза'}</button>
//           <button onClick={resetTimer}>Сброс таймера</button>
//         </div>
//       )}
//     </div>
//   );
// };

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
