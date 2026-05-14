<?php

require_once __DIR__ . '/../config/Connection.php';

class SecaoModel
{
    private $conn;

    public function __construct()
    {
        $this->conn = Connection::connect();
    }

    public function listarPorDepartamento($cdg_depto)
    {
        $sql = "
            SELECT
                cdg_secao,
                dcr_secao
            FROM cadsecao
            WHERE cdg_depto = :cdg_depto
            ORDER BY dcr_secao
        ";

        $stmt = $this->conn->prepare($sql);

        $stmt->bindValue(':cdg_depto', $cdg_depto);

        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}