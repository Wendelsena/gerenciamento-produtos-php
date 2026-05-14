<?php

require_once '../app/models/GrupoModel.php';

$cdg_secao = $_GET['cdg_secao'] ?? null;

if (!$cdg_secao) {

    echo json_encode([]);

    exit;
}

$model = new GrupoModel();

$grupos = $model->listarPorSecao($cdg_secao);

header('Content-Type: application/json');

echo json_encode($grupos);