/*
 * @Author: your name
 * @Date: 2020-06-09 14:11:03
 * @LastEditTime: 2020-09-15 10:40:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_new_nurses_station\react_medical_dvice_management\.umirc.ts
 */

// ref: https://umijs.org/config/
import { IConfig } from 'umi-types';
import { resolve } from "path";

const config: IConfig = {
  hash: true,
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: '组件集合',
      dll: false,

      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  theme: './src/utils/theme.js',
  disableCSSModules: true,
  alias: {
    api: resolve(__dirname, './src/services/'),
    components: resolve(__dirname, './src/components'),
    containers: resolve(__dirname, './src/containers'),
    models: resolve(__dirname, './src/models'),
    services: resolve(__dirname, './src/services'),
    utils: resolve(__dirname, './src/utils'),
    assets: resolve(__dirname, './src/assets'),
  },
  proxy: {
    // '/api': {
    //   target: 'http://192.168.150.11:29900/',
    //   // target: 'http://192.168.150.66:7300/',
    //   changeOrigin: true,
    //   pathRewrite: { '^/api': '/' },
    // },
    '/drugapi': {
      target: 'http://192.168.150.13:8061/',
      changeOrigin: true,
      pathRewrite: { '^/drugapi': '/' },
    },
  },
}
export default config