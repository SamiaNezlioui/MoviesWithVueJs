<template>
  <div class="p-5">
    <h1 class="p-5">Search Movies</h1>
    
    <div>
        <form>
          <b-input type="text" placeholder="Search movie" class="mr-sm-2" @keyup="getSearchMovies(filmName)" v-model="filmName"></b-input>
          
      </form>
     </div>  
    <MoviesList :movies="movies"/>
  </div>
</template>

<script>
import MoviesList from "./secondaire/MoviesList.vue";
import axios from "axios";

export default {
  name: "SearchMovies",
  components: {
    MoviesList,
  },

  data() {
    return {
      movies: [],
      filmName:''
    };
  },

 methods:{
    getSearchMovies(query){
      axios
      .get('https://api.themoviedb.org/3/search/movie?&language=fr&api_key=8f969c39ef734a4835a4c9e6cf00320f&query=' + query)
      .then ( (res) => {
       this.movies = res.data.results
       console.log(this.movies);
     })
    },
    }
};
</script>

<style scoped>
.form-control {
    display: block;
    width: 40%;
    margin: 5em;
    height: 10%;
}
</style>