import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Home(){
    useEffect(()=>{
        // eslint-disable-next-line
        fetchItems();
    }, []);
    const [items, setItems] = useState([]);
    const fetchItems = async () =>{
        const data = await fetch(
            'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
        );

        const items = await data.json();
        console.log(items.drinks)
        setItems(items.drinks)
    }

    return (
        <div>
            {items.map(item=>(
                <h3 key={item.strIngredient1}> 
                <Link to={`/${item.strIngredient1}`}>{item.strIngredient1}</Link>
                </h3>
            ))}  
        </div>
    )
}

export default Home;