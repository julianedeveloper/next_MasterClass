import React from "react";

export default function First(){
    const raio = 4.5
    const PI = 3.14159
    const titulo = 
        <div>
            <h1 className="font-black">First Component</h1>
            <h2>JSX Files</h2>
        </div>
    

    function anoAtual(){
        return new Date().getFullYear()
    }

    function gerarUmaLista(){
        return(
            <ul className="pl-12list-disc">
                <li>Juliane,</li>
                <li>Lana e </li>
                <li>Olivia</li>
            </ul>
        )
    }
    return(
        <div>
            {titulo}
            <nav>
                <a href="/">Home</a>
            </nav>
            <span>{10+4} de </span>
            <span>{0+7} de </span>
            <span>{anoAtual()}</span>
            {gerarUmaLista()}
            <span>{PI * Math.pow(raio, 2)}</span>
        </div>
    );
}