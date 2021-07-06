<template>
    <div>
        <h1>French Movies</h1>
        <MoviesList :movies="movies" />
    </div>
</template>

<script>

import MoviesList from './secondaire/MoviesList.vue';
import axios from "axios";


export default {
    name: "FrenchMovies",
    components:{
        MoviesList
    },

data(){
    return{
        movies: []
    };
},

 methods:{
    getAllMovies(component){
      axios
      .get('https://api.themoviedb.org/3/discover/movie?api_key=8f969c39ef734a4835a4c9e6cf00320f&with_original_language=fr&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
      .then (function (res){
       component.movies = res.data.results
       console.log(component.movies);
     })
    }
  },
   created(){
    this.getAllMovies(this)
  }
}
</script>

<style  scoped>
h1{
    color: white;
}
</style>