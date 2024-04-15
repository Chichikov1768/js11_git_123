import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import './PhoneNumbersEditor.css'
import './Clock.css'


const Timer = ({ seconds }) => {
  
  const [time, setTime] = useState(seconds);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused && time > 0) {
        setTime((prevTime) => prevTime - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [time, isPaused]);

  const pauseTimer = () => {
    setIsPaused(!isPaused);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <div>Часы: {formatTime(time).split(':')[0]}</div>
      <div>Минуты: {formatTime(time).split(':')[1]}</div>
      <div>Секунды: {formatTime(time).split(':')[2]}</div>
      <button onClick={pauseTimer}>{isPaused ? 'Продолжить' : 'Пауза'}</button>
    </div>
  );
};


const TimerControl= () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);

  const startTimer = () => {
    setTimerStarted(true);
  };

  return (
    <div>
      {!timerStarted ? (
        <div>
          <input
            type="number"
            value={hours}
            onChange={(e) => setHours(parseInt(e.target.value))}
          />
          <span>часы</span>
          <input
            type="number"
            value={minutes}
            onChange={(e) => setMinutes(parseInt(e.target.value))}
          />
          <span>минуты</span>
          <input
            type="number"
            value={seconds}
            onChange={(e) => setSeconds(parseInt(e.target.value))}
          />
          <span>секунды</span>
          <button onClick={startTimer}>Start</button>
        </div>
      ) : (
        <Timer seconds={hours * 3600 + minutes * 60 + seconds} />
      )}
    </div>
  );
};
// TimerContainer
//timeContol + TimeContainer
const SecondsTimer = ({seconds}) => <h2>{seconds}</h2>



// const ClockImages = ({seconds}) => {
//   return (
//     <div className="clock-container">
//       <img src={require('./ClockFace.png')} alt="ClockFace" className="clock-imageMain"id='ClockFace'/>
//       <img src={require('./ClockFace_S.png')} alt="ClockFace_S" className="clock-image" id='seconds'/>
//       <img src={require('./ClockFace_M.png')} alt="ClockFace_M" className="clock-image"id='minutes'/>
//       <img src={require('./ClockFace_H.png')} alt="ClockFace_H" className="clock-image" id='hours' />

      
      
      
      
//     </div>
//   );
// }

const TimerContainer = ({ seconds, refresh, render: Render }) => {
  const [currentTime, setCurrentTime] = useState(seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, refresh);

    return () => clearInterval(interval);
  }, [refresh]);

  return (
    <div>
      <Render seconds={currentTime} />
    </div>
  );
};
//LCD
const Timer2 = ({ seconds }) => {
  
const time = seconds



  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <div>Часы: {formatTime(time).split(':')[0]}</div>
      <div>Минуты: {formatTime(time).split(':')[1]}</div>
      <div>Секунды: {formatTime(time).split(':')[2]}</div>
      {/* <button onClick={pauseTimer}>{isPaused ? 'Продолжить' : 'Пауза'}</button> */}
    </div>
  );
};

//Phonebook
const PhoneNumbersEditor = () => {
  const [phoneNumbers, setPhoneNumbers] = useState(['']); // состояние с номерами телефонов

  // для добавления поля ввода
  const addPhoneNumber = () => {
    setPhoneNumbers([...phoneNumbers, '']);
  };

  // удаление поля ввода
  const removePhoneNumber = (index) => {
    const updatedPhoneNumbers = phoneNumbers.filter((_, i) => i !== index);
    setPhoneNumbers(updatedPhoneNumbers);
  };

  // чтобы поднять телефон поле ввода вверх
  const movePhoneNumberUp = (index) => {
    if (index === 0) return; // проверка чтобы не сдвинуть первое поле вверх
    const updatedPhoneNumbers = [...phoneNumbers];
    const temp = updatedPhoneNumbers[index];
    updatedPhoneNumbers[index] = updatedPhoneNumbers[index - 1];
    updatedPhoneNumbers[index - 1] = temp;
    setPhoneNumbers(updatedPhoneNumbers);
  };

  // Функція для зміщення поля введення вниз
  const movePhoneNumberDown = (index) => {
    if (index === phoneNumbers.length - 1) return; // проверка чтобы не сдвинуть последнее поле вниз
    const updatedPhoneNumbers = [...phoneNumbers];
    const temp = updatedPhoneNumbers[index];
    updatedPhoneNumbers[index] = updatedPhoneNumbers[index + 1];
    updatedPhoneNumbers[index + 1] = temp;
    setPhoneNumbers(updatedPhoneNumbers);
  };
 
  // Функция для обновления значения поля ввода
  const handlePhoneNumberChange = (index, value) => {
    const updatedPhoneNumbers = [...phoneNumbers];
    updatedPhoneNumbers[index] = value;
    setPhoneNumbers(updatedPhoneNumbers);
  };

  return (
    <div className="phone-numbers-editor">
      {phoneNumbers.map((phoneNumber, index) => (
        <div key={index} className="phone-number">
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => handlePhoneNumberChange(index, e.target.value)}
          />
          <div className="controls">
            <button onClick={() => addPhoneNumber()}>Додати</button>
            <button onClick={() => removePhoneNumber(index)}>Удалить</button>
            <button onClick={() => movePhoneNumberUp(index)}>Вверх</button>
            <button onClick={() => movePhoneNumberDown(index)}>Вниз</button>
          </div>
        </div>
      ))}
    </div>
  );
};

