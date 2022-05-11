import React, {useEffect, useState} from 'react';
import styles from './Clock.module.scss'

const get2digitsString = (num: number) => num < 10 ? '0' + num : num

export const Clock = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date());
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, [])

    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };
    return <div className={styles.container}>
        <div className={styles.clock}>
            <div className={styles.analogClock}>
                <div className={`${styles.dial} ${styles.seconds}`} style={secondsStyle}/>
                <div className={`${styles.dial} ${styles.minutes}`} style={minutesStyle}/>
                <div className={`${styles.dial} ${styles.hours}`} style={hoursStyle}/>
            </div>
        </div>
        <div>
            <span>{get2digitsString(date.getHours())}</span>
            :
            <span>{get2digitsString(date.getMinutes())}</span>
            :
            <span>{get2digitsString(date.getSeconds())}</span>
        </div>
    </div>
}

// export const Clock = () => {
//     const [time, setTime] = useState(new Date())
//
//     function digitalClock() {
//         let time = new Date();
//         let hour = time.getHours();
//         let minute = time.getMinutes();
//         let second = time.getSeconds();
//         let temp = '' + hour;
//         temp += ((minute < 10) ? ':0' : ':') + minute;
//         temp += ((second < 10) ? ':0' : ':') + second;
//         return temp;
//     }
//
//     useEffect(() => {
//         setInterval(() => {
//             setTime(new Date());
//         }, 1000)
//     }, [])
//
//     return (
//         <div>
//             {time.toLocaleTimeString()}
//             <br/>
//             {digitalClock()}
//         </div>
//     );
// };