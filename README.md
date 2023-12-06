## Projeto de Lista de URLs para Downloads Automáticos

## Descrição

Este projeto tem como objetivo criar uma ferramenta em Node.js que permite baixar arquivos a partir de uma lista de URLs de forma automática.

## Funcionalidades

- **Baixar Arquivos Automáticos:** O projeto utiliza o Node.js e a biblioteca Axios para baixar arquivos a partir de URLs fornecidas.

- **Gerenciamento de Downloads:** As URLs são baixadas e salvas em uma pasta específica, permitindo o download e organização dos arquivos baixados.

## Estrutura do Projeto

O projeto é composto por:

- **Arquivo `index.js`:** Contém o código principal para baixar.

- **Arquivo `fileUrls.json`:**  lista das URLs.

- **Pasta `downloads`:** Local onde os arquivos baixados são armazenados.

## Instruções de Uso

1. Clone ou faça o download deste repositório.
2. Instale as dependências com `yarn`.
3. Adicione as URLs desejadas no array `fileUrls` no arquivo `fileUrls.json`.
4. Execute `yarn dev ou node index.js`.