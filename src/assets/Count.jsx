import { useEffect, useState } from "react"
function Count(){
    const [count, setCount] = useState(0)
    useState(() =>{
        setInterval(() => {
            setCount((i) => i + 1)
        }, 1000);
    })
    useEffect(()=>{
        clearInterval(count)
    },[count])
    return(
        <h1>{count}</h1>
    )
}

export default Count