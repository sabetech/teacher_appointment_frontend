import React, {useState} from "react";
import SidebarNav from "../components/SidebarNav";


export default function Home() {
    const [count, setCount] = useState(0);
    return (
        <div>
        <SidebarNav />
        <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}