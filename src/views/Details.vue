<template>
  <div>
    <Details v-bind:nameCountry="nameCountry"/>
  </div>
</template>

<script>
import Details from '../components/Details'
export default {
  components:
  {
    Details
  },
  props: ['name'],
  data () {
    return {
      nameCountry: (this.name ? this.name : 'colombia')
    }
  }
}
</script>

<style>
</style>
