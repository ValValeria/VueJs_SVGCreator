
<script lang="ts">
import Vue from 'vue';
import App from './app.vue';
import router from './Router/Router.vue';

export default new Vue({
    router,
    render(h){
      return h(App);
    }
}).$mount('#app')

</script>