"use client";
import { useState, useEffect } from "react";

const CountdownTimer = ({ days = 0, hours = 0, minutes = 0, seconds = 0 }) => {
  const [time, setTime] = useState({ days, hours, minutes, seconds });

  useEffect(() => {
    const timer = setInterval(() => {
      if (time.seconds > 0) {
        setTime((prevTime) => ({
          ...prevTime,
          seconds: prevTime.seconds - 1,
        }));
      } else if (time.minutes > 0) {
        setTime((prevTime) => ({
          ...prevTime,
          minutes: prevTime.minutes - 1,
          seconds: 59,
        }));
      } else if (time.hours > 0) {
        setTime((prevTime) => ({
          ...prevTime,
          hours: prevTime.hours - 1,
          minutes: 59,
          seconds: 59,
        }));
      } else if (time.days > 0) {
        setTime((prevTime) => ({
          ...prevTime,
          days: prevTime.days - 1,
          hours: 23,
          minutes: 59,
          seconds: 59,
        }));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  return (
    <div className="text-white">
      <div>
        <span className="mx-3">{String(time.days).padStart(2, "0")}</span> :{" "}
        <span className="mx-3">{String(time.hours).padStart(2, "0")}</span> :{" "}
        <span className="mx-3">{String(time.minutes).padStart(2, "0")}</span> :{" "}
        <span className="mx-3">{String(time.seconds).padStart(2, "0")}</span>
      </div>
      <div className="text-body-tiny">
        <span className="mx-3">DAYS</span> <span className="mx-3">HOURS</span>{" "}
        <span className="mx-3">MINS</span> <span className="mx-3">SECS</span>
      </div>
    </div>
  );
};

export default CountdownTimer;


// import React, { useState, useEffect } from "react";

// const CountdownTimer = ({ days = 0, hours = 0, minutes = 0, seconds = 0 }) => {
//   const [time, setTime] = useState({ days, hours, minutes, seconds });

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime(prevTime => {
//         if (prevTime.seconds > 0) {
//           return { ...prevTime, seconds: prevTime.seconds - 1 };
//         } else if (prevTime.minutes > 0) {
//           return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
//         } else if (prevTime.hours > 0) {
//           return { ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
//         } else if (prevTime.days > 0) {
//           return { ...prevTime, days: prevTime.days - 1, hours: 23, minutes: 59, seconds: 59 };
//         }
//         return prevTime;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []); // Removed time from the dependency array

//   return (
//     <div className="text-white">
//       <div>
//         <span className="mx-3">{String(time.days).padStart(2, "0")}</span> :{" "}
//         <span className="mx-3">{String(time.hours).padStart(2, "0")}</span> :{" "}
//         <span className="mx-3">{String(time.minutes).padStart(2, "0")}</span> :{" "}
//         <span className="mx-3">{String(time.seconds).padStart(2, "0")}</span>
//       </div>
//       <div className="text-body-tiny">
//         <span className="mx-3">DAYS</span> <span className="mx-3">HOURS</span>{" "}
//         <span className="mx-3">MINS</span> <span className="mx-3">SECS</span>
//       </div>
//     </div>
//   );
// };

// export default CountdownTimer;
