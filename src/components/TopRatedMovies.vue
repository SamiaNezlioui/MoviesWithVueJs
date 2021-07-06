<template>
  <div>
    <h1>films mieux noté</h1>
    <MoviesList :movies="movies" />
  </div>
</template>

<script>
import MoviesList from "./secondaire/MoviesList.vue";
import axios from "axios";

export default {
  name: "TopRatedMovies",
  components: {
    MoviesList,
  },
  data() {
    return {
      movies: [],
    };
  },

  methods: {
    getTopRatedMovies(component) {
      axios
        .get(
          "https://api.themoviedb.org/3/discover/movie?api_key=8f969c39ef734a4835a4c9e6cf00320f&language=fr&sort_by=vote_average.desc&vote_count.gte=10000&include_adult=false&page=1"
        )
        .then(function (res) {
          component.movies = res.data.results;
          console.log(component.movies);

          axios
            .get(
              "https://api.themoviedb.org/3/discover/movie?api_key=8f969c39ef734a4835a4c9e6cf00320f&sort_by=vote_average.desc&vote_count.gte=10000&include_adult=false&page=2"
            )
            .then(function (res) {
              res.data.results.forEach(function (movie) {
                component.movies.push(movie);
              });
              console.log(component.movies);

              axios
                .get(
                  "https://api.themoviedb.org/3/discover/movie?api_key=8f969c39ef734a4835a4c9e6cf00320f&sort_by=vote_average.desc&vote_count.gte=10000&include_adult=false&page=3"
                )
                .then(function (res) {
                  res.data.results.forEach(function (movie) {
                    component.movies.push(movie);
                  });
                  component.movies.splice(50,10)
                  console.log(component.movies);
                });
            });
        });
    },
  },
  created() {
    this.getTopRatedMovies(this);
  },
};
</script>

<style  scoped>
h1{
  color: white;
}
</style>