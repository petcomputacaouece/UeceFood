module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {  //sao os caminhos que seram encurtados
            '@assets': './src/assets',  
          //@nomeDaPasta: caminho do path dela
            '@components': './src/components',
            '@routes': './src/routes',
            '@interfaces': './src/interfaces',
            '@storage': './src/storage',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  };
};