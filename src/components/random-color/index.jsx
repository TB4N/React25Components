import { useState } from "react";



export default function RandomColor() {
const [typeOfColor, setTypeOfColor] = useState('hex');
const [color, setColor] = useState('#000000')

function handleCreateRandomColor () {
    
}

    return (
    <div style={{
        width : '100vw',
        height : '100vh',
        background: color,
        }} className="container">
        <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
        <button onClick={() => setTypeOfColor('hex')}>Create RGB Color</button>
        <button onClick={handleCreateRandomColor}>Generate Random Color</button>
    </div>
    );
}