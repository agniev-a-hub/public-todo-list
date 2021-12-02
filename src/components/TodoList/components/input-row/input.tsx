import React, { FormEvent } from "react";

interface Props{
    name: string,
    value:string
    handler: (e: FormEvent<HTMLInputElement>) => void
    className:string
}

export const Input = ({ name, handler, value, className}: Props) => {
    return <div className={className}>
        <span>{name}:</span>
        <input value={value} onChange={handler} name={name}/>
    </div>
}