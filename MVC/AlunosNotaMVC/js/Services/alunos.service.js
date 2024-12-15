class AlunosService {
    
    constructor() {
        this.alunos = []
        this.updateAlunosFromLocalStorage()
    }

    add(aluno) {
        if (!aluno instanceof AlunoModel) {
            throw TypeError("aluno must be instanceof AlunoModel")
        }
        this.alunos.push(aluno)
        this.updateLocalStorage()
    }

    filterAlunos(value){
        return this.alunos.filter(aluno => aluno.nome.indexOf(value) != -1)
    }

    editAluno() {
        this.updateLocalStorage()
    }

    getAlunos() {
        return this.alunos;
    }

    getAlunoById(id) {
        return this.alunos.find(aluno => aluno._id === id)
    }

    updateLocalStorage() {
        let alunosLocalStorage = JSON.stringify(this.alunos)
        localStorage.setItem("alunos", alunosLocalStorage)
    }

    updateAlunosFromLocalStorage() {
        const local = localStorage.getItem("alunos")
        if (local) {
            const alunos = JSON.parse(local)
            alunos.forEach(aluno => {
                this.add(new AlunoModel(aluno))
            })
        }
    }

}