import React from "react";
import PropTypes from 'prop-types'

export const PrimeraApp = ({saludo,subtitulo}) => {
 
  return (
    <>
    
    <h1>{saludo}!!!!</h1>
      {/* <pre>{JSON.stringify(datos,null,3)}</pre> */}
      <p>{subtitulo}</p>


      
    </>
  );
};

PrimeraApp.propTypes={
    saludo:PropTypes.string.isRequired
}
PrimeraApp.defaultProps={
    subtitulo:'soy un subtitulo default'
}
export default PrimeraApp;
