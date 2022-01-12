import { getHeroeByIdAsync } from "../../base/09-promesas"
import heroes from "../../data/heroes";

describe('Prubas con promesas',()=>{
    test('getHeroeByIdAsync debe retornar un heroe async',(done)=>{
        const id=1;
        getHeroeByIdAsync(id).then(h=>{
            expect(h).toBe(heroes[0])
            done();
        })


    })
    test('debe de obtener un error si el id heroe no existe',(done)=>{
        getHeroeByIdAsync(100).catch(err=>{
            expect(err).toBe('No se pudo encontrar el héroe')
            done()
        })
    })
})


