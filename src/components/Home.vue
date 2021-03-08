<template>
  <div>
    <div id="filters">
      <input type="text"
              v-model="search"
              v-on:keyup.enter="filterSearch"
              placeholder="Search for a country ..."/>
      <select v-model="selected" v-on:change="filterRegion()">
        <option disabled value="">Filter by Region</option>
        <option >Africa</option>
        <option >Americas</option>
        <option >Asia</option>
        <option >Europe</option>
        <option >Oceania</option>
      </select>
    </div>
    <ul>
      <li v-for="(country,index) in countries" :key="index">
          <img :src="country.flag" v-on:click="Details(country)">
          <div>
          <h3>{{country.name}}</h3>
          <p><strong>Population: </strong>
          {{new Intl.NumberFormat().format(country.population)}}</p>
          <p><strong>Region: </strong>{{country.region}}</p>
          <p><strong>Capital: </strong>{{country.capital}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {

  data () {
    return {
      countries: {},
      selected: {},
      search: ''
    }
  },
  created () {
    axios.get('https://restcountries.eu/rest/v2/all').then((result) => {
      this.countries = result.data
    })
      .catch(() => {
        alert('oops! an error has occurred')
      })
  },
  methods: {
    Details (country) {
      this.$router.push({ name: 'Details', params: { name: country.name } })
    },
    filterRegion () {
      axios.get(`https://restcountries.eu/rest/v2/region/${this.selected}`).then((result) => {
        this.countries = result.data
      })
        .catch(() => {
          alert('oops! an error has occurred')
        })
    },
    filterSearch () {
      if (this.search !== '') {
        axios.get(`https://restcountries.eu/rest/v2/name/${this.search}`).then((result) => {
          this.countries = result.data
        })
          .catch(() => {
            alert('No matches found :(')
          })
      }
    }
  }
}
</script>

<style>
#Home
{
  background: #162630;
}
body.dark #Home
{
  background: #FEFFED;
}
div
{
  background: #162630;
}
body.dark div
{
  background: #FEFFED;
}
ul{
  width:auto;
  overflow:auto;
  padding: 50px;
  margin-top: 0;
}
li{
  line-height:auto;
  float:left;
  display:inline;
  margin: 30px;
  margin-top: 0px;
  background: #273542;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.5);
  width: auto;
  max-width: 100%;
}
body.dark li
{
  background: #FFFF;
  box-shadow: 0px 2px 20px 0px #273542
}
li img {
    width: 350px;
    height: 200px;
    max-width: 100%;
    padding: 0px;
}
li div
{
  margin: 0px;
  padding: 20px;
  color: white;
  background: #273542;
}
body.dark li div
{
  background: #FFFF;
  color: black;
}
#filters
{
  margin-left: 80px;
  margin-right: 80px;
  max-width: 100%;
  width: auto;
}
input
{
  margin-top: 40px;
  width: auto;
  padding: 10px;
  background-color: #273542;
  color: white;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.5);
  border-style:solid;
  border-color: #273542;
}
body.dark input
{
  background-color: #FFFF;
  box-shadow: 0px 2px 20px 0px #273542;
  color: black;
}
select
{
  float:right;
  margin-top: 40px;
  margin-right: 28px;
  width: auto;
  padding: 10px;
  background: #273542;
  color: white;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.5);
  border-style: none;
}
body.dark select
{
  background: #FFFF;
  box-shadow: 0px 2px 20px 0px #273542;
  color: black;
}
</style>
