const Events = () => {
    //os eevents sempre tem que ter acesso ao argumento especial e -events 
    //(o que está entre parenteses), sao os doados que o evento contém, São varias informaçoes 
        const handleMyEvent = (e) => {
            //console log vai printar no console inspecionar
            console.log(e);
            console.log("Ativou o evento.");
        }
        const renderSomenthing =(x) => {
            if (x) {
                return <h1>Estou renderizando isso.</h1>
            } else {
                return <h1>Também posso renderizar isso!</h1>
            }
        }
        //dentro de button não é colocado os parenteses depois da função (handleMyEvent()), pois se coloca, 
        //a função será executada sempre que rodar a aplicação e se não coloca, como está agora, só será 
        //executada quando clicar no botão.
    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui!</button>
            </div>
            <div>
                {/*Aqui é uma outra forma de fazer a mesma coisa que está em cima, quando quer fazer algo mais simples 
                e que não vai ser usado em vários lugares, só fazer assim */}
                <button onClick={() => console.log("Clicou.")}>Clique aqui também!</button>
                {/*O react também deixa criar uma função maior in line, mas nao é uma boa pratica, porque já começa 
                a ficar mais complexo e descenessário, sendo melhor criar uma função separada */}
                <button onClick={() =>{
                    if (true){
                        console.log("Essa função não deveria estar aqui no meio")
                    }
                }}>Clica Aqui por favor</button>
            </div>
            {renderSomenthing(true)}
            {renderSomenthing(false)}
        </div>
    )
}

export default Events;