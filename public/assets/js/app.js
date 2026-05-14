document.addEventListener('DOMContentLoaded', () => {

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

    departamento.addEventListener('change', async () => {

        resetSelect(secao);
        resetSelect(grupo);
        resetSelect(subgrupo);

        btnPesquisar.disabled = true;

        if (!departamento.value) {
            return;
        }

        secao.disabled = false;

        try {

            const response = await fetch(
                `secoes.php?cdg_depto=${departamento.value}`
            );

            const dados = await response.json();

            secao.innerHTML = '<option value="">Selecione</option>';

            dados.forEach(item => {

                secao.innerHTML += `
                    <option value="${item.cdg_secao}">
                        ${item.dcr_secao}
                    </option>
                `;
            });

        } catch (error) {

            console.error('Erro ao carregar seções:', error);
        }
    });

    secao.addEventListener('change', async () => {

        resetSelect(grupo);
        resetSelect(subgrupo);

        btnPesquisar.disabled = true;

        if (!secao.value) {
            return;
        }

        grupo.disabled = false;

        try {

            const response = await fetch(
                `grupos.php?cdg_secao=${secao.value}`
            );

            const dados = await response.json();

            grupo.innerHTML = '<option value="">Selecione</option>';

            dados.forEach(item => {

                grupo.innerHTML += `
                    <option value="${item.cdg_grupo}">
                        ${item.dcr_grupo}
                    </option>
                `;
            });

        } catch (error) {

            console.error('Erro ao carregar grupos:', error);
        }
    });

    grupo.addEventListener('change', async () => {

        resetSelect(subgrupo);

        btnPesquisar.disabled = true;

        if (!grupo.value) {
            return;
        }

        subgrupo.disabled = false;

        try {

            const response = await fetch(
                `subgrupos.php?cdg_grupo=${grupo.value}`
            );

            const dados = await response.json();

            subgrupo.innerHTML = '<option value="">Selecione</option>';

            dados.forEach(item => {

                subgrupo.innerHTML += `
                    <option value="${item.cdg_subgrupo}">
                        ${item.dcr_subgrupo}
                    </option>
                `;
            });

        } catch (error) {

            console.error('Erro ao carregar subgrupos:', error);
        }
    });

    subgrupo.addEventListener('change', () => {

        btnPesquisar.disabled = !subgrupo.value;
    });

btnPesquisar.addEventListener('click', async () => {

    const grid = document.getElementById('gridProdutos');

    grid.innerHTML = '';

    try {

        const response = await fetch(
            `produtos.php?cdg_subgrupo=${subgrupo.value}`
        );

        const produtos = await response.json();

        if (produtos.length === 0) {

            grid.innerHTML = `
                <tr>
                    <td colspan="9" class="text-center">
                        Nenhum produto encontrado
                    </td>
                </tr>
            `;

            return;
        }

        produtos.forEach(produto => {

            grid.innerHTML += `
                <tr>

                    <td>
                        <input
                            type="checkbox"
                            class="produto-checkbox"
                            value="${produto.cod_barras}"
                        >
                    </td>

                    <td>${produto.cod_barras}</td>
                    <td>${produto.descricao}</td>
                    <td>${produto.variedade}</td>
                    <td>${produto.embalagem}</td>
                    <td>${produto.dcr_depto}</td>
                    <td>${produto.dcr_secao}</td>
                    <td>${produto.dcr_grupo}</td>
                    <td>${produto.dcr_subgrupo}</td>

                </tr>
            `;
        });

    } catch (error) {

        console.error('Erro ao carregar produtos:', error);
    }
});

    carregarDepartamentos();

});