export class MateriaService{
    constructor(){
        this.materias = ["portugues","matematica","historia","ciencias"]
    }

    getMaterias(){
        return this.materias
    }
}