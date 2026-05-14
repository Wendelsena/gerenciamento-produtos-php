<?php

require_once '../app/config/Connection.php';

$conn = Connection::connect();

echo "Conexão realizada com sucesso, mona!";