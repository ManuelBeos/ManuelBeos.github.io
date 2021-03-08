<template>
  <div>
      <section>
        <button id="buttonBack" v-on:click="Back"
        type="button">⬅ Back</button>
      </section>

      <section>
        <img id="imageCountryDetail" :src="infoCountry.flag">

        <section id="information">
            <h2>{{infoCountry.name}}</h2>
            <p><strong>Native name :</strong>{{infoCountry.nativeName}}</p>
            <p><strong>Population :</strong>{{new Intl.NumberFormat().format(infoCountry.population)}}</p>
            <p><strong>Region :</strong>{{infoCountry.region}}</p>
            <p><strong>Sub Region :</strong>{{infoCountry.subregion}}</p>
            <p><strong>Capital :</strong>{{infoCountry.capital}}</p>
            <p><strong>Top Level Domain :</strong>{{infoCountry.topLevelDomain ? infoCountry.topLevelDomain.join() : ''}}</p>
            <p><strong>Currencies :</strong>{{arrayJsonToStr( infoCountry.currencies)}}</p>
            <p><strong>Languages :</strong>{{arrayJsonToStr( infoCountry.languages)}}</p>
            <p>Border countries: </p>
            <button type="button" v-for="(country,index) in infoCountry.borders" :key="index" v-on:click="borderCountry(country)">
              {{country}}
            </button>
          </section>
      </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      infoCountry: {}
    }
  },
  created () {
    axios.get(`https://restcountries.eu/rest/v2/name/${this.nameCountry}`).then((result) => {
      this.infoCountry = result.data[0]
    })
      .catch(() => {
        alert('oops! an error has occurred')
      })
  },
  methods:
  {
    Back () {
      this.$router.push('home')
    },
    arrayJsonToStr (arr) {
      if (typeof arr !== 'undefined') {
        var arrstr = []
        for (var i = 0; i < arr.length; i++) {
          arrstr[i] = arr[i].name
        }
        return arrstr.join()
      }
    },
    borderCountry (countryCode) {
      axios.get(`https://restcountries.eu/rest/v2/alpha/${countryCode}`).then((result) => {
        this.infoCountry = result.data
        console.log(result.data)
      })
        .catch(() => {
          alert('oops! an error has occurred')
        })
    }
  },
  props: ['nameCountry']
}
</script>

<style>
div{
  width: auto;
  height: auto;
}
#buttonBack
{

  margin-left: 80px;
  margin-top: 40px;
  size: 20px;
  padding: 8px;
  width: 100px;
  height: auto;
  color: white;
  background: #273542;
  border: #273542;
  border-style: none;
  border-radius: 5px;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.5);

}
body.dark #buttonBack
{
  background: #FFFF;
  color: black;
  box-shadow: 0px 2px 20px 0px #273542
}
#imageCountryDetail
{
  display: inline-block;
  margin-left: 80px;
  margin-top: 80px;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  border-style: none;
  height: auto;
  width: auto;
  max-width: 40%;
  min-height: 500px;
}
body.dark #imageCountryDetail
{
  box-shadow: 0px 2px 20px 0px #273542
}
#information
{
  float: right;
  margin-right: 30%;
  margin-top: 100px;
  color: white;
  max-width: 20%;
}
body.dark #information
{
  color: black;
}
#information button
{
  margin: 10px;
  padding: 10px;
  height: auto;
  color: white;
  background: #273542;
  border: #273542;
  border-style: none;
  border-radius: 5px;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.5);
}
body.dark #information button
{
  color: black;
  background: #FFFF;
  box-shadow: 0px 2px 20px 0px #273542
}
</style>
