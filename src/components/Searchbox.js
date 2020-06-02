import React from 'react';

const Searchbox = ({searchChange}) =>{
    return(
        <div className = 'pa2'>
            <input
                className = 'pa3 ba b--yellow bg-lightest-blue'
                type = 'search'
                placeholder = 'search pets'
                onChange={searchChange}
            >    
            </input>
        </div>
    );
}

export default Searchbox;