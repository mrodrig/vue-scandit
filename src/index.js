import component from './v-scandit.vue'

const plugin = {
  install: Vue => {
    Vue.component(component.name, component)
  }
};

component.install = plugin.install;

export default component;