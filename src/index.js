import VList from 'components/list';
import VListItem from 'components/list-item';
const components = [VList, VListItem]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

// 自动注册组件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default install
