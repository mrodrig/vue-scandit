import VScandit from './v-scandit.vue';

const plugin = {
  install: Vue => {
    Vue.component('VScandit', VScandit);
  }
};

component.install = plugin.install;

export default plugin

export {
  VScandit
}
