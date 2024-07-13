import { useState } from "react";

function Count() {
    const [count, setCount] = useState(0);
    const handleIncrement = () => setCount(count + 1);
    const handleDecrement = () => setCount(count - 1);
    return (
        <div >
            <h1>count is: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div> 
    );
}

export default Count;
