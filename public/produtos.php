<?php

header('Content-Type: application/json');

require_once '../app/models/ProdutoModel.php';

$cdg_subgrupo = $_GET['cdg_subgrupo'] ?? null;

if (!$cdg_subgrupo) {

    echo json_encode([]);

    exit;
}

$model = new ProdutoModel();

$produtos = $model->listarPorSubgrupo($cdg_subgrupo);

echo json_encode($produtos);