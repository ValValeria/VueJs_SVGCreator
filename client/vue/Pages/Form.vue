<template>
    <section class="center bc__lgray">
     <div class="section__area">
        <div class="section__lr__wr m-auto f__gray ">
              <div class="banner__content">
                <h6 class="banner__headline text-center">Создать svg изображение</h6>
                <div class="d-flex flex-column justify-content-center section__create">
                     <div class="card shadow m_5">
                         <div class="dark">
                              <canvas id="canvas" class="svg__area"></canvas>
                         </div>
                         <div class="card-body">
                             <h5 class="card-title">Здесь ты можешь создавать svg изображения</h5>
                             <p class="card-subtitle" v-if="message.length">{{message}}</p>
                         </div>
                     </div>

                     <div class="card shadow m_5 tools">
                         <div class="card-body text-center">
                             <h5 class="card-title">Edit</h5>
                              <div>
                               <div class="card-body ">
                                  <div class="d-flex flex-column align-items-start">
                                        <h6 class="card-subtitle mb-16">Coordinates</h6>
                                        <div class="d-flex justify-content-between align-items-center w-100">
                                               <div class="input-group ml-1">
                                                     <div class="input-group-prepend">
                                                           <span class="input-group-text" id="basic-addon1">x</span>
                                                     </div>
                                                     <input type="number" class="form-control" placeholder="Username" aria-label="Username" v-model="coordinates.x" aria-describedby="basic-addon1">
                                                </div>
                                                <div class="input-group ml-1">
                                                     <div class="input-group-prepend">
                                                           <span class="input-group-text" id="basic-addon1">y</span>
                                                     </div>
                                                     <input type="number" class="form-control" placeholder="Username" aria-label="Username" v-model="coordinates.y" aria-describedby="basic-addon1">
                                                </div>
                                         </div>
                                  </div>
                               </div>
                                <div class="card-body ">
                                  <div class="d-flex  flex-wrap">
                                        <h6 class="card-subtitle mb-16">Tools</h6>
                                  </div>
                                  <div class="instr-item d-flex  flex-wrap">
                                           <div class="tools__item dark text-white"  v-for="(value,name) in tools" :key="value+Math.random()" v-on:click="typeof value=='function' && value()">
                                               <span>{{name}}</span>
                                           </div>
                                  </div>
                                  <div v-if="isText">
                                      <div class="input-group mt-1">
                                        <input type="text" class="form-control" placeholder="Type here" aria-label="Username" aria-describedby="basic-addon1" v-model="text">
                                        <div class="input-group-prepend" id="ok">
                                               <span class="input-group-text" >Ok</span>
                                        </div>
                                      </div>
                                  </div>
                             </div>
                            <div class="card-body ">
                                  <div class="d-flex flex-column align-items-start">
                                        <h6 class="card-subtitle mb-16">Color</h6>
                                        <div class="d-flex justify-content-between align-items-center w-100">
                                            <select class="form-control" id="exampleFormControlSelect1" v-bind:style="{flex:` 1 1 40%`}" v-on:change="changeColor">
                                                    <option v-bind:value="color" v-for="(color) in colors" v-bind:key="color+Math.random()">
                                                        {{color}}
                                                    </option>
                                            </select>
                                            <div v-bind:style="{backgroundColor:activeColor,flex:'1 1 60%',marginLeft:'10px'}" class="color"></div>
                                         </div>
                                  </div>
                             </div>
                             <div class="card-body">
                                  <div class="actions d-flex flex-wrap align-items-center justify-content-center">
                                      <button type="button" class="btn-green btn-dark m_5">New</button>
                                      <button type="button" class="btn-green m_5 " v-on:click="back">Back</button>
                                      <button type="button" class="btn-green btn-danger m_5 " v-on:click="download">DownLoad</button>
                                  </div>
                             </div>
                             <div class="card-body">
                                  <div class="actions d-flex flex-wrap align-items-center justify-content-center">
                                      <ul class="list " v-if="link.length" style="list-style:none"> 
                                          <li class="list-item mb-1"><a v-bind:href="link" class=" btn-beauty" download="file.svg">Click here to download the file</a></li>
                                      </ul>   
                                  </div>
                             </div>
                              </div>
                         </div>
                     </div>
                </div>
             </div>
        </div>
        
      </div>
   </section>
</template>

<script lang="js">
import Vue from 'vue'
export default Vue.extend({
    name:"Form",
    data:function(){
        return {
            tools:{
                "Line":this.drawLine,
                "Circle":this.drawCircle,
                "Text":this.drawText,
            },
            colors:[
                '#ffbe76','#686de0','#c7ecee'
            ],
            activeColor:'#ffbe76',
            coordinates:{
                x:50,y:50,
            },
            isText:false,
            text:"",
            isLocked:false,
            link:"",
            message:"",
            context:{},
            canvas:{}
        }
    },
    methods:{
        draw(){
            this.context.shadowColor = "rgba(128,128,128,.2)";
            this.context.shadowBlur = 1;
            this.context.lineCap = 'round';
            this.context.lineJoin = 'round';
            this.context.lineWidth = 1;
            this.context.strokeStyle = 'gray';
        },
        drawLine(){
            this.message = "Кликните по экрану раз мышкой, чтобы указать конец линии";

            this.canvas.parentElement.addEventListener('click',(e)=>{
                this.draw();
                this.context.moveTo(this.coordinates.x,this.coordinates.y);
                this.context.lineTo(e.clientX,e.clientY);
                this.context.stroke();
                console.log(e)
            })

        },
        changeColor(e){
            this.activeColor=e.target.value;
        },
        drawCircle(){
            this.draw();
            this.context.fillStyle=this.activeColor;
            this.context.lineWidth = 1.25;
            this.context.beginPath();
            this.context.arc(this.coordinates.x,this.coordinates.y,40,0, 2 * Math.PI);
            this.context.fill();
            this.context.stroke();
        },
        drawText(){
            this.isText = true;

            this.$nextTick(()=>{
              document.querySelector('#ok').onclick = ()=>{
                this.context.font="30px Arial";
                this.draw();
                this.context.fillText(this.text,this.coordinates.x,this.coordinates.y);
                this.isText = false;
              }}
            )
        },
        back(){
           this.canvas.restore();
        },
        moveItem(e){
           this.$nextTick(()=>{
               if(this.isLocked){
                 this.coordinates.y=e.screenY-e.clientY;
                 this.coordinates.x=e.screenX-e.clientX;
               }
           })
        },

        mouseup(){
            this.isLocked = false;
        },
        download(e){
            this.$nextTick(()=>{
                
            })
        }
    },
    mounted:function name(params) {
        this.$nextTick(()=>{
            this.context = document.querySelector('#canvas').getContext('2d');
            this.canvas =  document.querySelector('#canvas');
        })
    }
})
</script>