import React, {useState, useEffect}  from 'react'

function Drink({ match }) {
    useEffect(()=>{
        // eslint-disable-next-line
        fetchItem();
        console.log(match)
    }, []);
    const [item, setItem] = useState([]);
    const fetchItem = async () =>{
        const data = await fetch(
            `https://www.thecocktaildb.com/api/json/v2/1/lookup.php?i=${match.params.id}`
        );

        const item = await data.json();
        console.log(item.drinks)
        setItem(item.drinks)        
    }
    return (
        <div>
            {item.map(i=>(
                <div>
                <h1 key={i.idDrink}>{i.strDrink}</h1>
                <p>{i.strInstructions}</p>
                </div>
            ))} 
        </div>
    )
}

export default Drink;