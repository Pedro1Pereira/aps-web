#Descrição Banco

Table venda
id,
criado_em,
id_funcionario,
id_cliente,
valor,
id_pagamento

Table funcionario
id,
criado_em,
matricula,
CPF,
nome,
endereco,
cidade,
estado,
telefone,
telefone_celular,
e-mail,
admin


Table cliente
id,
criado_em,
CPF,
nome,
endereco,
cidade,
estado,
telefone, 
e-mail

Table produto
id,
criado_em,
codigo_barras,
nome,
descricao,
fabricante,
id_fornecedor,
id_categoria,
preco,
em_estoque

Table categoria_produto
id,
criado_em,
descricao

Table venda_item
id,
criado_em,
id_venda,
id_produto,
quantidade,
preco_total


Table fornecedor
id,
criado_em,
CNPJ, 
nome_fantasia,
razao_social,
endereco,
cidade,
estado,
telefone,
e-mail,
fabricantes