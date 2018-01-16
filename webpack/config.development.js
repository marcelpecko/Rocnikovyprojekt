import webpack from 'webpack'
import ReloadPlugin from 'reload-html-webpack-plugin'

export default {
  devtool: 'cheap-eval-source-map',
  plugins: [
    new ReloadPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
}
