<template>
  <header>
    <div>
      <h4 v-on:click="darkMode">🌙 Dark Mode</h4>
      <h3>Where is the world ?</h3>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    darkMode () {
      document.body.classList.toggle('dark')
    }
  }
}
</script>

<style>
header {
  background-color: #273542;
  padding: 10px;
  height: 50px;
  text-align: left;
  color: white;
}
body.dark header
{  background-color: #FFFF;
  color:black
}

header div{
  display: inline;
  background-color: #273542;
}

body.dark div
{  background-color: #FEFFED;
}

header h3{
  margin-left: 80px;
  background: #273542;
}
body.dark h3{
  background: #FFFF;
}
header h4{
  float: right;
  margin-right: 80px;
  background: #273542;
}
body.dark h4{
  background: #FFFF;
}
</style>
