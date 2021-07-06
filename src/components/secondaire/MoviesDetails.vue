<template>
  <b-card id="movie" tag="article" style="max-width: 60rem" class="mb-2">
    <h3>{{ movie.title }}</h3>
    <img
      class="imagesfilm"
      v-bind:src="preUrl + movie.poster_path"
      alt="moviePoster" 
    />
    <b-card-text>
      <div>
        <p><b>Note Moyenne : </b>{{ movie.vote_average }}</p>
        <p><b>Date de Sortie: </b>{{ movie.release_date }}</p>
        <p><b>langue original: </b>{{ movie.original_language }}</p>
        <p><b>Resumé : </b>{{ movie.overview }}</p>
      </div>
    </b-card-text>
  </b-card>
</template>

<script>
import axios from "axios";

export default {
  name: "MoviesDetails",

  data() {
    return {
      id: this.$route.params.id,
      preUrl: "https://image.tmdb.org/t/p/original",
      movie: null,
      
    };
  },

  methods: {
    getMoviesById(component) {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/" +
            component.id +
            "?api_key=8f969c39ef734a4835a4c9e6cf00320f&language=fr"
        )
        .then(function (res) {
          component.movie = res.data;
         
          console.log(component.id, res.data);
          console.log(component.movie);
        });
    },
  },
  created() {
    this.getMoviesById(this);
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');

#movie{
    margin-left: auto;
    margin-right: auto;
    width: 40vw;
}

#movie h3{
    font-size: 40px;
    color: black;
    font-family: 'Caveat', cursive;
}

p{
    color: black;
    font-size: 30px;
    font-family: 'Caveat', cursive;
}

.imagesfilm{
  width: 20vw;
}
</style>
