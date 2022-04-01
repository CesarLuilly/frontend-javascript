//              //Fucion para consultar un API.
const fetchPokemon = () => {
    //          //Recuperamos Element.
    const pokeName =  document.getElementById("pokeName");

    //          //Obtenemos nombre.
    let pokeInput = pokeName.value.toLowerCase();

    //          //Cadena de consulta.
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;

    //          //Realizamos la consulta.
    fetch(url).then((res) => {
        if (
            res.status != "200"
            )
        {
            subMostrarOcultarPokeLaterales(true, true);
            subMostrarOcultarPokeLaterales(false, false);
            pokeImage("./assets/img/poke-sad.jpg", "", "", "", "")  
        }
        else
        {
            subMostrarOcultarPokeLaterales(false, true);
            subMostrarOcultarPokeLaterales(true, false);
            return res.json();
        }
    }).then(
        (data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        let pokeImg1 = data.sprites.back_shiny;
        let pokeImg2 = data.sprites.front_shiny;
        let pokeImg3 = data.sprites.front_default;
        let pokeName = data.name;
        let habili1 = data.abilities[0].ability.name;
        let habili2 = data.abilities[1].ability.name;
        console.log(pokeImg);
        pokeImage(pokeImg, pokeImg1, pokeImg2, pokeImg3, pokeName, habili1, habili2, "");
        
    })
}

const pokeImage = (urlImage, urlImage1, urlImage2, urlImage3, name, habili1, habili2, habili3) => {
    const pokeImg = document.getElementById("pokeImg");
    const pokeImg1 = document.getElementById("urlImg1");
    const pokeImg2 = document.getElementById("urlImg2");
    const pokeImg3 = document.getElementById("urlImg3");
    const pokeName = document.getElementById("pokeNameLateral");
    const pokeUl1 = document.getElementById("ul1");
    const pokeUl2 = document.getElementById("ul2");
    pokeImg.src = urlImage;
    pokeImg1.src = urlImage1;
    pokeImg2.src = urlImage2;
    pokeImg3.src = urlImage3;
    pokeName.textContent = name;
    pokeUl1.textContent = habili1;
    pokeUl2.textContent = habili2;
};

//          //Mostrar o ocultar laterales.
const subMostrarOcultarPokeLaterales = (mostrar, pokebolas) => {
    
    let lateral1;
    let lateral2;
    if(
        pokebolas == true
        )
    {
        lateral1 = document.getElementById('mostrarorocultar1');
        lateral2 = document.getElementById('mostrarorocultar2');
    }
    else
    {
        lateral1 = document.getElementById('info1');
        lateral2 = document.getElementById('info2');
    }

    
    if(
        mostrar == true
    ){
        lateral1.style.display = 'block';
        lateral2.style.display = 'block';
    }else{
        lateral1.style.display = 'none';
        lateral2.style.display = 'none';
    }
}

