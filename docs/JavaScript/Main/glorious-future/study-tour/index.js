$(".textWrapper").animate({opacity:"0.99"},1543),Vue.config.devtools=!0,"Apple Computer, Inc."==navigator.vendor?Vue.component("card",{template:`
    <div class="card-wrap"
      @mousemove="handleMouseMove"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      ref="card">
      <div class="card"
        :style="cardStyle">
        <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
        <div class="card-info">
          <slot name="header"></slot>
          <slot name="content"></slot>
        </div>
      </div>
    </div>`,mounted(){this.width=this.$refs.card.offsetWidth,this.height=this.$refs.card.offsetHeight},props:["dataImage"],data:()=>({width:0,height:0,mouseX:0,mouseY:0,mouseLeaveDelay:null}),computed:{mousePX(){return this.mouseX/this.width},mousePY(){return this.mouseY/this.height},cardStyle(){return{transform:`rotateY(${0}deg) rotateX(${0}deg)`}},cardBgTransform(){return{transform:`translateX(${0}px) translateY(${0}px)`}},cardBgImage(){return{backgroundImage:`url(${this.dataImage})`}}},methods:{handleMouseMove(a){this.mouseX=a.pageX-this.$refs.card.offsetLeft-this.width/2,this.mouseY=a.pageY-this.$refs.card.offsetTop-this.height/2},handleMouseEnter(){clearTimeout(this.mouseLeaveDelay)},handleMouseLeave(){this.mouseLeaveDelay=setTimeout(()=>{this.mouseX=0,this.mouseY=0},1e3)}}}):Vue.component("card",{template:`
    <div class="card-wrap"
      @mousemove="handleMouseMove"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      ref="card">
      <div class="card"
        :style="cardStyle">
        <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
        <div class="card-info">
          <slot name="header"></slot>
          <slot name="content"></slot>
        </div>
      </div>
    </div>`,mounted(){this.width=this.$refs.card.offsetWidth,this.height=this.$refs.card.offsetHeight},props:["dataImage"],data:()=>({width:0,height:0,mouseX:0,mouseY:0,mouseLeaveDelay:null}),computed:{mousePX(){return this.mouseX/this.width},mousePY(){return this.mouseY/this.height},cardStyle(){const a=30*this.mousePX,b=-30*this.mousePY;return{transform:`rotateY(${a}deg) rotateX(${b}deg)`}},cardBgTransform(){const a=-40*this.mousePX,b=-40*this.mousePY;return{transform:`translateX(${a}px) translateY(${b}px)`}},cardBgImage(){return{backgroundImage:`url(${this.dataImage})`}}},methods:{handleMouseMove(a){this.mouseX=a.pageX-this.$refs.card.offsetLeft-this.width/2,this.mouseY=a.pageY-this.$refs.card.offsetTop-this.height/2},handleMouseEnter(){clearTimeout(this.mouseLeaveDelay)},handleMouseLeave(){this.mouseLeaveDelay=setTimeout(()=>{this.mouseX=0,this.mouseY=0},1e3)}}});const app=new Vue({el:"#app"});$("#harvard-modal").click(function(a){a.preventDefault(),ModalInAdd("#modal-container1")}),$("#tufts-modal").click(function(a){a.preventDefault(),ModalInAdd("#modal-container2")}),$("#ymca-modal").click(function(a){a.preventDefault(),ModalInAdd("#modal-container3")}),$("#elc-modal").click(function(a){a.preventDefault(),ModalInAdd("#modal-container4")}),$("#modal-container1, #modal-container2, #modal-container3, #modal-container4").click(function(){ModaloutRemove(this)});function ModalInAdd(a){$(a).addClass("six"),$("body").addClass("modal-active")}function ModaloutRemove(a){$(a).addClass("out"),setTimeout(function(){$(a).removeClass("six out"),$("body").removeClass("modal-active")},501)}
/* Copyright 2020 PI. All rights reserved. */