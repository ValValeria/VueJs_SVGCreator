<script lang="ts">
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Main from '../Pages/Main.vue';
import Router from 'vue-router'
import Form from '../Pages/Form.vue';

const routes = [
    {path:"/",component:Main},
    {path:"/form",component:Form},
    {path:"*",redirect:"/"},
]

const router = new VueRouter({
      routes
});

Vue.use(Router)

export default router;
</script>