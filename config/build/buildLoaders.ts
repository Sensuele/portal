import webpack from 'webpack';

export function buildLoaders(): webpack.RuleSetRule[] {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const vueLoader = {
        test: /\.vue$/i,
        exclude: /(node_modules)/,
        use: {
          loader: "vue-loader",
        },
      }

    return [
        typescriptLoader,
        vueLoader
    ]
}