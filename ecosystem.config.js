module.exports = {
  apps : [{
    name: 'esportube-web',
    script: 'server.js',
    instances: 1,
    exec_mode: 'fork',
    watch: false,
    autorestart: false,
    cron_restart: '*/20 * * * *',
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      DOMAIN_NAME: 'jpjpjp.xyz',
      REDIRECT_URL: '/'
    },
  }]
};
