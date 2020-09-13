<template>
    <section class="center bc__lgray">
     <div class="section__area">
        <div class="section__lr__wr m-auto f__gray ">
              <div class="section__arrow" v-on:click="backHome">
                  <svg width="2.5em" height="2.5em" viewBox="0 0 16 16" class="bi bi-arrow-left-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"/>
                 </svg>
              </div>
              <div class="banner__content">
                <h6 class="banner__headline text-center">Создать svg изображение</h6>
                <div class="d-flex flex-column justify-content-center section__create">
                     <div class="card shadow m_5">
                         <div v-bind:class="'svg__area'" v-bind:style="{backgroundColor:backgroundColor}">
                              <svg width="100%" height="100%" style="min-height:40vh" id="svg">
                                  <g v-for="(item,index) in elems" :key="item+Math.random()" v-html="item" v-bind:data-id="index">
                                  </g>
                              </svg>
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

                              <div class="card-body ">
                                  <div class="d-flex flex-column align-items-start">
                                        <h6 class="card-subtitle mb-16">Background Color</h6>
                                        <div class="d-flex justify-content-between align-items-center w-100">
                                            <select class="form-control" id="exampleFormControlSelect1" v-bind:style="{flex:` 1 1 40%`}" v-on:change="changeBackgroundColor">
                                                    <option v-bind:value="color" v-for="(color) in colors" v-bind:key="color+Math.random()">
                                                        {{color}}
                                                    </option>
                                            </select>
                                            <div v-bind:style="{backgroundColor:backgroundColor,flex:'1 1 60%',marginLeft:'10px'}" class="color"></div>
                                         </div>
                                         
                                  </div>
                             </div>
                              <div class="card-body ">
                                  <div class="d-flex flex-column align-items-start">
                                        <h6 class="card-subtitle mb-16">Settings</h6>
                                        <div class="d-flex justify-content-between align-items-center w-100">
                                           <div class="form-check">
                                                 <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" v-model="showcoordinates">
                                                 <label class="form-check-label" for="defaultCheck1" >
                                                    Show coordinates on canvas
                                                 </label>
                                           </div>
                                         </div>
                                  </div>
                             </div>
                             <div class="card-body">
                                  <div class="actions d-flex flex-wrap align-items-center justify-content-center">
                                      <button type="button" class="btn-green btn-dark m_5" v-on:click="newcanvas">New</button>
                                      <button type="button" class="btn-green m_5 " v-on:click="back">Back</button>
                                      <button type="button" class="btn-green btn-danger m_5 " v-on:click="download">DownLoad</button>
                                  </div>
                             </div>
                             <div class="card-body">
                                  <div class="actions d-flex flex-wrap align-items-center justify-content-center">
                                      <ul class="list " v-if="link.length" style="list-style:none"> 
                                          <li class="list-item mb-1"><a v-bind:href="link" class=" btn-beauty" download="image.svg">Click here to download the file</a></li>
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
import Vue from 'vue';
import _ from 'lodash'

