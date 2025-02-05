import  { Component, useEffect, useRef, useState } from 'react';
import Countdown from 'react-countdown';
import { Row, Col } from 'react-bootstrap';
import TimeFormat from "hh-mm-ss";
// Time Counting From 0

 export function Uptimer () {
  const formatTime = (time: number) =>
  ` ${String(Math.floor(time / 60)).padStart(2, '0')} : ${String(
    time % 60
  ).padStart(2, '0')}`

  const Timer = ({ time } : any) => {
    return (
    <>
      <div> 00 : 00 :{formatTime(time)}</div>
    </>
    )
  }
  const IntervalTimerFunctional = () => {
    const [time, setTime] = useState(0)

    useEffect(() => {
      const timerId = setInterval(() => {
        setTime((t) => t + 1)
      }, 1000)
      return () => clearInterval(timerId)
    }, [])

    return <Timer time={time} />
  }

  return (

  <div className="border-0">
     
      <h3 className='mb-0  ms-30 text-primary d-flex t-center'> 
      <span className=' mb-0 h3 text-primary'><IntervalTimerFunctional/></span>
      </h3>
    </div>
  )
}
// //timer 1 minute counter
export function Middle() {
  const intervalRef = useRef<any>(null);

  const [timer, setTimer] = useState("00:00:00");
  useEffect(() => {
    function getTimeRemaining(endtime:any) {
      const total = Date.parse(endtime) - Date.parse(Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor(((total / 1000) * 60 * 60) % 60);

      return {
        total,
        hours,
        minutes,
        seconds,
      };
    }
    function startTimer(deadline:any) {
      const { total, hours, minutes, seconds } = getTimeRemaining(deadline);
      if (total >= 0) {
        setTimer(
          (hours ? hours : "0" + hours) +
            ":" +
            (minutes ? minutes : "0" + minutes) +
            ":" +
            (seconds ? seconds : "0" + seconds)
        );
      } else {
        clearInterval(intervalRef.current);
      }
    }

    function clearTimer(endtime:any) {
      setTimer("00:00:60");
      if (intervalRef.current) clearInterval(intervalRef.current);
      const id = setInterval(() => {
        startTimer(endtime);
      }, 1000);
      intervalRef.current = id;
    }
    function getDeadlineTime() {
      const deadline = new Date();
      deadline.setSeconds(deadline.getSeconds() + 60);
      return deadline;
    }

    clearTimer(getDeadlineTime());
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);
  return <>{timer}</>;
}

// TimeMinutesCounter
export function Minutecounter() {
  const intervalRef : any = useRef(null)
  const [timer, setTimer] = useState('00:00:00')
  useEffect(() => {
    function getTimeRemaining (endtime: string) {
      const i : any = new Date()
      const total = Date.parse(endtime) - Date.parse(i)
      const seconds = Math.floor((total / 1000) % 60)
      const minutes = Math.floor((total / 1000 / 60) % 60)
      const hours = Math.floor(((total / 1000) * 60 * 60) % 60)

      return {
        total,
        hours,
        minutes,
        seconds
      }
    }
    function startTimer (deadline: string) {
      const { total, hours, minutes, seconds } = getTimeRemaining(deadline)
      if (total >= 0) {
        setTimer(
          (hours || '0' + hours) +
            ':' +
            (minutes || '0' + minutes) +
            ':' +
            (seconds || '0' + seconds)
        )
      } else {
        clearInterval(intervalRef.current)
      }
    }

    function clearTimer (endtime:any) {
      setTimer('00:00:00:60')
      if (intervalRef.current) clearInterval(intervalRef.current)
      const id = setInterval(() => {
        startTimer(endtime)
      }, 1000)
      intervalRef.current = id
    }
    function getDeadlineTime () {
      const deadline = new Date()
      deadline.setSeconds(deadline.getSeconds() + 60)
      return deadline
    }

    clearTimer(getDeadlineTime())
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])
  return <><span className=' mb-0 h3 text-info'>{timer}</span></>
}
// Time Counting From 60 to 20
export const Timers = ({ min }: any) => {
  let mainTime: string | number | NodeJS.Timeout | undefined;
  const secondsLeft = () => {
    const left = Number(min) * 60;
    return left;
  };

  const [seconds, setSeconds] = useState(secondsLeft());
  useEffect(() => {
    startTime();
    return () => {
      stopTimer();
    };
  });

  const startTime = () => {
    if (seconds && seconds > 20) {
      mainTime = setInterval(tick, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(mainTime);
  };

  const tick = () => {
    setSeconds((seconds) => {
      const updatedSeconds = seconds - 1;
      if (updatedSeconds < 1) {
        stopTimer();
      }
      return updatedSeconds;
    });
  };

  const display = TimeFormat.fromS(seconds, "hh:mm:ss");
  const [h, m, s] = display.split(":");
  return (
    <>
     <div> 00 :  {h} : {m} : {s}</div>
    </>
  );
};

// Time Counting days Limit **********************
// Random component
const AfterCompletion = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }:any) => {
  if (completed) {
    // Render a complete state
    return <AfterCompletion />;
  } else {
    // Render a countdown
    return (
      <span>
        {days} Days {hours} Hours:{minutes} Minutes:{seconds} Seconds
      </span>
    );
  }
};
export class CountDaysLimit extends Component {
  render() {

    return (

      <Countdown date={Date.now() + 259200000} renderer={renderer} />

    );
  }
}

// Time Counting days Limit **********************
//  Day Counter  *******************
// Time Counting days Limit **********************
// Random component
const AfterComplete = () => <span>You are good to go!</span>;

// Renderer callback with condition
const rendering = ({ days, hours, minutes, seconds, completed }:any) => {
  if (completed) {
    // Render a complete state
    return <AfterComplete />;

  } else {
    // Render a countdown
    return (
      <span>
        <Row className="count-down">
          <Col lg={3} className="countdown">
            <div className="countdown bg-primary-gradient p-3 mb-1">
              <div className='d-inline-flex'>
                <span className="days text-white">{days}</span>
                <span className="text-white mt-auto mb-1 ms-1">Days</span>
              </div>
            </div>
          </Col>
          <Col lg={3} className="countdown">
            <div className="countdown bg-success-gradient p-3 mb-1">
              <div className='d-inline-flex'>
                <span className="hours text-white">{hours}</span>
                <span className="text-white mt-auto mb-1 ms-1">Hours</span>
              </div>
            </div>
          </Col>

          <Col lg={3} className="countdown">
            <div className="countdown bg-warning-gradient p-3 mb-1">
              <div className='d-inline-flex'>
                <span className="minutes text-white">{minutes}</span>
                <span className="text-white mt-auto mb-1 ms-1">Minutes</span>
              </div>
            </div>
          </Col>
          <Col lg={3} className="countdown">
            <div className="countdown bg-info-gradient p-3 mb-1">
              <div className='d-inline-flex'>
                <span className="seconds text-white">{seconds}</span>
                <span className="text-white mt-auto mb-1 ms-1">Seconds</span>
              </div>
            </div>
          </Col>
        </Row>
      </span>
    );
  }
};
export class DayCounter extends Component {
  render() {
    return (
      <Countdown date={Date.now() + 3088800000} renderer={rendering} />

    );
  }
}

