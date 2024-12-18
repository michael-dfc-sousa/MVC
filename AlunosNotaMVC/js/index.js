  import { MateriaService } from "./Services/materias.service.js"
  import { AlunosView } from "./Views/aluno.view.js"
  import { AlunosService } from "./Services/alunos.service.js"
  import { AlunosController } from "./Controller/aluno.controller.js"

  const tableAlunos = document.querySelector('[data-table-alunos]')

  const materiasServie = new MateriaService()

  const dataTableView = new AlunosView(tableAlunos, materiasServie)
  
  const alunosService = new AlunosService()

  const alunosController = new AlunosController(alunosService, dataTableView)

  document.querySelector(".form-add").addEventListener("submit", (e)=>{
      e.preventDefault()
      const nomeAlunos = document.getElementById("first_name").value
      alunosController.add({nome: nomeAlunos})
  })
  
  document.getElementById("search_name").addEventListener("input", function(){
      const valorDigitadoNoImput = this.value;
      sessionStorage.setItem("search", valorDigitadoNoImput)
      alunosController.filterAlunos(valorDigitadoNoImput)
  })

  const eventdispatch = new Event("input")
  if(sessionStorage.getItem("search")){
    document.getElementById("search_name").value = sessionStorage.getItem("search")
    document.getElementById("search_name").dispatchEvent(eventdispatch)
  }
