const axios = require('axios');
const fs = require('fs');
const path = require('path');
const fileUrls = require('./fileUrls.json')

const downloadFile = async (url) => {
  try {
    const parsedUrl = new URL(url);
    const fileName = path.basename(parsedUrl.pathname);

    const fileExtension = path.extname(parsedUrl.pathname);
    const sanitizedFileName = fileName !== fileExtension ? fileName.replace(fileExtension, '') : path.basename(parsedUrl.pathname, fileExtension);

    const downloadsFolder = path.join(__dirname, 'downloads');
    if (!fs.existsSync(downloadsFolder)) {
      fs.mkdirSync(downloadsFolder);
    }

    const downloadPath = path.join(downloadsFolder, `${sanitizedFileName}${fileExtension}`);
    const response = await axios({
      method: 'get',
      url: url,
      responseType: 'stream',
    });

    response.data.pipe(fs.createWriteStream(downloadPath));

    console.log(`Arquivo ${sanitizedFileName}${fileExtension} baixado com sucesso.`);
  } catch (error) {
    console.log('Erro ao baixar o arquivo:', error);
  }
};

const downloadAllFiles = async () => {
  const downloadPromises = fileUrls.map((url) => downloadFile(url));
  try {
    await Promise.all(downloadPromises);
    console.log('Todos os downloads foram concluídos.');
  } catch (error) {
    console.log('Erro ao baixar os arquivos:', error);
  }
};

downloadAllFiles();
