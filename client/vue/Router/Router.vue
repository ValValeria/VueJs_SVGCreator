<script lang="ts">
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Main from '../Pages/Main.vue';
import Router from 'vue-router'

const routes = [
    {path:"/",component:Main},
    {path:"*",redirect:"/"},
]

const router = new VueRouter({
      routes
});

Vue.use(Router)

export default router;
</script>