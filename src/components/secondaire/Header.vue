<template>

  <header>

    <div class="navbar">

      <b-navbar type="dark" variant="dark" toggleable="xl">
        
      

        <b-navbar-toggle target="navbar-toggle-collapse"></b-navbar-toggle>

        <b-collapse id="navbar-toggle-collapse" is-nav>
          <b-navbar-nav>
           
            <b-nav-item>
              <router-link to="/" class="link p-5 ml-5"
                >Accueil</router-link
              >
            </b-nav-item>

            <b-nav-item>
              <router-link to="/AmericanMovies" class="link p-5 ml-5"
                >films Americain</router-link
              >
            </b-nav-item>

            <b-nav-item>
              <router-link to="/FrenchMovies" class="link p-5 ml-5"
                >films Français</router-link
              >
            </b-nav-item>

            <b-nav-item>
              <router-link to="/TopRatedMovies" class="link p-5 ml-5"
                >Top 50: les mieux notés</router-link
              >
            </b-nav-item>
            <b-nav-item>
              <router-link to="/LastMovies" class="link p-5 ml-5"
                >les films 2021</router-link
              >
            </b-nav-item>
            <b-nav-item>
              <router-link to="/SearchMovies" class="link p-5 ml-5"
                >Recherche</router-link
              >
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </header>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Permanent+Marker&display=swap');

.navbar{
  width: 100%;
}
     .navbar .link{
    color: white;
    font-size: 20px;
    display: flex;
    flex-direction: row;
   font-family: 'Permanent Marker', cursive;
     }


</style>