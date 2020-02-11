module.exports = {
  apps : [{
    name: 'API',
    script: 'reactserver.js',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : '52.66.200.233',
      ref  : 'origin/master',
      repo : 'https://github.com/visshnu-78/Jabong.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && npm run build && pm2 reload ecosystem.config.js --env production'
    }
  }
};
