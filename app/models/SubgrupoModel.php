<?php

require_once __DIR__ . '/../config/Connection.php';

class SubgrupoModel
{
    private $conn;

    public function __construct()
    {
        $this->conn = Connection::connect();
    }

    public function listarPorGrupo($cdg_grupo)
    {
        $sql = "
            SELECT
                cdg_subgrupo,
                dcr_subgrupo
            FROM cadsubgr
            WHERE cdg_grupo = :cdg_grupo
            ORDER BY dcr_subgrupo
        ";

        $stmt = $this->conn->prepare($sql);

        $stmt->bindValue(':cdg_grupo', $cdg_grupo);

        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}