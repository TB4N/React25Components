import { useState } from "react";



export default function RandomColor() {
const [typeOfColor, setTypeOfColor] = useState('hex');
const [color, setColor] = useState('#000000')


    return (
    <div style={{
        width : '100vw',
        height : '100vh',
        background: color
        }} className="container">
        <button>Create HEX Color</button>
        <button>Create RGB Color</button>
        <button>Generate Random Color</button>
    </div>
    );
}