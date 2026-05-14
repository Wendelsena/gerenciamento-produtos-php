<?php

require_once __DIR__ . '/../config/Connection.php';

class ProdutoModel
{
    private $conn;

    public function __construct()
    {
        $this->conn = Connection::connect();
    }

    public function listarPorSubgrupo($cdg_subgrupo)
    {
        $sql = "
            SELECT
                p.cod_barras,
                p.descricao,
                p.variedade,
                p.embalagem,

                d.dcr_depto,
                s.dcr_secao,
                g.dcr_grupo,
                x.dcr_subgrupo,

                x.cdg_subgrupo AS id_subgrupo

            FROM cadprod p

            INNER JOIN cadsubgr x
                ON p.cdg_subgrupo = x.cdg_subgrupo

            INNER JOIN cadgrupo g
                ON x.cdg_grupo = g.cdg_grupo

            INNER JOIN cadsecao s
                ON g.cdg_secao = s.cdg_secao

            INNER JOIN caddep d
                ON s.cdg_depto = d.cdg_depto

            WHERE x.cdg_subgrupo = :cdg_subgrupo

            ORDER BY p.descricao
        ";

        $stmt = $this->conn->prepare($sql);

        $stmt->bindValue(':cdg_subgrupo', $cdg_subgrupo);

        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}