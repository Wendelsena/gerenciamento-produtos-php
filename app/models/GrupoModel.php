<?php

require_once __DIR__ . '/../config/Connection.php';

class GrupoModel
{
    private $conn;

    public function __construct()
    {
        $this->conn = Connection::connect();
    }

    public function listarPorSecao($cdg_secao)
    {
        $sql = "
            SELECT
                cdg_grupo,
                dcr_grupo
            FROM cadgrupo
            WHERE cdg_secao = :cdg_secao
            ORDER BY dcr_grupo
        ";

        $stmt = $this->conn->prepare($sql);

        $stmt->bindValue(':cdg_secao', $cdg_secao);

        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}