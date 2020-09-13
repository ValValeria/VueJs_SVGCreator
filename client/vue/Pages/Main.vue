<template>
   <div>
   <Header/>
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
                    <div class="section__item-md section__imgwr center">
                       <img alt="...."  class="section__img section__img-row" src="https://static.wixstatic.com/media/028786_09ff4db64b3b4d0c9b99ff5c892025ca~mv2.jpg/v1/fill/w_436,h_284,al_c,q_80,usm_0.66_1.00_0.01/Artboard%201%20copy%203.webp">            
                    </div>
                    <div class="section__item-md d-flex text-center align-items-center justify-content-center flex-column">
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
         <div class="section__lr__wr ">
                <div class="headline">
                          Делитись изображениями
                </div>
                <div class="section__item flex-column-reverse align-items-center justify-content-center">
                    <div class="section__item-md section__imgwr pt-4 w-100">
                       <img alt="...."  class="section__img w-100 object-fit-contain" src="https://static.wixstatic.com/media/028786_fe82c823e17647ccba1dad8aff694ed4~mv2.jpg/v1/fill/w_404,h_251,al_c,q_80,usm_0.66_1.00_0.01/Artboard%201%20copy%207.webp">            
                    </div>
                    <div class="section__item-md text-center align-items-center w-100">
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
    <section class="advantages">
      <div class=" section__area section-pd">
         <div class="section__lr__wr ">
                <div class="headline text-white">
                          Почему мы? 
                </div>
                <div class="section__item">
                   <ul class="text-white text-center">
                      <li>
                          <div class="item__img">
                             <img src="/public/img/prosto.svg" alt="" srcset="">
                          </div>
                          <p>Просто</p>
                      </li>
                      <li>
                         <div class="item__img">
                            <img src="/public/img/dostupno.svg" alt="" srcset="">
                         </div>
                         <p>Доступно</p>
                      </li>
                      <li>
                         <div class="item__img">
                            <img src="/public/img/key-feature-01.svg" alt="" class=""/>
                         </div>
                         <p>Интересно</p>
                      </li>
                   </ul>
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
import Header from '../Components/Header.vue'

export default Vue.extend({
    name:"Main",
    components:{
       Footer,
       Header
    }
})
</script>