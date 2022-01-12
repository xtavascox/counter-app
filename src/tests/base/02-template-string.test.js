import '@testing-library/jest-dom'
import { getSaludo } from "../../base/02-template-string"

describe('pruebas a los template strings',()=>{
    test('funcion getSaludo debe retornar hola + en argumento enviado',()=>{
        const nombre='gustavo'
        
        const saludo=getSaludo(nombre)

        expect(saludo).toBe(`Hola ${nombre}!`)

    })

    test('respuesta de la funcion getSaludo por default,sin ingreso de un argumento',()=>{

        const saludo=getSaludo()

        expect(saludo).toBe(`Hola Carlos!`)

    })
})