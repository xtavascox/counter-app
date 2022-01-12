import { getImagen } from "../../base/11-async-await"

describe('pruebas async',()=>{
    test('getImagen retornar url imagen ',async()=>{
        const url =await getImagen();

        expect(typeof url).toBe('string')
    })
})