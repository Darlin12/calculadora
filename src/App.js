import React, { useState } from 'react'
import "./App.css"

const App = () => {
    const [result, setResult] = useState("hola")
    return (
        <div className="container">
            <form>
                <input type="text" value=""></input>
            </form>
            <div className="keyPad">
                <button>Clear</button>
                <button>C</button>
                <button>&divide;</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>&times;</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>&ndash;</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>+</button>
                <button>0</button>
                <button>.</button>
                <button>=</button>
            </div>
        </div>
    )
}

export default App