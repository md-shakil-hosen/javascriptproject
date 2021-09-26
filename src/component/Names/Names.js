import React from 'react';
import './Names.css'

const Names = (props) => {
    const names = props.names

    // for loop for addeding population 
    let likePopulations = 0;
    for (const population of props.populations) {
        likePopulations = likePopulations + parseInt(population)
    }

    return (
        <div>
            <div className='total-population'>
                <h3>Total Selected : {names.length}</h3>
                <h4>Total Food Like : {likePopulations}</h4>

            </div>
            {/* every single name of selection of the card  */}
            {
                names.map((name, index) => <div key={index} className="selectedDiv">Selected district <br /><span style={{ fontSize: '22px' }}>{name}</span></div>)
            }
        </div>
    );
};

export default Names;