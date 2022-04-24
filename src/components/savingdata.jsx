import { useSelector } from "react-redux"
import imgLoading from "../image/loading.gif"

import "./styles/savingdata.css"
export const SavingData = () => {
    const loading = useSelector((store) => store.counter.loading)
    console.log(loading)
    
    const status = () => {
        return <span class="text">
            <img className="image" src={imgLoading} />  Saving counter value
        </span>
    }
    
    return <div>
        {loading ? status():null}
    </div>
}