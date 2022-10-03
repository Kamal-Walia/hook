import { useMemo } from "react";

const expensiveOperation = (n) => {
    console.log('Doing expensive operation')
    let sum = 0
    for(let i=0; i<10000; i++ ){
        sum = sum + i + n;
    }
    return sum;
}

const UseMemo = ({count}) => {
    const result = useMemo(() => expensiveOperation(count), [count]);
    console.log('Rendering useMemo')
    return(
        <div>Hello From UseMemo { count }
        <div>Expensive operation{result}</div>
        </div>
    )
}

export default UseMemo;

