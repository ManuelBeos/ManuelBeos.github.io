<template>
  <div id="app">
    <Header/>
    <body>
      <router-view></router-view>
    </body>
    <Footer/>
  </div>
</template>

<script>
import Header from './views/Header.vue'
import Footer from './views/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}

</script>

<style>
#app {
  font-family: Helvetica;
}
</style>