//Watch - Реальное время 
const ClockImages = ({ seconds }) => {
  const [rotateSeconds, setRotateSeconds] = useState(0);
  const [rotateMinutes, setRotateMinutes] = useState(0);
  const [rotateHours, setRotateHours] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Обновляем угол поворота стрелок каждую секунду
      const date = new Date();
      const s = date.getSeconds() * 6; // 6 градусов в секунде
      const m = date.getMinutes() * 6 + s / 60; // 6 градусов в минуте, коррекция на секунды
      const h = date.getHours() % 12 * 30 + m / 12; // 30 градусов в часе, коррекция на минуты
      setRotateSeconds(s);
      setRotateMinutes(m);
      setRotateHours(h);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock-container">
      <img src={require('./ClockFace.png')} alt="ClockFace" className="clock-imageMain" id="ClockFace" />
      <img src={require('./ClockFace_S.png')} alt="ClockFace_S" className="clock-image" id="seconds" style={{ transform: `rotate(${rotateSeconds}deg)` }} />
      <img src={require('./ClockFace_M.png')} alt="ClockFace_M" className="clock-image" id="minutes" style={{ transform: `rotate(${rotateMinutes}deg)` }} />
      <img src={require('./ClockFace_H.png')} alt="ClockFace_H" className="clock-image" id="hours" style={{ transform: `rotate(${rotateHours}deg)` }} />
    </div>
  );
};



const ClockImagesTimer = ({ seconds, refresh }) => {
  const [rotateSeconds, setRotateSeconds] = useState(0);
  const [rotateMinutes, setRotateMinutes] = useState(0);
  const [rotateHours, setRotateHours] = useState(0);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return { hours: hours, minutes: minutes, seconds: seconds };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Обновляем угол поворота стрелок каждую секунду
      const date = formatTime(seconds);
      const s = date.seconds * 6; // 6 градусов в секунде
      const m = date.minutes * 6 + s / 60; // 6 градусов в минуте, коррекция на секунды
      const h = date.hours % 12 * 30 + m / 12; // 30 градусов в часе, коррекция на минуты
      setRotateSeconds(s);
      setRotateMinutes(m);
      setRotateHours(h);
    }, refresh);

    return () => clearInterval(interval);
  }, [seconds, refresh]); // Зависимость от seconds и refresh

  return (
    <div className="clock-container">
      <img src={require('./ClockFace.png')} alt="ClockFace" className="clock-imageMain" id="ClockFace" />
      <img src={require('./ClockFace_S.png')} alt="ClockFace_S" className="clock-image" id="seconds" style={{ transform: `rotate(${rotateSeconds}deg)` }} />
      <img src={require('./ClockFace_M.png')} alt="ClockFace_M" className="clock-image" id="minutes" style={{ transform: `rotate(${rotateMinutes}deg)` }} />
      <img src={require('./ClockFace_H.png')} alt="ClockFace_H" className="clock-image" id="hours" style={{ transform: `rotate(${rotateHours}deg)` }} />
    </div>
  );
};



const TimerControl2 = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const startTimer = () => {
    setTimerStarted(true);
  };

  const pauseTimer = () => {
    setIsPaused(!isPaused); 
  };

  return (
    <div>
      {!timerStarted ? (
        <div>
          <input
            type="number"
            value={hours}
            onChange={(e) => setHours(parseInt(e.target.value))}
          />
          <span>часы</span>
          <input
            type="number"
            value={minutes}
            onChange={(e) => setMinutes(parseInt(e.target.value))}
          />
          <span>минуты</span>
          <input
            type="number"
            value={seconds}
            onChange={(e) => setSeconds(parseInt(e.target.value))}
          />
          <span>секунды</span>
          <button onClick={startTimer}>Start</button>
        </div>
      ) : (
        <div>
          <TimerContainer2 seconds={hours * 3600 + minutes * 60 + seconds} refresh={1000} paused={isPaused} render={ClockImagesTimer} />
          <button onClick={pauseTimer}>{isPaused ? 'Продолжить' : 'Пауза'}</button>
          {/* <button onClick={()=>{
            <TimerControl2/>
          }}>Сброс таймера</button> */}
        </div>
      )}
    </div>
  );
};


const TimerContainer2 = ({ seconds, refresh, paused, render: Render }) => {
  const [currentTime, setCurrentTime] = useState(seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime((prevTime) => {
        if (prevTime === 0 || paused) {
          clearInterval(interval);
          return prevTime;
        }
        return prevTime - 1;
      });
    }, refresh);

    return () => clearInterval(interval);
  }, [paused, refresh, seconds]);

  return (
    <div>
      <Render seconds={currentTime} />
    </div>
  );
};





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
       <Timer seconds={60} />
       <TimerControl />
       <TimerContainer seconds={1800} refresh={100} render={SecondsTimer} />
       <TimerContainer seconds={60} refresh={1000} render={Timer2} />
       <h1>Номера телефонов</h1>
        <PhoneNumbersEditor />
        <TimerContainer seconds={120} refresh={1000} render={ClockImagesTimer} />
        <h1>Реальное время </h1>
        <ClockImages/>
        <h1>Продвинутый таймер с паузой</h1>
        <TimerControl2/>
    </div>
  );
}

export default App;
