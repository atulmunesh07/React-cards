
import "./App.css";
import { RiResetRightFill } from "react-icons/ri";
import { IoIosStopwatch } from "react-icons/io";
import { BsSignStopFill } from "react-icons/bs";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState ,useRef } from "react";

const App = () =>{

const handaleReset =( )=>{
  clearInterval(timeRef.current)
  setIsRunning(false)
  setTime(0)
}

  const [time,setTime] = useState(0);
  const[isRunning,setIsRunning] = useState(false);
  const timeRef = useRef(null)


  //handleToggle function

  const handleToggle =() =>{
    if(isRunning){
      console.log(timeRef.current)
      clearInterval(timeRef.current)
      setIsRunning(false)
    }
    else{
      setIsRunning(true);
      timeRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 200);

      },200)
    }
  }






  const formateTime = (time)=>{
    const minutes =`0${Math.floor((time/60000)%60)}`.slice(-2);
    const second =`0${Math.floor((time/1000)%60)}`.slice(-2);
    const milisecond =`0${Math.floor((time%1000)/10)}`.slice(-2);
    return `${minutes}:${second}:${milisecond}`;
    
  }




  return <div className="app">
    <div className="container">
      <div className="total" style={{backgroundImage:`linear-gradient(to right, rgba(253,230,90,100%),rgba(204,254,87,100%))`}}>
        <div className="Reset-logo" >
        <RiResetRightFill className="logo" onClick={handaleReset}/> 
        </div>
        {/*** card start time card */}
        
        <div className="total-card">
          <h3 className="total-amount-number">{formateTime(time)}</h3>
        </div>
        {/*** card end */}

        {/*** form are start hear*/}
        <form>
          <div className="button-collection"> 
          <Stack direction="row" spacing={2} className="center-button">
          <Button variant="contained" className="btn-one" onClick={handleToggle}>
            {isRunning ? (
              <BsSignStopFill  className="posse-button-icon" />

            ):  <IoIosStopwatch className="posse-button-icon" />
            }
          
          </Button>
      
      
    </Stack>
        

          </div>
        </form>

     

      </div>
    </div>

  </div>
}
export default App;