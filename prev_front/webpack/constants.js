const path = require('path')

export const APP_TITLE = 'Stranka na obedy'
export const APP_DIR = path.join(__dirname, '..')
export const SRC_DIR = path.join(APP_DIR, 'src')
export const NODE_DIR = path.join(APP_DIR, 'node_modules')
export const ASSETS_DIR = path.join(APP_DIR, 'assets')

export default {
  APP_TITLE, APP_DIR, SRC_DIR, NODE_DIR, ASSETS_DIR,
}
