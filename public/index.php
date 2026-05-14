<?php

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gerenciamento de Produtos</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">

    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

<div class="container mt-5">

    <h2 class="mb-4">Gerenciamento de Produtos</h2>

    <div class="card p-4 shadow-sm">

        <div class="row g-3">

            <div class="col-md-3">
                <label class="form-label">Departamento</label>

                <select id="departamento" class="form-select">
                    <option value="">Selecione</option>
                </select>
            </div>

            <div class="col-md-3">
                <label class="form-label">Seção</label>

                <select id="secao" class="form-select" disabled>
                    <option value="">Selecione</option>
                </select>
            </div>

            <div class="col-md-3">
                <label class="form-label">Grupo</label>

                <select id="grupo" class="form-select" disabled>
                    <option value="">Selecione</option>
                </select>
            </div>

            <div class="col-md-3">
                <label class="form-label">Subgrupo</label>

                <select id="subgrupo" class="form-select" disabled>
                    <option value="">Selecione</option>
                </select>
            </div>

        </div>

        <div class="mt-4">
            <button id="btnPesquisar" class="btn btn-primary" disabled>
                Pesquisar
            </button>
            <button id="btnAlterar" class="btn btn-warning ms-2" disabled>
                Alterar
            </button>
        </div>

    </div>

    <div class="card mt-4 p-4 shadow-sm">

        <h5>Produtos</h5>

        <table class="table table-striped mt-3">

            <thead>
                <tr>
                    <th></th>
                    <th>Código Barras</th>
                    <th>Descrição</th>
                    <th>Variedade</th>
                    <th>Embalagem</th>
                    <th>Departamento</th>
                    <th>Seção</th>
                    <th>Grupo</th>
                    <th>Subgrupo</th>
                </tr>
            </thead>

            <tbody id="gridProdutos">

                <tr>
                    <td colspan="9" class="text-center">
                        Nenhum produto encontrado
                    </td>
                </tr>

            </tbody>

        </table>

    </div>

</div>

<div
    class="modal fade"
    id="modalAlteracao"
    tabindex="-1"
>

    <div class="modal-dialog modal-lg">

        <div class="modal-content">

            <div class="modal-header">

                <h5 class="modal-title">
                    Alterar Produtos
                </h5>

                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                ></button>

            </div>

            <div class="modal-body">

                <div class="row g-3">

                    <!-- DEPARTAMENTO -->
                    <div class="col-md-3">

                        <label class="form-label">
                            Departamento
                        </label>

                        <select
                            id="modalDepartamento"
                            class="form-select"
                        >
                            <option value="">
                                Selecione
                            </option>
                        </select>

                    </div>

                    <!-- SEÇÃO -->
                    <div class="col-md-3">

                        <label class="form-label">
                            Seção
                        </label>

                        <select
                            id="modalSecao"
                            class="form-select"
                            disabled
                        >
                            <option value="">
                                Selecione
                            </option>
                        </select>

                    </div>

                    <!-- GRUPO -->
                    <div class="col-md-3">

                        <label class="form-label">
                            Grupo
                        </label>

                        <select
                            id="modalGrupo"
                            class="form-select"
                            disabled
                        >
                            <option value="">
                                Selecione
                            </option>
                        </select>

                    </div>

                    <!-- SUBGRUPO -->
                    <div class="col-md-3">

                        <label class="form-label">
                            Subgrupo
                        </label>

                        <select
                            id="modalSubgrupo"
                            class="form-select"
                            disabled
                        >
                            <option value="">
                                Selecione
                            </option>
                        </select>

                    </div>

                </div>

            </div>

            <div class="modal-footer">

                <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                >
                    Cancelar
                </button>

                <button
                    type="button"
                    id="btnSalvarAlteracao"
                    class="btn btn-success"
                >
                    Salvar
                </button>

            </div>

        </div>

    </div>

</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"></script>

<script src="assets/js/app.js"></script>

</body>
</html>