import React from 'react';

const Country = (props) => {
    //  console.log(props);
    const {name, population, area, flag} = props.country;
    const styleImg={ height: '50px',}
    const countryStyle={border: '1px solid red', margin: '10px', padding: '10px',}
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style={countryStyle}>
            <h4>This is County name: {name} </h4>
            <img style={styleImg} src={flag} alt=""/>
            <h5>This is population: {population}</h5>
            <h5>This is area: {area}</h5>
            <button onClick={ () => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;