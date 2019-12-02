<template>
  <div>
    <template v-if="!$route.meta.public"><Dashboard></Dashboard></template>
    <template v-else>
      <transition>
        <keep-alive>
          <router-view :key="$route.fullpath"></router-view>
        </keep-alive>
      </transition>
    </template>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Dashboard from "@/views/Dashboard";
export default {
  components: {
    Dashboard
  },
  name: "app"
};
</script>


