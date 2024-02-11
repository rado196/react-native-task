const rootFolder = process.env.NODE_ENV !== 'production' ? 'src' : 'dist';
require(`./${rootFolder}/index.js`);
