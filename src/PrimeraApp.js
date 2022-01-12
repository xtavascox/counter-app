import React from "react";
import PropTypes from 'prop-types'

const PrimeraApp = ({saludo,subtitulo}) => {
 
  return (
    <>
    <React.StrictMode>
    <h1>{saludo}</h1>
      {/* <pre>{JSON.stringify(datos,null,3)}</pre> */}
      <p> {subtitulo} </p>

    </React.StrictMode>
      
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
