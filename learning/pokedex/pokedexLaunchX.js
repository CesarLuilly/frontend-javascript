//              //Funcion flecha.
const fetchPokemon = () => {
    const pokeName =  document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    //despues de ejecutar fetch vamos a recibir una promesa.
    //Stack de programacion.
    //Una consulta a un servidor es asincrona porque cando se manda y se hace la consulta, 
    //se tiene que esperar para despues sigamos con la execucion.
    fetch(url).then((res) => {
        if (res.status != "200"){
            console.log(res);  
            pokeImage("./img/poke-sad.jpg")  
        }
        else{
            return res.json();
        }
        
        
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);
        
    })
}

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
};






























