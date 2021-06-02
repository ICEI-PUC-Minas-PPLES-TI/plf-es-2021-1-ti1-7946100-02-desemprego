$(document).ready(function() {

    // Activate tooltip
    $('[data-toggle="tooltip"]').tooltip();
    var db = JSON.parse(localStorage.getItem('cadastroVagas'))
    var controle = 0


    function excluirRegistro(id) {
        if (id > 0) {
            alert(id)
            if (confirm("Deseja realmente excluir este registro?")) {
                for (let i = 0; i < db.length; i++) {
                    if (db[i].id == id) {
                        db.splice(i, 1)
                    }
                }

            }
        }
    }

    function populaTabela() {
        $("table tbody").html("")
        db.forEach(function(item) {
            $("table tbody").append(`<tr>
            <td>${item.id}</td>
            <td>${item.funcao}</td>
            <td>${item.escolaridade}</td>
            <td>${item.salario}</td>
            <td>${item.requisitos}</td>
            <td>
            <a href="#editEmployeeModal"   class="edit"   data-toggle="modal" ="${editaRegistro(item.id)};">  <i class="material-icons" data-toggle="tooltip" title="Edit">   &#xE254;</i></a>
            <a href="#" class="delete" data-toggle="modal" ="${excluirRegistro(item.id)};"><i class="material-icons" data-toggle="tooltip" title="Excluir">&#xE872;</i></a>
            </td>
        </tr>`)
        })
        localStorage.setItem('cadastroVagas', JSON.stringify(db))
    }

    function editaRegistro(id) {
        alert('editando id')
        alert(id)
        controle = id
        db.forEach(function(item) {

                if (item.id === id) {
                    $("#txtId").val(id)
                    $("#txtFuncao").val(item.funcao)
                    $("#txtEscolaridade").val(item.escolaridade)
                    $("#txtSalario").val(item.salario)
                    $("#txtRequisitos").val(item.requisitos)
                }
            })
            //$("#editEmployeeModal").modal("show")


    }

    function insereVaga() {
        alert()
        if (controle > 0) {
            $("#editEmployeeModal").modal("hide")
        }

        let nId = 0
        if (db.length == 0) {
            nId = 1
        } else {
            nId = db[db.length - 1].id + 1
        }
        let vaga = {
            id: nId,
            funcao: document.getElementById('funcao').value,
            escolaridade: document.getElementById('escolaridade').value,
            salario: document.getElementById('salario').value,
            requisitos: document.getElementById('requisitos').value,
            empresa: 1
        }
        if (controle == "0") {

            db.push(vaga)
        } else {
            db.forEach(function(item) {
                if (item.id == controle) {
                    item.funcao = $("#txtFuncao").val()
                    item.escolaridade = $("#txtEscolaridade").val()
                    item.salario = $("#txtSalario").val()
                    item.requisitos = $("#txtRequisitos").val()

                }
            })
        }

        controle = 0
        $("#txtId").val("")
        $("#txtFuncao").val("")
        $("#txtEscolaridade").val("")
        $("#txtSalario").val("")
        $("#txtRequisitos").val("")

        localStorage.setItem('cadastroVagas', JSON.stringify(db))
        populaTabela()
    }

    var db = [];
    $(function() {
        db = JSON.parse(localStorage.getItem('cadastroVagas'));
        if (db != null) {
            populaTabela()
        } else
            db = []
    })

    $("#tbnSalvar").click(insereVaga);

})