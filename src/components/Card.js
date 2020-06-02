import React from 'react';

/*function importAll(r) {
    let images = {};
    // eslint-disable-next-line array-callback-return
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));*/

const Card =({id, name, email}) =>{
    return(
        <div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 w-20'>
            <img alt='dog' src = {`https://robohash.org/${id}?200*200`}></img>
            <div>
                <h2>Name : {name}</h2>
                <p>Email : {email}</p>
            </div>
        </div>
    )
}

export default Card;