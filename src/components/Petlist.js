import React from 'react';
import Card from './Card';

const Petlist = ({pets}) =>{
    const cardComponent = pets.map((user,i) => {
        return(
        <Card 
        key = {pets[i].id}
        id =  {pets[i].id}
        name = {pets[i].name} 
        email = {pets[i].email} 
        />
        );
    })
    return(
        <div>
            {cardComponent}
        </div>
    );
}

export default Petlist;