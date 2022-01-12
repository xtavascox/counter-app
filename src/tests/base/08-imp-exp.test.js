import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas de funciones heroes", () => {
  test("debe retornar un heroe por id", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toStrictEqual(heroeData);
  });

  test("debe retornar undefined si id no existe", () => {
    const id = 111;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toBe(undefined);
  });

  test("arreglo comic DC", () => {
    const owner = "DC";
    const resp = getHeroesByOwner(owner);
    const arrTest = heroes.filter((h) => h.owner === owner);

    expect(resp).toStrictEqual(arrTest);
  });

  test("arreglo comic Marvel", () => {
    const owner = "Marvel";
    const resp = getHeroesByOwner(owner);
    const arrTest = heroes.filter((h) => h.owner === owner);

    expect(resp.length).toBe(arrTest.length);
  });
});
