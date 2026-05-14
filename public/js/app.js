const departamento = document.getElementById('departamento');
const secao = document.getElementById('secao');
const grupo = document.getElementById('grupo');
const subgrupo = document.getElementById('subgrupo');

const btnPesquisar = document.getElementById('btnPesquisar');

departamento.addEventListener('change', () => {

    secao.disabled = !departamento.value;

    if (!departamento.value) {
        secao.value = '';
        grupo.value = '';
        subgrupo.value = '';

        grupo.disabled = true;
        subgrupo.disabled = true;
        btnPesquisar.disabled = true;
    }
});

secao.addEventListener('change', () => {

    grupo.disabled = !secao.value;

    if (!secao.value) {
        grupo.value = '';
        subgrupo.value = '';

        subgrupo.disabled = true;
        btnPesquisar.disabled = true;
    }
});

grupo.addEventListener('change', () => {

    subgrupo.disabled = !grupo.value;

    if (!grupo.value) {
        subgrupo.value = '';
        btnPesquisar.disabled = true;
    }
});

subgrupo.addEventListener('change', () => {

    btnPesquisar.disabled = !subgrupo.value;
});