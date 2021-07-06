<template>
  <div>
    <!-- message du chargement en cours -->

    <SortButtons :movies="movies" />
    <ul>
      <!-- Excution de la boucle  et v-bind lier les donner -->
      <li v-for="movie in movies" v-bind:key="movie.id">
        <router-link class="link" :to="`/MoviesDetails/${movie.id}`">
        <b-card tag="article" class="mb-2 film">
          <h3>{{ movie.title }}</h3>
   
          <img
            class="imagesfilm"
            v-bind:src="preUrl + movie.poster_path"
            alt="moviePoster" 
          />
          <b-card-text>
            <div class="detail">
              <p class="resume"><b>Resumé : </b>{{ movie.overview.substr(0,[200])}}[...]</p>
              <p class="note" ><b>Note Moyenne : </b>{{ movie.vote_average }}</p>
              <p class="date"><b>Date de Sortie: </b>{{ movie.release_date | moment("DD/MM/YYYY") }}</p>
            
            </div>
          </b-card-text>
        </b-card>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import SortButtons from "./SortButtons.vue";

export default {
  name: "MoviesList",
  components: {
  
    SortButtons,
  },

  props: ["movies"],
  data() {
    return {
      preUrl: "https://image.tmdb.org/t/p/original",
    };
  },
};
</script>

  <!-----------STYLE CSS -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@1,300&display=swap');

.link{
   text-decoration: none;
   color: inherit;
}

h3{
  color: red;
  font-size: 40px;
  font-family: 'Open Sans Condensed', sans-serif;
}

.resume{
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
 color: white;
 background-color: rgba(117, 190, 218, 0.5);
  width: 15vw;
}


.imagesfilm {
  width: 15vw;
}

.film:hover .resume{
opacity: 100;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.note {
  color: black;
  font-size: 15px;

}

.date {
color: black;
font-size: 15px;
}

 .film{
   max-width: 50rem; 
 }
</style>