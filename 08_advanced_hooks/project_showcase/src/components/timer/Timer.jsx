import { useEffect, useState } from "react"

const Timer = () => {
    console.log("Outside useEffect: I rendered")
    const [count, setCount] = useState(0)
    
    //! Since the component rendered, do something  => useEffect!!!!
    useEffect(() => {
        console.log("Inside useEffect: I re-rendered")
        const intervalId = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000)
        
        return () => {
            console.log("Inside useEffect cleanup: I was used")
            clearInterval(intervalId);
        }
    }, [])

    return (
        <div>Timer: {count}</div>
    )
}

export default Timer