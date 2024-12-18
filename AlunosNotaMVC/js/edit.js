import { AlunosService } from "./Services/alunos.service.js"
import { MateriaService } from "./Services/materias.service.js";
import { EditAlunoView } from "./Views/editAluno.view.js";
import { EditAlunosController } from "./Controller/editAluno.controller.js";


    const alunosService = new AlunosService()
    const parametersSearch = window.location.search;
    const urlSearchParam = new URLSearchParams(parametersSearch)
    const _id = parseInt(urlSearchParam.get("id"))
    const alunoRetornadoPeloId = alunosService.getAlunoById(_id)
    let nomeDoAluno = document.getElementById("first_name")
    nomeDoAluno.value = alunoRetornadoPeloId.nome
    
    const dataEditNotas =  document.querySelector('[form-data-edit-notas]')
    const materiasService = new MateriaService().getMaterias()
    const editAlunoViewNotas = new EditAlunoView(dataEditNotas, materiasService)
    const editAlunosController = new EditAlunosController(alunoRetornadoPeloId, editAlunoViewNotas, alunosService)

    document.querySelector(".form-add").addEventListener("submit", function (e) {
        e.preventDefault()
        editAlunoViewNotas.editAluno(alunoRetornadoPeloId, dataEditNotas)
        editAlunosController.editEstudentData()
        window.location.assign("index.html")
    })


    