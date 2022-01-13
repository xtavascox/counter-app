import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import React from "react";
import PrimeraApp from "../PrimeraApp";

describe("Pruebas en <PrimeraAp />", () => {
  
    test("debe de mostrar <PrimeraApp /> correctamente", () => {
    const saludo = "hola,soy goku";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar el subtitulo enviado por props',()=>{
    const saludo = "hola,soy goku";
    const subtitulo='puto el que lo lea'
    const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo} /> )
    const textoParrafo=wrapper.find('p').text()
    expect(textoParrafo).toBe(subtitulo)
    
  })
});
