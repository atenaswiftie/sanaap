import { useEffect, useState } from "react";

export const useCountDownTimer = (
  startTime: number,
  onTimeOver: () => void
) => {
  const [timer, setTimer] = useState(startTime);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return  `${minutes
      .toString()
      .padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const resetTimer = () => {
    setTimer(startTime);
    initialTimer(startTime);
  };

  const initialTimer = (startTime: number = timer) => {
    let remainingTime = startTime;

    const intervalId = setInterval(() => {
      if (remainingTime < 1) {
        clearInterval(intervalId);
        onTimeOver();
        return;
      }

      remainingTime -= 1;
      setTimer(remainingTime);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  };

  useEffect(initialTimer, []);

  return { 
    timer,
    resetTimer,
    formattedTime: formatTime(timer)
  };
};
