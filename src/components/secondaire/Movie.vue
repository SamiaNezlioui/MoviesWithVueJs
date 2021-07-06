<template>
<router-link id="link">

<h4 class="font-weight-bold p-3">{{title}}</h4>

 <b-card tag="article" style="max-width: 20rem" class="mb-2">
          <h3>{{ movie.title }}</h3>
          <img  class="imagesfilm" v-bind:src="preUrl + movie.poster_path" alt="moviePoster" />
          <b-card-text>
            <div>
              <p><b>Resumé : </b>{{ movie.overview }}</p>
              <p><b>Note Moyenne : </b>{{ movie.vote_average }}</p>
              <p><b>Date de Sortie: </b>{{ movie.release_date }}</p>
            </div>
   </b-card-text>
</router-link>
</template>

<script>
export default{
  name: "Movie",
  props: [
    "id",
    "original_title",
    "release_date",
    "vote_average",
    "overview"
  ],

data(){
  return{
    preUrl: "https://image.tmdb.org/t/p/original",
  }
}
}
</script>
