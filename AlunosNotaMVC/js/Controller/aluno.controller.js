import { AlunoModel } from "../Models/aluno.model.js";


export class AlunosController{
    
    constructor(service, view){
        view.renderTable(service.getAlunos());
        this.service = service;
        this.view = view;
        
    }

    filterAlunos(digitValue){
        const alunosFiltrados = this.service.filterAlunos(digitValue)
        this.view.renderTable(alunosFiltrados)
    }

    add(aluno){
        this.service.add(new AlunoModel(aluno))
        this.view.renderTable(this.service.getAlunos())
    }
}