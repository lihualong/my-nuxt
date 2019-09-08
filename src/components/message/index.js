import Notice from './notice'
import G from '../../utils'

let noticeInstance
function notice(option) {
  let _props = {duration:1.5, content:''}
  if(typeof option === 'string') {
    _props.content = option
  } else if(typeof option === 'object') {
    Object.assign(_props, option)
  } else {
    return
  }
  noticeInstance = noticeInstance || G.extend.create(Notice)
  noticeInstance.add(_props)
}


export default {
  install(Vue) {
    Vue.prototype.$notice = notice
  }
}
