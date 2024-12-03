module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',  // Asegura la compatibilidad con Expo
      '@babel/preset-env',  // Transpila el código ES6+
      '@babel/preset-react', // Transpila JSX
      '@babel/preset-typescript',  // Transpila TypeScript (si es aplicable)
    ],
    plugins: [
      ['@babel/plugin-proposal-class-properties', { loose: true }],  // Asegura que 'loose' esté activado
      ['@babel/plugin-transform-private-methods', { loose: true }],  // Asegura que 'loose' esté activado
      ['@babel/plugin-transform-private-property-in-object', { loose: true }], // Asegura que 'loose' esté activado
      '@babel/plugin-transform-runtime', // Este plugin generalmente no tiene problemas con "loose"
    ],
  };
};
