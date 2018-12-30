import Vue from 'vue'
import Router from 'vue-router'
import cards from './views/cards.vue'
import Game from './views/Game.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cards',
      component: cards
    },
    {
      path: '/cards',
      name: 'aboutGame',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Game

    }
  ]
})
