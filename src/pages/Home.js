import React, {useState} from "react";


export default function Home() {
    const [count, setCount] = useState(0);
    return (
        <div>
        <h1>Home</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}