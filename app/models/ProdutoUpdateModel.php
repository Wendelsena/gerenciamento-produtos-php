<?php

require_once __DIR__ . '/../config/Connection.php';

class ProdutoUpdateModel
{
    private $conn;

    public function __construct()
    {
        $this->conn = Connection::connect();
    }

    public function atualizarProdutos(
        $produtos,
        $subgrupo
    ) {

        try {

            $this->conn->beginTransaction();

            $placeholders = implode(
                ',',
                array_fill(
                    0,
                    count($produtos),
                    '?'
                )
            );

            $sql = "
                UPDATE cadprod
                SET cdg_subgrupo = ?
                WHERE cod_barras IN ($placeholders)
            ";

            $stmt = $this->conn->prepare($sql);

            $params = array_merge(
                [$subgrupo],
                $produtos
            );

            $stmt->execute($params);

            $this->conn->commit();

            return [
                'success' => true
            ];

        } catch (Exception $e) {

            $this->conn->rollBack();

            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
    }
}