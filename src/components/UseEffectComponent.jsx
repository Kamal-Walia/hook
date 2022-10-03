import { useEffect } from "react";

const UseEffectComponent = ({fname}) => {

    useEffect(() => {
        console.log('Behaves Like Component Did Mount');
    }, [])

    useEffect(() => {
        return () => {
            console.log('Behaves Like Component will UnMount');
        }
    }, [])

    useEffect(() => {
        console.log('Behaves Like Component Did Update')
    }, [fname])

    // useEffect(() => {
    //     console.log('Always calling')
    // })


    return(
        <div>
            Hello From UseEffect Component
        </div>
    )
    
}

export default UseEffectComponent;