import React from 'react';
import './District.css'


// single district component here 
const District = (props) => {

    // destructuring data from object 
    const { name, area, population: likeFood, famous, img, devision } = props.district

    return (
        // every single card of single district 
        <div className="singleCard">
            <div className="img_container">
                <img src={img} alt="" />
            </div>

            {/* card body  */}
            <div className="cartBody">
                <h3>{name}</h3>
                <h4>Famous food: {famous}</h4>
                <div className="info">
                    <h5>Area : {area} km-squre,</h5>
                    <h5>Division : {devision}</h5>
                </div>
                <h5>Like food : <span style={{ fontSize: '15px' }}>{likeFood}</span></h5>
                {/* onclick button for adding name and population  */}
                <button className="regularBTN" onClick={() => props.addToCart(name, likeFood)}>Like Population</button>

                {/* fake button just for decorating card  */}
                <button className="regularBTN">Delete last item</button>
            </div>
        </div>
    );
};

export default District;