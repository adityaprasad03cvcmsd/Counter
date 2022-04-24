import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updCounter, loadingState } from "../redux/action"

import "./styles/counter.css"
export const Counter = () => {
    const dispatch=useDispatch()
    const [count, setCount] = useState();
    const store=useSelector((store) => store)
    const maxValue = import.meta.env.MAX_VALUE || 999;
    
    //get data...
    const getCount = () => {  
        fetch("https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/8817970562.json")
          .then((res) => res.json())
            .then((data) => {
              console.log("data",data)
                if (data === null) {
                    setCount(10)
                }
                else
                    setCount(data[8817970562]);
          })
            // .catch(() => {
            //     console.log("server failed or internet connection failure")
            //     return { 8817970562: 10 }
            // })
    }
    
    
    useEffect(getCount, [])
    
    useEffect(() => {
        let payloadLoading = { loading: true }
        dispatch(loadingState(payloadLoading))

        //changing count
        let payload = { 8817970562: count }
        dispatch(updCounter(payload));
    },[count])
    
    const handleInput = (e) => {
        let num = +(e.target.value)

        if(+(e.target.value)<=maxValue)
            setCount(num)
        else
            alert("max value reached")
    }
   
    return (
        <div>
            <button className="sub" onClick={()=>{setCount(count-1)}}>-</button>
            <input className="inpCount" value={count} onChange={handleInput}/>
            <button className="add" onClick={()=>{count<=maxValue?setCount(count+1):alert("max value reached")}}>+</button>
        </div>
    )
}