export default Vue.extend({
    name:"Form",
    data:function(){
        return {
            tools:{
                "Line":this.drawLine,
                "Circle":this.drawCircle,
                "Text":this.drawText,
                "Rect":this.drawRect,
                "Polygon":this.drawPolygon,
                "Image":this.drawImage
            },
            colors:[
                '#ffbe76','#686de0','#c7ecee','#feca57','#ff6b6b','#54a0ff','#5f27cd','#8395a7','#333','#c8d6e5'
            ],
            activeColor:'#ffbe76',
            elems:[],
            coordinates:{
                x:50,y:50,
            },
            isText:false,
            text:"",
            isLocked:false,
            link:"",
            message:"",
            showcoordinates:true,
            backgroundColor:'#333',
            str:"",
            imageType:"image/png"
        }
    },
    methods:{
        drawLine(){
            this.coordinates.y=50 + Number(this.coordinates.y);
            this.elems.push(
                 ` <path stroke="${this.activeColor}" stroke-width="5" d="M${this.coordinates.x} ${this.coordinates.y} l215 0" />
                 `
            )
        },
        changeColor(e){
            this.activeColor=e.target.value;
        },
        drawCircle(){
            this.coordinates.y=50 + Number(this.coordinates.y);
            this.elems.push(
                `<circle cx="${this.coordinates.x}" cy="${this.coordinates.y}" r="40"  fill="${this.activeColor}" />`
            )
        },
        drawText(){
            this.isText = true;

            this.$nextTick(()=>{
              this.coordinates.x=50 + Number(this.coordinates.x);

              document.querySelector('#ok').onclick = ()=>{
                this.elems.push(
                `  <text x="${this.coordinates.x}" y="${this.coordinates.y}" fill="${this.activeColor}">${this.text}</text>`
                );
                this.isText = false;
              }}
            )
        },

        drawRect(){
            this.elems.push(`
            <rect width="200" height="200" fill="${this.activeColor}" x="${this.coordinates.x}" y="${this.coordinates.y}"/>
            `)
        },
        drawPolygon(){
            const points = [this.coordinates.x,this.coordinates.y];

            const buildPoinst = (points)=>{
                  let str = _.chunk(points,2).reduce((prev,item,index,array)=>{
                        let str = prev.concat(item.join(' '));
                        if(index!==array.length-1){
                           str+=','
                        }
                        return str;
                  },'');
                  this.elems.push(`
                      <polygon points="${str}" fill="${this.activeColor}" />
                 `)
            }

            document.querySelector('#svg').onmousedown =(e)=>{
                points.push(e.clientX,e.clientY);
                buildPoinst(points);
            }

            this.message = "Отметь точки на конвасе"
        },

        drawImage(){
            this.message =  'Вставьте жилаемое изображение';
            this.isImage = true;
            this.showcoordinates = false;

            window.addEventListener("paste", (e)=>{
                const data = _.last(e.clipboardData.items);
                const blob = data.getAsFile();
                const url = window.URL.createObjectURL(blob);

                if(data.type.includes('image/')){
                   this.elems.push(`
                     <image xlink:href="${url}" x="${this.coordinates.x}" y="${this.coordinates.y}" height="100" width="100" />    
                   `)
                   this.imageType = data.type;
                }
                this.isImage = false;
            },false);

        },
        back(){
           this.elems.splice(this.elems.length-1,1)
        },
        backHome(){
           window.location.replace('/')
        },
        download(e){
            this.$nextTick(()=>{
                 const index = this.elems.indexOf(this.str);

                 if(~index) {
                     this.elems.splice(this.elems.indexOf(this.str),1);
                 }

                 const string = `
                 <svg  xmlns="http://www.w3.org/2000/svg" 
     xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox='0 0 1920 762' fill='${this.backgroundColor}'>
                  ${this.elems.join('')}
                 </svg>
                 `;
                 console.log(string)
                 const url = URL.createObjectURL(new Blob([string],{type:"image/svg+xml"}));
                 this.link = url;
            })
        },
        newcanvas(){
            this.elems=[];
        },
        changeBackgroundColor(e){
            this.backgroundColor=e.target.value;
        }
    },
    mounted:function name(params) {
        this.$nextTick(()=>{
            const svg = document.querySelector('#svg');
            this.str = ``;
            let drawLineuka = _.debounce((e)=>{
                  
                  let indexof = this.elems.indexOf(this.str)

                  if(~indexof) this.elems.splice(indexof,1);

                  if(!this.showcoordinates) {
                      return false;
                  }

                  this.str = `
                     <path d="M${e.layerX} 0 V${e.layerY} H0 "
                    stroke-width="2" stroke="#74b9ff" fill="none"  stroke-dasharray="2 2"/>
                  `;  

                  this.elems.push(this.str);

                  this.message = `Your current position is (${e.layerX},${e.layerY}). Click two times to set coordinates`
            },20);

            svg.addEventListener('mousemove', drawLineuka);

            svg.ondblclick = (e)=>{
                Object.assign(this.coordinates,{x:e.layerX,y:e.layerY})
            }
            })
    }
})
</script>