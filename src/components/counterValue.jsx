import { useSelector } from "react-redux"
import "./styles/countervalue.css"
export const CounterValue = () => {
    let countervalue = useSelector((store) => store.counter[8817970562])
    console.log("counterValue", countervalue)
    return <div className="value">
        Counter value : {countervalue||1}
    </div>
}
