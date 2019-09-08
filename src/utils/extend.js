import Vue from 'vue'

/*
*
* */
export function boardcast(eventName, data) {
  if(Array.isArray(this.$children)){
    this.$children.forEach(child => {
      // 子元素触发$emit
      child.$emit(eventName, data)
      if (child.$children.length) {
        // 递归调用，通过call修改this指向 child
        this.$boardcast.call(child, eventName, data)
      }
    })
  }
}

/*
*
* */
export function dispatch (eventName, data) {
  let parent = this.$parent;
  // 查找父元素
  while (parent) {
    if (parent) {
      // 父元素用$emit触发
      parent.$emit(eventName, data);
      // 递归查找父元素
      parent = parent.$parent;
    } else {
      break;
    }
  }
}

/*
*
* */

export function create(Component, props) {
  // 先创建实例
  const vm = new Vue({
    render(h) {
      // h就是createElement，它返回VNode
      return h(Component, {props})
    }
  }).$mount();

  // 手动挂载
  document.body.appendChild(vm.$el);

  // 销毁方法
  const comp = vm.$children[0];
  // comp.remove = function() {
  //   document.body.removeChild(vm.$el);
  //   vm.$destroy();
  // }
  return comp;
}
