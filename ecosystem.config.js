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
      host : '13.127.160.27',
      ref  : 'origin/master',
      repo : 'git@github.com:visshnu-78/Jabong.git',
      path : '/var/www/production',
      'post-deploy' : 'sudo npm install && sudo npm run build && pm2 reload ecosystem.config.js --env production'
    }
  }
};
