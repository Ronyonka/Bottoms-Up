import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Home(){
    useEffect(()=>{
        fetchItems();
    }, []);
    const [items, setItems] = useState([]);
    const fetchItems = async () =>{
        const data = await fetch(
            'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
        );

        const items = await data.json();
        console.log(items.drinks)
        setItems(items.drinks)
    }

    return (
        <div>
            {items.map(item=>(
                <h3 key={item.strCategory}> 
                <Link to={`/${item.strCategory}`}>{item.strCategory}</Link>
                </h3>
            ))}  
        </div>
    )
}

export default Home;