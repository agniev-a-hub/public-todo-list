import React, { FormEvent } from "react";
import './input.css'

interface Props{
    displayName: string,
    name: string,
    value:string
    handler: (e: FormEvent<HTMLInputElement>) => void
    className:string
}

export const Input = ({ name, handler, value, className, displayName}: Props) => {
    return <div className={className}>
        <span className='inputName'>{displayName}:</span>
        <input value={value} onChange={handler} name={name}/>
    </div>
}