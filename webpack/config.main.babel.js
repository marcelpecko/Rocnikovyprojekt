import baseConfig from './config.base.js'
import merge from 'webpack-merge'

console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`)
console.log(`Using config: ./config.${process.env.NODE_ENV}.js`)
export default merge({}, baseConfig, require(`./config.${process.env.NODE_ENV}.js`).default)
