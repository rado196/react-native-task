const path = require('node:path');

module.exports = {
  apps: [
    {
      node_args: '--trace-warnings --unhandled-rejections=strict',
      env: {
        NODE_ENV: 'production',
      },
      script: path.join(__dirname, 'dist', 'index.js'),
      cwd: path.join(__dirname, 'dist'),
      watch: false,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      name: 'backend',
      instances: 1, // -1,
    },
  ],
};
