import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("pruebas funciones ", () => {
  test("getUser debe retornar un objeto", () => {
    const getTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(user).toStrictEqual(getTest);
  });

  test("pruba getUsuarioActivo deb retornar un objeto con el username dado por parametros", () => {
    const nombre = "tavasco";

    const user = getUsuarioActivo(nombre);

    const userTest = {
      uid: "ABC567",
      username: `${nombre}`,
    };

    expect(user).toStrictEqual(userTest);
  });
});
