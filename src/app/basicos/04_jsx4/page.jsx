export default function jsx4 (){
    const notas = ['fabricio ','melissa ','ana ', 'daniel ']
    
    const subtitulo = notas
    const trechoh3 =  <h3>{3*3}</h3>
    return(
        <div>
            <h1>Integração js jsx</h1>
            <h2>{subtitulo}</h2>
            {trechoh3}
            <h4> {Math.max(13,39)}</h4>
            <h5>{entre(30,1 ,40)}</h5>
        </div>
    )
}

function entre(valor,min,max){
    if(valor >= min && valor <= max){
        return "sim"
    }
    else{
        return 'não'
    }
}