<?php

header('Content-Type: application/json');

require_once '../app/models/SecaoModel.php';

$cdg_depto = $_GET['cdg_depto'] ?? null;

if (!$cdg_depto) {

    echo json_encode([]);

    exit;
}

$model = new SecaoModel();

$secoes = $model->listarPorDepartamento($cdg_depto);

echo json_encode($secoes);