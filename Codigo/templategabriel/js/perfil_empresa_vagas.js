// javascript
$(document).ready(function() {
    // Activate tooltip
    $('[data-toggle="tooltip"]').tooltip();
    var numId = 0;
    // Select/Deselect checkboxes
    var checkbox = $('table tbody input[type="checkbox"]');
    $("#selectAll").click(function() {
        if (this.checked) {
            checkbox.each(function() {
                this.checked = true;
            });
        } else {
            checkbox.each(function() {
                this.checked = false;
            });
        }
    });
    checkbox.click(function() {
        if (!this.checked) {
            $("#selectAll").prop("checked", false);
        }
    });

    //seleciona funcionalidades na tabela
    //alert($('input type="submit"]'));
    function retornaId(id) {
        numId = id
        alert(numId)
    };
    /*$(".excluir").click(function() {
         if (confirm("Deseja realmente?")) {
             alert(numId)
                 /*for (let i = 0; i < db.length; i++) {
                     if (db[i].id == id) {
                         db.splice(i, 1)
                     }});


             populaTabela()

         }
     })*/

    function removeRegistro(id) {
        // let confirma = confirm("Deseja realmente excluir este registro?")
        if (confirm("Deseja realmente excluir este registro?")) {
            alert(id)
                /*     $(".delete").hover(function() {
            alert($(this).getElementById("id"))
                /*for (let i = 0; i < db.length; i++) {
                    if (db[i].id == id) {
                        db.splice(i, 1)
                    }});*/

        }
        //populaTabela()

    }


    function insereVaga() {
        let vaga = {
            id: db.length + 1,
            funcao: document.getElementById('funcao').value,
            escolaridade: document.getElementById('escolaridade').value,
            salario: document.getElementById('salario').value,
            requisitos: document.getElementById('requisitos').value,
            status: document.getElementById('status').value
        };

        db.push(vaga);
        localStorage.setItem('cadastroVagas', JSON.stringify(db))


        populaTabela()
    }

    /*-------tratamento localstorage --------*/
    var db = [];
    $(function() {
        db = JSON.parse(localStorage.getItem('cadastroVagas'));
        if (db != null) {
            populaTabela()
        } else
            db = [];
    })

    function populaTabela() {
        $("table tbody").html("")
        db.forEach(function(item) {
            $("table tbody").append(`<tr>
				<td>
				<span class="custom-checkbox">
				<input type="checkbox" id="checkbox1" name="options[]" value="1">
				<label for="checkbox1"></label>
				</span>
				<td>${item.id}</td>
				<td>${item.funcao}</td>
				<td>${item.escolaridade}</td>
				<td>${item.salario}</td>
				<td>${item.requisitos}</td>
				<td>${item.status}</td>
				<td>
				<a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                <a href="#deleteEmployeeModal" class="delete" data-toggle="modal" onclick="alert(${item.id});"><i class="material-icons" data-toggle="tooltip" title="Excluir">&#xE872;</i></a>
				</td>
			</tr>`)
        });
    }

    $(".salvar").click(insereVaga);
})