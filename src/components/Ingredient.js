import React, {useState, useEffect} from 'react';
// eslint-disable-next-line
import {Link} from 'react-router-dom';

function Ingredient({ match }){
    useEffect(()=>{
        // eslint-disable-next-line
        fetchItem();
        // eslint-disable-next-line
        fetchDrinks();
        console.log(match)
    }, []);
    const [item, setItem] = useState([]);
    const fetchItem = async () =>{
        var path = match.params.id.split(" ").join("_")
        const data = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${path}`
        );
        const item = await data.json();

        console.log(item.ingredients)
        setItem(item.ingredients)
    }
    const [drinks, setDrinks] = useState([]);
    const fetchDrinks = async () =>{
        var path = match.params.id.split(" ").join("_")
        const data = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${path}`
        );
        const items = await data.json();

        console.log(items.drinks)
        setDrinks(items.drinks)
    }    
    return (
        <div>
            {item.map(i=>(
                <div>
                <h1 key={i.idIngredient}>{i.strIngredient}</h1>
                <p key={i.strDescription}>{i.strDescription}</p>
                </div>
            ))}
            {drinks.map(item=>(
                <h4 key={item.idDrink}>{item.strDrink}</h4>
            ))}
        </div>
    )
}

export default Ingredient;