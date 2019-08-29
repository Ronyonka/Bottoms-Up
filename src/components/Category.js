import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Category(){
    useEffect(()=>{
        fetchItem();
    }, []);
    const [item, setItem] = useState({});
    const fetchItem = async () =>{

    }

    return (
        <div>
            <h1>Drink</h1>
        </div>
    )
}

export default Category;