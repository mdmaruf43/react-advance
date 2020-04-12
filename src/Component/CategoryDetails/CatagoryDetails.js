import React from 'react'
import { useContext } from 'react';
import { CategoryContext } from '../../App';
import { useEffect } from 'react';

const CategorDetails = (props) => {
    const {name} = props.product;
    
    return (
        <div>
            <h3>This is your category Details</h3>
            <h6>Seleted Category; {name}</h6>
        </div>
    )
}

export default CategorDetails;