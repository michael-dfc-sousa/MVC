class AlunoModel{
    constructor({nome, _id, notas} = {notas: {}}){

        this.nome = nome;

        this._id = (_id !== undefined)? _id :  this.generateId()

        this.notas = {...notas} // foi passado dessa forma para que o objeto não s
        //não seja passado por referência, sendo assim se houver alguma alteração
        //será feita na cópia e não no objeto original por uma questão de segurança.

        this.media = {}

        if(this._id > AlunoModel.maxId){
            AlunoModel.maxId = this._id;
        }

        for(let materia in this.notas){
            this.media[materia] = avarege(...this.notas[materia])
        }

    }

    generateId(){
        return AlunoModel.maxId + 1
    }
    
}

AlunoModel.maxId = 0
