import React,{useState, useEffect ,useRef} from 'react';
import { makeStyles } from '@mui/styles';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
    counter:{
       flexDirection:"row",
       display:"flex",
       justifyContent:"space-around",
       color:"white",
       fontSize:22,
       border:"0.5px solid #fff",
       borderRadius:2,
       background:"rgba(0,0,0,0.5)"


    },
}))

const GeriSayim = () => {
    const classes = useStyles();

    const [date,setDate] = useState(() => {
        const localDate = localStorage.getItem("date")
        return  localDate ? moment(JSON.parse(localDate)) : moment().add(10,"hours")
    });

    const [days,setDays] = useState("00");
    const [hours ,setHours] = useState("00");
    const [minutes ,setMinutes] = useState("00");
    const [seconds ,setSeconds] = useState("00");

    let interval = useRef();

useEffect(() => {
    startTimer();
    return clearInterval(interval.current)
},[date]);


    const startTimer = () => {


        interval = setInterval(() => {
           localStorage.setItem("date", JSON.stringify(date));
            const now  = moment();
            const distance = date - now;
            

            const days = moment.duration(distance).hours();

            const hours = moment.duration(distance).hours();

            const minutes = moment.duration(distance).minutes();

            const seconds = moment.duration(distance).seconds();

            if(distance < 0  ){

                clearInterval(interval.current);

            }
            else{
                setDays(days)   
                setHours(hours)
                setMinutes(minutes)
                setSeconds(seconds)
                

            }

        },[1000])
        
    }

    return (
        <div className={classes.counter}>

            <div>
          
                <p>{days}</p>
                <p><small>Gün</small></p>
                <p>{hours}</p>
                <p><small>Saat</small></p>
                <p>{minutes}</p>
                <p><small>Dakika</small></p>
                <p>{seconds}</p>
                <p><small>Saniye</small></p>
            </div>

        </div>
    )
}
export default GeriSayim;