module.exports = {
  reactStrictMode: true,
  basePath: '/products',
  webpack(config, options) {
    config.module.rules.push({
      test: /_app.js/,
      loader: "./lib/federation-loader.js",
    });
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        remoteType: "var",
        remotes: {
          homeApp: "homeApp",
          growlers: "growlers",
        },
        shared: {
          react: {
            // Notice shared ARE eager here.
            eager: true,
            singleton: true,
            requiredVersion: false,
          },
        },
      })
    );

    
    return config;
  },
}
