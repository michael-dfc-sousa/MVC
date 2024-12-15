// const alunos = [
//     {
//       _id: 0,
//       nome: "chico melato",
//       notas: {
//         portugues: [1, 1, 2, 2],
//         matematica: [2, 2, 2, 2],
//         historia: [2, 2, 3, 3],
//         ciencias: [3, 3, 3, 3],
//       },
//     },
//     {
//       _id: 1,
//       nome: "talita lima",
//       notas: {
//         portugues: [4, 4, 4, 4],
//         matematica: [4, 4, 5, 5],
//         historia: [5, 5, 6, 6],
//         ciencias: [7, 7, 8, 9],
//       },
//     },
//     {
//       _id: 2,
//       nome: "talita lima",
//       notas: {
//         portugues: [4, 4, 4, 4],
//         matematica: [4, 4, 5, 5],
//         historia: [5, 5, 6, 6],
//       },
//     },
//   ];
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
      const digitValue = this.value;
      sessionStorage.setItem("search", digitValue)
      alunosController.filterAlunos(digitValue)
  })


  const eventdispatch = new Event("input")
  if(sessionStorage.getItem("search")){
    document.getElementById("search_name").value = sessionStorage.getItem("search")
    document.getElementById("search_name").dispatchEvent(eventdispatch)
  }
