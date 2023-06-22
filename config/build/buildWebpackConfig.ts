import path from "path";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";
import webpack from 'webpack';

export function buildWebpackConfig(opetions: BuildOptions): webpack.Configuration {
    return {
        mode: 'development',
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: {
            filename: '[name].[contenthash].js',
            path: path.resolve(__dirname, 'build'),
            clean: true
        },
        plugins: buildPlugins(),
        module: {
            rules: buildLoaders(),
          },
        resolve: buildResolvers()
      };
}