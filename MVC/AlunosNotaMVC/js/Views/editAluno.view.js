class EditAlunoView {
  constructor(form, materias) {
    this.form = form
    this.container = form.querySelector("[data-edit-notas]");
    this.materias = materias;
  }

  editAlunoRender(aluno) {

    const arrMaterias = this.materias.map(materia =>
      `
         <div class="row" nota-edit-materia = "${materia}">
          <div class="input-field col s4">
            <input id="materia_${materia}" type="text" class="validate" value="${materia}" disabled/>
          </div>
          <div   class="input-field col s2">
            <input nota-trimestre  id="nota_${materia}_1" type="number" class="validate" value="${aluno.notas[materia]?.[0] || undefined}"/>
          </div>
          <div  class="input-field col s2">
            <input nota-trimestre  id="nota_${materia}_2" type="number" class="validate" value="${aluno.notas[materia]?.[1] || undefined}"/>
          </div>
          <div  class="input-field col s2">
            <input nota-trimestre  id="nota_${materia}_3" type="number" class="validate" value="${aluno.notas[materia]?.[2] || undefined}"/>
          </div>
          <div  class="input-field col s2">
            <input  nota-trimestre id="nota_${materia}_4" type="number" class="validate" value="${aluno.notas[materia]?.[3] || undefined}"/>
          </div>
        </div>        
        `).join("")

    this.editAluno(aluno, this.form)
    const htmlEditAlunoView = this.container
    return htmlEditAlunoView.innerHTML = arrMaterias
  }

  editAluno(aluno, form) {
    document.querySelector(".form-add").addEventListener("submit", function (e) {
      e.preventDefault()

      let notasTrimestrePorMateria = Array.from(form.querySelectorAll("[nota-edit-materia]"))

      let notas = {}

      notasTrimestrePorMateria.forEach(materia => {
        let notasPorMateria = Array.from(materia.querySelectorAll("[nota-trimestre]"))
        notas[materia.getAttribute("nota-edit-materia")] = notasPorMateria.map(notas => parseFloat(notas.value) || 0)
      })

      aluno.nome = form.querySelector("#first_name").value

      aluno.notas = notas

      editAlunosController.editEstudentData()

      window.location.assign("index.html")
    })
  }
}