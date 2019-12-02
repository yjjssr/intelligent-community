<template>
<div>
 <remote-js src="http://at.alicdn.com/t/font_1537416_cth8yh096c.js"></remote-js>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="name"></use>
</svg>
</div>
 
</template>
<script>
export default {
  props:{
   name:String
  },
  components: {
    "remote-js": {
      render(createElement) {
        return createElement("script", {
          attrs: { type: "text/javascript", src: this.src }
        });
      },
      props: {
        src: { type: String, required: true }
      }
    }
  }
};
</script>
<style>
.icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
</style>




