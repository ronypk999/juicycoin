import React from 'react';
import { useTimer } from 'react-timer-hook';

interface MyTimerProps {
  expiryTimestamp: Date;
}

const MyTimer: React.FC<MyTimerProps> = ({ expiryTimestamp }) => {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  return (
    
     
    
      <div className="flex gap-6 text-xl">
        <div className='flex flex-col items-center'>
        <span>{days}</span>
        <span>DAY</span>
        </div>
        <div className='flex  flex-col items-center'>
        <span>{hours}</span>
        <span>HOUR</span>
        </div>
        <div className='flex flex-col items-center'>
        <span>{minutes}</span>
        <span>MIN</span>
        </div>
        <div className='flex flex-col items-center'>
        <span>{seconds}</span>
        <span>SEC</span>
        </div>
      
      </div>
      
        
    
  );
};

export default MyTimer;
