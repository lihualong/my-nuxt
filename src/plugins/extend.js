import G from '../utils'
import Vue from 'vue'
/*
*  事件全局处理 使用vue的on off once emit, 事件名称最好是全局定义
* */
Vue.prototype.$bus = new Vue()

/*
*
* */
Vue.prototype.$boardcast = G.extend.boardcast

/*
*
* */
Vue.prototype.$dispatch = G.extend.dispatch
