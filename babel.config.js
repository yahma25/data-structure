// jest에서 es6 js를 import 해서 사용하기 위해 세팅

module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
    ],
  };