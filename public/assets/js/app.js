document.addEventListener('DOMContentLoaded', () => {

    const departamento = document.getElementById('departamento');
    const secao = document.getElementById('secao');
    const grupo = document.getElementById('grupo');
    const subgrupo = document.getElementById('subgrupo');

    const btnPesquisar = document.getElementById('btnPesquisar');
    const btnAlterar = document.getElementById('btnAlterar');

    const grid = document.getElementById('gridProdutos');

    const modalDepartamento = document.getElementById('modalDepartamento');
    const modalSecao = document.getElementById('modalSecao');
    const modalGrupo = document.getElementById('modalGrupo');
    const modalSubgrupo = document.getElementById('modalSubgrupo');

    const btnSalvarAlteracao = document.getElementById('btnSalvarAlteracao');


    function resetSelect(select) {
        select.innerHTML = '<option value="">Selecione</option>';
        select.disabled = true;
    }

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
            const response = await fetch(`secoes.php?cdg_depto=${departamento.value}`);
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
            const response = await fetch(`grupos.php?cdg_secao=${secao.value}`);
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
            const response = await fetch(`subgrupos.php?cdg_grupo=${grupo.value}`);
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

    modalDepartamento.addEventListener('change', async () => {
        resetSelect(modalSecao);
        resetSelect(modalGrupo);
        resetSelect(modalSubgrupo);

        if (!modalDepartamento.value) {
            return;
        }

        modalSecao.disabled = false;

        try {
            const response = await fetch(`secoes.php?cdg_depto=${modalDepartamento.value}`);
            const dados = await response.json();

            modalSecao.innerHTML = '<option value="">Selecione</option>';
            dados.forEach(item => {
                modalSecao.innerHTML += `
                    <option value="${item.cdg_secao}">
                        ${item.dcr_secao}
                    </option>
                `;
            });
        } catch (error) {
            console.error('Erro ao carregar seções no modal:', error);
        }
    });

    modalSecao.addEventListener('change', async () => {
        resetSelect(modalGrupo);
        resetSelect(modalSubgrupo);

        if (!modalSecao.value) {
            return;
        }

        modalGrupo.disabled = false;

        try {
            const response = await fetch(`grupos.php?cdg_secao=${modalSecao.value}`);
            const dados = await response.json();

            modalGrupo.innerHTML = '<option value="">Selecione</option>';
            dados.forEach(item => {
                modalGrupo.innerHTML += `
                    <option value="${item.cdg_grupo}">
                        ${item.dcr_grupo}
                    </option>
                `;
            });
        } catch (error) {
            console.error('Erro ao carregar grupos no modal:', error);
        }
    });

    modalGrupo.addEventListener('change', async () => {
        resetSelect(modalSubgrupo);

        if (!modalGrupo.value) {
            return;
        }

        modalSubgrupo.disabled = false;

        try {
            const response = await fetch(`subgrupos.php?cdg_grupo=${modalGrupo.value}`);
            const dados = await response.json();

            modalSubgrupo.innerHTML = '<option value="">Selecione</option>';
            dados.forEach(item => {
                modalSubgrupo.innerHTML += `
                    <option value="${item.cdg_subgrupo}">
                        ${item.dcr_subgrupo}
                    </option>
                `;
            });
        } catch (error) {
            console.error('Erro ao carregar subgrupos no modal:', error);
        }
    });

    btnPesquisar.addEventListener('click', async () => {
        grid.innerHTML = '';
        btnAlterar.disabled = true;

        try {
            const response = await fetch(`produtos.php?cdg_subgrupo=${subgrupo.value}`);
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

            const checkboxes = document.querySelectorAll('.produto-checkbox');
            checkboxes.forEach(item => {
                item.addEventListener('change', () => {
                    const selecionados = document.querySelectorAll('.produto-checkbox:checked');
                    btnAlterar.disabled = selecionados.length === 0;
                });
            });

        } catch (error) {
            console.error('Erro ao carregar produtos:', error);
        }
    });

    btnAlterar.addEventListener('click', async () => {
        const modal = new bootstrap.Modal(document.getElementById('modalAlteracao'));
        modal.show();

        resetSelect(modalSecao);
        resetSelect(modalGrupo);
        resetSelect(modalSubgrupo);

        try {
            const response = await fetch('departamentos.php');
            const dados = await response.json();

            modalDepartamento.innerHTML = '<option value="">Selecione</option>';

            dados.forEach(item => {
                modalDepartamento.innerHTML += `
                    <option value="${item.cdg_depto}">
                        ${item.dcr_depto}
                    </option>
                `;
            });
        } catch (error) {
            console.error('Erro ao abrir modal:', error);
        }
    });

    btnSalvarAlteracao.addEventListener('click', async () => {
        const selecionados = document.querySelectorAll('.produto-checkbox:checked');
        const produtos = [];

        selecionados.forEach(item => {
            produtos.push(item.value);
        });

        if (!modalSubgrupo.value) {
            alert('Selecione o novo subgrupo');
            return;
        }

        try {
            const response = await fetch('update-produtos.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    produtos: produtos,
                    subgrupo: modalSubgrupo.value
                })
            });

            const resultado = await response.json();

            if (resultado.success) {
                alert('Produto(s) atualizado(s) com sucesso!');

                const modalElement = document.getElementById('modalAlteracao');
                const modalInstance = bootstrap.Modal.getInstance(modalElement);
                modalInstance.hide();

                btnPesquisar.click();
            } else {
                alert(resultado.message);
            }
        } catch (error) {
            console.error(error);
            alert(error);
        }
    });

    carregarDepartamentos();
});