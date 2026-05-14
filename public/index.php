<?php

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gerenciamento de Produtos</title>

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- CSS -->
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

<div class="container mt-5">

    <h2 class="mb-4">Gerenciamento de Produtos</h2>

    <div class="card p-4 shadow-sm">

        <div class="row g-3">

            <!-- Departamento -->
            <div class="col-md-3">
                <label class="form-label">Departamento</label>

                <select id="departamento" class="form-select">
                    <option value="">Selecione</option>
                </select>
            </div>

            <!-- Seção -->
            <div class="col-md-3">
                <label class="form-label">Seção</label>

                <select id="secao" class="form-select" disabled>
                    <option value="">Selecione</option>
                </select>
            </div>

            <!-- Grupo -->
            <div class="col-md-3">
                <label class="form-label">Grupo</label>

                <select id="grupo" class="form-select" disabled>
                    <option value="">Selecione</option>
                </select>
            </div>

            <!-- Subgrupo -->
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
        </div>

    </div>

    <!-- GRID -->
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

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"></script>

<script src="assets/js/app.js"></script>

</body>
</html>