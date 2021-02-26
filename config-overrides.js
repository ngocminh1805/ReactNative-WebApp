module.exports = module.exports = function override(config) {
  config.module.rules.push(
    {
      test: /\.(js?)$/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.(png|jpg|gif)$/i,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
    },
  );

  return config;
};
