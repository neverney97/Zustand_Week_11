import React from 'react'
import { useState } from 'react'

function Click () {
    const [number, setNumber] = useState(0)
    
    const him = () =>{
        setNumber(number + 1)
    }
    
    return (
        <div className='min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-200 flex flex-col items-center justify-center p-6'>
            <h1 className='text-3xl font-bold underline'>{number}</h1>
            <br/>
            <button className='border rounded-md bg-red-400' onClick={him}>Click me</button>
        </div>
    )
}

export default Click