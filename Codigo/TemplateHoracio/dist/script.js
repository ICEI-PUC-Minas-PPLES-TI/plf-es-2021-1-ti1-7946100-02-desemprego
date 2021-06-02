$(document).ready(function() {
    // Activate tooltip

    function insereVaga() {
        var nId = 0
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
            requisitos: document.getElementById('requisitos').value
        };

        db.push(vaga)
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
            db = []
    })

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
				<a href="#" class="edit" data-toggle="modal" onclick="javascript:editaRegistro(${item.id});"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                <a href="#" class="delete" data-toggle="modal" onclick="javascript:removeRegistro(${item.id});"><i class="material-icons" data-toggle="tooltip" title="Excluir">&#xE872;</i></a>
				</td>
			</tr>`)
        })
    }

})