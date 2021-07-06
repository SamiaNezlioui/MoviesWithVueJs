//fichier qui sert a instancier l'application ; la lancer avec $mount

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AmericanMovies from './components/AmericanMovies'
import FrenchMovies from './components/FrenchMovies'
import LastMovies from './components/LastMovies'
import SearchMovies from './components/SearchMovies'
import TopRatedMovies from './components/TopRatedMovies'
import MoviesDetails from './components/secondaire/MoviesDetails'


Vue.use(VueRouter)
const routes = [
  {
    path: '/AmericanMovies',
    component: AmericanMovies
  },

  {
    path: '/FrenchMovies',
    component: FrenchMovies
  },

  {
    path: '/LastMovies',
    component: LastMovies
  },

   {
    path: '/SearchMovies',
    component: SearchMovies
  },

  {
    path: '/TopRatedMovies',
    component: TopRatedMovies
  },

  {
    path: '/MoviesDetails/:id',
    component: MoviesDetails
  },
]
//initialiser le router(lancer)
const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.use(require('vue-moment'))
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
