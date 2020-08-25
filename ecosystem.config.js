module.exports = {
    apps : [{
      name: "NodeTest",
      script: "/app.js",
      watch       : true,
      instances : "max",
      exec_mode : "cluster",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      }
    }]
  }