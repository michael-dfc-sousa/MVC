
export class AlunosView{
    constructor(table, materiaService){
        this.tableList = table;
        this.tableHeader = this.tableList.querySelector("thead")
        this.tableBody = this.tableList.querySelector("tbody")
        this.materias = materiaService.getMaterias()
        this.henderHeader();
    }
    
    henderHeader(){

        const tr = document.createElement("tr")

        const cabecalhoMaterias = this.materias.map(materia => {

            return `<td>${materia}</td>`

        }).join("")

        tr.innerHTML = `<td>Nome</td>` + cabecalhoMaterias

        this.tableHeader.appendChild(tr)

    }

    renderTable(alunos){
        this.tableBody.innerHTML = ""
        alunos.forEach((aluno) =>{

            const tr = document.createElement("tr")

            let notaAtribuida = false
            
            this.materias.forEach(materia => {
                if(materia in aluno.notas){
                    notaAtribuida = true
                }
            })

            if(notaAtribuida){
                const valores = this.materias.map(materia => {
                    if(notaAtribuida){
                        if(materia in aluno.notas){
                            return `<td>${aluno.media[materia]}</td>`
                        }else{
                            return `<td><a href="http://127.0.0.1:5500/edit.html?id=${aluno._id}">Média</a></td>`
                        }
                    }
                }).join("")
                tr.innerHTML = `<td><a href="http://127.0.0.1:5500/edit.html?id=${aluno._id}">${aluno.nome}</a></td>` +  valores;
                this.tableBody.appendChild(tr)

            }else{
                const valores = `<td colspan="${this.materias.length}"><a href="http://127.0.0.1:5500/edit.html?id=${aluno._id}">Média</a></td>`
                tr.innerHTML = `<td><a href="http://127.0.0.1:5500/edit.html?id=${aluno._id}">${aluno.nome}</a></td>` +  valores;
                this.tableBody.appendChild(tr)
            }
        })
    }
}