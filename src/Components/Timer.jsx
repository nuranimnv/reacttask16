import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0); // İstifadəçinin daxil etdiyi vaxtı saniyələrdə saxlayır
  const [isRunning, setIsRunning] = useState(false); // Taymer işləyir/işləmir vəziyyəti
  const [inputValue, setInputValue] = useState(''); // İstifadəçi daxil olunan mətn

  // Taymer işə düşəndə hər saniyə vaxtı azaldır
  useEffect(() => {
    if (isRunning && time > 0) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(interval); // Komponent bağlananda intervalı təmizləyir
    } else if (time === 0 && isRunning) {
      alert('Taymer bitdi!');
      setIsRunning(false);
    }
  }, [isRunning, time]);

  // Taymer vaxtını daxil etmə funksiyası
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Vaxtı təyin etmək üçün funksionalıq
  const handleSetTime = () => {
    const totalSeconds = parseInt(inputValue) * 60; // Dəqiqələrdən saniyəyə çevirir
    if (!isNaN(totalSeconds) && totalSeconds > 0) {
      setTime(totalSeconds);
      setInputValue('');
    } else {
      alert('Zəhmət olmasa düzgün bir rəqəm daxil edin.');
    }
  };

  return (
    <div className="timer">
      <h3>Qalan vaxt: {Math.floor(time / 60)} dəq {time % 60} san</h3>
      {!isRunning && (
        <div>
          <input
            type="number"
            placeholder="Vaxtı dəqiqə ilə daxil edin"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={handleSetTime}>Vaxtı təyin et</button>
        </div>
      )}
      <div>
        {isRunning ? (
          <button onClick={() => setIsRunning(false)}>Pauza</button>
        ) : (
          <button onClick={() => setIsRunning(true)}>Başla</button>
        )}
        <button onClick={() => { setTime(0); setIsRunning(false); }}>Sıfırla</button>
      </div>
    </div>
  );
};

export default Timer;
