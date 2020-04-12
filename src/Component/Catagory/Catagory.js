import React from 'react'
import CategorDetails from '../CategoryDetails/CatagoryDetails'
import { useContext } from 'react'
import { CategoryContext } from '../../App'
import { useState } from 'react'
import { useEffect } from 'react'

const allProducts = [
    {name: 'Lenovo', category: 'laptop'}, {name:'Asus', category:'laptop'}, {name:'Dell', category:'laptop'},
    {name: 'Nokia', category: 'mobile'}, {name:'Sumsung', category:'mobile'}, {name:'Apple', category:'mobile'},
    {name: 'Canon', category: 'Camera'}, {name:'Nikkon', category:'Camera'}, {name:'Sony', category:'Camera'},
]

const Categries = () => {
    const [category]= useContext(CategoryContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
    console.log({category});
        const matchProducts = allProducts.filter(pd => pd.category.toLowerCase() === category.toLowerCase());
        setProducts(matchProducts);
    }, [category])
    return (
        <div>
            <h4>Select your category: {category} </h4>
            {
                products.map(pd => <CategorDetails product={pd}/>)
            }
        </div>
    )
}

export default Categries;