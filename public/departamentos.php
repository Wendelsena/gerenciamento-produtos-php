<?php

require_once '../app/models/DepartamentoModel.php';

$model = new DepartamentoModel();

$departamentos = $model->listar();

header('Content-Type: application/json');

echo json_encode($departamentos);