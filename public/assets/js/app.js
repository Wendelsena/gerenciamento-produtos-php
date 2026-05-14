const departamento = document.getElementById('departamento');
const secao = document.getElementById('secao');
const grupo = document.getElementById('grupo');
const subgrupo = document.getElementById('subgrupo');

const btnPesquisar = document.getElementById('btnPesquisar');

async function carregarDepartamentos() {

    try {

        const response = await fetch('departamentos.php');

        const dados = await response.json();

        departamento.innerHTML = '<option value="">Selecione</option>';

        dados.forEach(item => {

            departamento.innerHTML += `
                <option value="${item.cdg_depto}">
                    ${item.dcr_depto}
                </option>
            `;
        });

    } catch (error) {

        console.error('Erro ao carregar departamentos:', error);
    }
}

function resetSelect(select) {

    select.innerHTML = '<option value="">Selecione</option>';
    select.disabled = true;
}

departamento.addEventListener('change', () => {

    resetSelect(secao);
    resetSelect(grupo);
    resetSelect(subgrupo);

    btnPesquisar.disabled = true;

    if (departamento.value) {

        secao.disabled = false;
    }
});

secao.addEventListener('change', () => {

    resetSelect(grupo);
    resetSelect(subgrupo);

    btnPesquisar.disabled = true;

    if (secao.value) {

        grupo.disabled = false;
    }
});

grupo.addEventListener('change', () => {

    resetSelect(subgrupo);

    btnPesquisar.disabled = true;

    if (grupo.value) {

        subgrupo.disabled = false;
    }
});

subgrupo.addEventListener('change', () => {

    btnPesquisar.disabled = !subgrupo.value;
});


carregarDepartamentos();