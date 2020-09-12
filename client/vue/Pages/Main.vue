<template>
   <div>
   <section class="blue center banner">
     <div class="section__area">
        <div class="section__sm__wr m-auto text-center">
              <div class="banner__content text-white">
                <h6 class="banner__headline">Создание svg изображений</h6>
                <router-link to="form"  class="btn-beauty">Попробовать бесплатно</router-link>
             </div>
        </div>
      </div>
   </section>
   <section>
      <div class="section__area section-pd">
         <div class="section__sm__wr ">
                <div class="headline">
                          Создавайте уникальные изображения
                </div>
                <div class="section__item">
                    <div class="section__item-md section__imgwr">
                       <img alt="...."  class="section__img" src="https://static.wixstatic.com/media/028786_09ff4db64b3b4d0c9b99ff5c892025ca~mv2.jpg/v1/fill/w_436,h_284,al_c,q_80,usm_0.66_1.00_0.01/Artboard%201%20copy%203.webp">            
                    </div>
                    <div class="section__item-md text-center">
                        <div class="section__title-sm">
                           Понятный интерфейс
                        </div>
                        <div class="section__subtitle-sm">
                           Мы делаем всё, чтобы вы сразу же смогли создать качественные svg изображения
                        </div>
                    </div>
                </div>
         </div>
      </div>
   </section>

     <section>
      <div class="section__area section-pd">
         <div class="section__sm__wr ">
                <div class="headline">
                          Делитись изображениями
                </div>
                <div class="section__item flex-reverse">
                    <div class="section__item-md section__imgwr">
                       <img alt="...."  class="section__img" src="https://static.wixstatic.com/media/028786_a9d864e863f145289a7b936bd2ff9f2a~mv2.jpg/v1/fill/w_339,h_303,al_c,q_80,usm_0.66_1.00_0.01/Artboard%201%20copy%205.webp">            
                    </div>
                    <div class="section__item-md text-center">
                        <div class="section__title-sm">
                           Легко отправлять изображения
                        </div>
                        <div class="section__subtitle-sm">
                           Благодаря легкости приложения, вам будет легко деляться созданными изображениями 
                        </div>
                    </div>
                </div>
         </div>
      </div>
   </section>
    <Footer/>
   </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Footer from '../Components/Footer.vue';

export default Vue.extend({
    name:"Main",
    components:{
       Footer
    }
})
</script>