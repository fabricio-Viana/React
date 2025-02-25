import React from 'react'

export default function DesafioLista(){
        function metodoArray(){
            function final(){
                const a = []
                for(let i=1 ; i < 11 ; i++ ){
                a.push(<span>{i}</span>)
                } 
            }
            return <div>{final()}</div>
        }

        const a = [1,2,3,4,5,6,7,8,10]

        const a2 = ()=>a.map(a => <span>{a+','}</span>)
        
       const a3 = ()=> <div>{a2()}</div>
        
        
        return (
            <React.Fragment>

            {a3()}
            

            </React.Fragment>
    )




}