import { memo } from "react";

const UseCallback = ({count, handleUpdateCount}) => {
    console.log("Count Value", count)
    return(
        <div>Hello From UseCallback { count }
        <div><button onClick={handleUpdateCount}>Update Count</button></div> 
        </div>
    )
}

export default memo(UseCallback);

