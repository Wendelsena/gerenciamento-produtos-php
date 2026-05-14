<?php

require_once '../app/models/SubgrupoModel.php';

$cdg_grupo = $_GET['cdg_grupo'] ?? null;

if (!$cdg_grupo) {

    echo json_encode([]);

    exit;
}

$model = new SubgrupoModel();

$subgrupos = $model->listarPorGrupo($cdg_grupo);

header('Content-Type: application/json');

echo json_encode($subgrupos);