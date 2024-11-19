const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api": {
        target: "https://ucsazjrbe0.execute-api.us-east-1.amazonaws.com",
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    },
  },
});
