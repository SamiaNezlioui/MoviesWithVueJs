<template>
  <div class="Btn p-5">
    <b-button @click="sortByTitle()">trier par titre</b-button>
    <b-button @click="sortByDate()" 
      >trier par date de sortie</b-button
    >
    <b-button @click="sortByNote()" >trier par note</b-button>
  </div>
</template>

<script>
export default {
  name: "SortButtons", 
  props: ["movies"],

  data() {
    return {
      sortedByTitle: false,
      sortedByDate: false,
      sortedByNote: false
    };
  },
  methods: {
      //..............TRIE PAR TITRE TITRE....................../

    sortByTitle() {
      if (this.sortedByTitle == false) { //le cas ou les film sont pas trier par ordre alphabetique
        this.sortedByTitle = true; //indique que le trie est fait
        this.movies.sort((a, b) => {
          //si A arrive aprés dans l'ordre alphabétique le titre
          if (a.title > b.title) {
            return 1;
          } else if (a.title < b.title) {
            return -1;
          } else {
            return 0;
          }
        });
      }
      else { //le trie est fait mais on va inverser le trie
          this.sortedByTitle = false;
          this.movies.sort((a, b) => {
          //si A arrive aprés dans l'ordre alphabétique le titre
          if (a.title < b.title) {
            return 1;
          } else if (a.title > b.title) {
            return -1;
          } else {
            return 0;
          }
        });
      }
    },
    
    //..............TRIE PAR TITRIER PAR DATE....................../

   sortByDate() {
       if (this.sortedByDate == false){
           this.sortedByDate = true;
           this.movies.sort((a, b) => {
            if(a.release_date > b.release_date){
                return 1;
            }else if (a.release_date< b.release_date){
                return -1
            } else {
                return 0;
            }
           })
        } else{
            this.sortedByDate = false
            this.movies.sort((a, b) => {
            if(a.release_date < b.release_date){
                return 1;
            }else if (a.release_date > b.release_date){
                return -1
            } else {
                return 0;
            }
        })
        }
   },
    //..............TRIE PAR Notes ....................../

    sortByNote() {
      if (this.sortedByNote == false){
       this.sortedByNote = true; //indique que le trie est fait
        this.movies.sort((a, b) => {
          if (a.vote_average > b.vote_average) {
            return 1;
          } else if (a.vote_average < b.vote_average) {
            return -1;
          } else {
            return 0;
          }
        });
      } else{
this.sortedByNote = false;
          this.movies.sort((a, b) => {
          if (a.vote_average < b.vote_average) {
            return 1;
          } else if (a.vote_average > b.vote_average) {
            return -1;
          } else {
            return 0;
          }
        });
      }
    }

  }
}
</script>

<style scoped>
.Btn {
  display: flex;
  text-align: center;
  font-size: 50px;
  padding: 30px;
  width: 100vw;
  margin: 13px;
  justify-content: space-around;
  border-radius: 10px;
 
}
.Btn :hover {
  background-color: red;
  color: white;
}

</style>