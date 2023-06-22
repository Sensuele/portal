import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';


const config: webpack.Configuration = buildWebpackConfig({
  mode: 'development'
})

export default config;