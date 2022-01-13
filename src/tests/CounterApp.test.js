import { shallow } from "enzyme";
import React from "react";
import "@testing-library/jest-dom";
import CounterApp from "../CounterApp";

describe("Pruebas <CounterApp />", () => {
    let wrapper=shallow(<CounterApp />);
  beforeEach(()=>{
     wrapper = shallow(<CounterApp />);
  })
  test("prueba render CounterApp", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("prueba valor props", () => {
    const valor = 100;
    const wrapper = shallow(<CounterApp values={valor} />);
    const valorProps = wrapper.find("h2").html();
    expect(valorProps.includes(valor)).toBe(true);
  });
  test("debe incrementar el contador", () => {
    wrapper.find("button").at(2).simulate("click");
    const valorProps = wrapper.find("h2").text().trim();
    expect(valorProps).toBe("1");
  });
  test("debe decrementar el contador", () => {
    wrapper.find("button").at(0).simulate("click");
    const valorProps = wrapper.find("h2").text().trim();
    expect(valorProps).toBe("-1");
  });
  test('debe colocar el valor por defecto con el boton reset',()=>{
    const wrapper = shallow(<CounterApp values={105} />);
    wrapper.find("button").at(2).simulate("click");
    wrapper.find("button").at(1).simulate("click");
    const valorProps = wrapper.find("h2").text().trim();
    expect(valorProps).toBe('105')

  })
});
