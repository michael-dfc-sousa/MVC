
export class EditAlunosController{
    constructor(alunoModel, viewEdit, service){
        this.alunoModel = alunoModel;
        this.viewEdit = viewEdit;
        this.service = service
        this.renderEditAlunoNotas(alunoModel)
    }

    editEstudentData(){
        const alunos = this.service.editAluno()
        this.renderEditAlunoNotas(alunos)
    }

    renderEditAlunoNotas(aluno){
        this.viewEdit.editAlunoRender(aluno)
    }
}