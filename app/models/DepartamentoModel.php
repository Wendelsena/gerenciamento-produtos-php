<?php

require_once __DIR__ . '/../config/Connection.php';

class DepartamentoModel
{
    private $conn;

    public function __construct()
    {
        $this->conn = Connection::connect();
    }

    public function listar()
    {
        $sql = "
            SELECT
                cdg_depto,
                dcr_depto
            FROM caddep
            ORDER BY dcr_depto
        ";

        $stmt = $this->conn->prepare($sql);

        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}