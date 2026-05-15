# Sistema de Gerenciamento de Produtos

Aplicação web desenvolvida em PHP + PostgreSQL para gerenciamento de produtos com filtros hierárquicos e atualização em lote.

---

## Objetivo do Projeto

O sistema permite:

- Filtrar produtos por:
  - Departamento
  - Seção
  - Grupo
  - Subgrupo

- Listar produtos relacionados ao subgrupo selecionado
- Selecionar múltiplos produtos
- Alterar o subgrupo dos produtos selecionados
- Executar atualização utilizando transação no PostgreSQL

---

## Tecnologias Utilizadas

- PHP 8
- PostgreSQL
- JavaScript Vanilla
- Bootstrap 5
- HTML5
- CSS3

---

## Estrutura do Projeto

```text
gerenciador-produtos/
│
├── app/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   └── services/
│
├── public/
│   ├── api/
│   └── assets/
│
└── README.md
```

---

## Banco de Dados

### Configuração

Arquivo:

```php
app/config/database.php
```

Exemplo:

```php
return [

    'host' => '192.168.15.250',
    'port' => '5432',
    'dbname' => 'bd_monteiro',
    'user' => 'postgres',
    'password' => 'admpostgres'

];
```

---

## Funcionalidades

### Filtros Hierárquicos

O sistema possui filtros dependentes:

1. Departamento
2. Seção
3. Grupo
4. Subgrupo

Cada filtro só é habilitado após seleção do anterior.

---

### Pesquisa de Produtos

Após selecionar o subgrupo:

- os produtos são carregados em grid
- cada item possui checkbox
- múltiplos produtos podem ser selecionados

---

### Alteração em Lote

Ao clicar em "Alterar":

- um modal é aberto
- o usuário escolhe um novo subgrupo
- os produtos selecionados são atualizados

---

### Transação PostgreSQL

O update dos produtos é executado dentro de transaction:

- BEGIN
- COMMIT
- ROLLBACK

Garantindo integridade dos dados.

---

## Como Executar o Projeto

### 1. Clonar repositório

```bash
git clone URL_DO_REPOSITORIO
```

---

### 2. Entrar na pasta

```bash
cd gerenciador-produtos
```

---

### 3. Iniciar servidor PHP

```bash
php -S localhost:8000 -t public
```

---

### 4. Acessar no navegador

```text
http://localhost:8000
```

---

## Melhorias Futuras

- Paginação
- Busca por descrição
- Login/autenticação
- Toasts de notificação
- Loader durante requisições
- Refatoração para MVC completo
- API REST
- Docker
- Composer
- Tratamento global de erros

---

## Autor

Wendel Gabriel da Silva Sena