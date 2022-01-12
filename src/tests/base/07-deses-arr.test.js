import { type } from "@testing-library/user-event/dist/type"
import { retornaArreglo } from "../../base/07-deses-arr"

describe('Pruebas deses-arr',()=>{

 test('retornaArreglo debe devolver un arreglo de letras y numeros',()=>{
    const [letras,numeros] = retornaArreglo()

    expect(letras).toBe('ABC')
    expect(typeof letras).toBe('string')
   
    expect(numeros).toBe(123)
    expect(typeof numeros).toBe('number')
 })


})