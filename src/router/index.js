import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'administradores',
    component: () => import(/* webpackChunkName: "about" */ '../components/Dashboard.vue'),
    children:[
      {
        path:'tabla',
        name:'tabla',
        component: () => import(/* webpackChunkName: "about" */ '../components/AdministradoresTabla.vue'), 
      },
      {
        path:'perfil',
        name:'perfil',
        component: () => import(/* webpackChunkName: "about" */ '../components/AdministradoresPerfil.vue'),
        props: ( route ) =>{
          return{
              userID: route.params.userID,
          } 
        } 
      },
      {
        path:'agregar',
        name:'agregar',
        component: () => import(/* webpackChunkName: "about" */ '../components/AdministradoresAgregar.vue'), 
      },
      {
        path:'editar',
        name:'editar',
        component: () => import(/* webpackChunkName: "about" */ '../components/AdministradoresEditar.vue'),
        props: ( route ) =>{
          return{
              userID: route.params.userID,
          } 
        }
      },
      {
        path:'guardar',
        name:'guardar',
        component: () => import(/* webpackChunkName: "about" */ '../components/AdministradoresGuardar.vue'), 
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
