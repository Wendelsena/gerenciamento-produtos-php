<?php

header('Content-Type: application/json');

require_once '../app/models/ProdutoUpdateModel.php';

$dados = json_decode(
    file_get_contents('php://input'),
    true
);

$produtos = $dados['produtos'] ?? [];
$subgrupo = $dados['subgrupo'] ?? null;

if (
    empty($produtos)
    || !$subgrupo
) {

    echo json_encode([
        'success' => false,
        'message' => 'Dados inválidos'
    ]);

    exit;
}

$model = new ProdutoUpdateModel();

$resultado = $model->atualizarProdutos(
    $produtos,
    $subgrupo
);

echo json_encode($resultado);