import webpack from 'webpack'
import BabiliPlugin from 'babili-webpack-plugin'
import CompressionPlugin from 'compression-webpack-plugin'

export default {
  plugins: [
    new BabiliPlugin({}),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0,
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
  devtool: 'cheap-module-source-map',
}
