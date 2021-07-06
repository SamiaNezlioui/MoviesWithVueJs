<template>

  <div id="app">
   
<Header />

<div v-if="$route.path =='/'">
  
    <h1 id="title">Allociné Movie</h1>

    <MoviesList :movies="movies" />
</div> 

<div v-else>
  <router-view :key="$route.fullPath"></router-view>
</div>
 <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios"
import Header from './components/secondaire/Header.vue';
import Footer from './components/secondaire/Footer.vue';
import MoviesList from './components/secondaire/MoviesList.vue';
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

export default {
  name: 'App',
  components: {
       Header,
       Footer,
       MoviesList,
  },
  
  data() {
    return {movies: [],
   
    }
  },
  
  methods:{
    getAllMovies(component){
      axios
      .get('https://api.themoviedb.org/3/discover/movie?api_key=8f969c39ef734a4835a4c9e6cf00320f&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
      .then (function (res){
       component.movies = res.data.results
       console.log(component.movies);

     })
    }
  },

 // created permet d'avoir les données il faut l'appler au depart
  created(){
    this.getAllMovies(this)
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;

  background-color: black;
  font-size: 20px;
   
}


.link{
   text-decoration: none;
   color: inherit;
}

h1{
  color: red;
  font-size: 40px;
  font-family: 'Permanent Marker', cursive;
   text-shadow:0 0 3px #FE0000, 0 0 10px #FE0000, 0 0 20px #FE0000;color:#FE0000;

}

</style>
