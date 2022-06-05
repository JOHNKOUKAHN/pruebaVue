<template>
<html>
  <header class="navbar  sticky-top  flex-md-nowrap p-0 shadow">
  <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">GLI</a>
  <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <input class="form-control form-control-dark w-100 rounded-0 border-0" type="text" placeholder="Buscar" aria-label="Search">
  <div class="navbar-nav">
    <div class="nav-item text-nowrap">
      <Avatar/>
    </div>
  </div>
  <div class="navbar-nav">
    <div class="nav-item text-nowrap">
      <i class="fa fa-sign-out icon" style="color: #FFFFFF;"></i>
    </div>
  </div>
</header>

<div class="container-fluid">
  <div class="row">
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="position-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="tabla">
              <i class="fa fa-user-o icon" style="color: #16A2CD;"></i>
              Administradores
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="tabla">
              <i class="fa fa-circle-o icon" style="color: #16A2CD;"></i>
              Catálogos
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="tabla">
              <i class="fa fa-circle-o icon" style="color: #16A2CD;"></i>
              Líderes
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="tabla">
              <i class="fa fa-circle-o icon" style="color: #16A2CD;"></i>
              Usuarios
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="tabla">
              <i class="fa fa-circle-o icon" style="color: #16A2CD;"></i>
              Mi empresa
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="tabla">
              <i class="fa fa-circle-o icon" style="color: #16A2CD;"></i>
              Cursos
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="tabla">
              <i class="fa fa-circle-o icon" style="color: #16A2CD;"></i>
              Recompensas
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="tabla">
              <i class="fa fa-circle-o icon" style="color: #16A2CD;"></i>
              Eventos
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="tabla">
              <i class="fa fa-circle-o icon" style="color: #16A2CD;"></i>
              Notificaciones
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="tabla">
              <i class="fa fa-line-chart icon" style="color: #16A2CD;"></i>
              Reportes
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <router-view></router-view>
    </main>
  </div>
</div>
</html>
</template>

<script>
import {defineAsyncComponent} from 'vue'
export default {
    components:{
        Avatar: defineAsyncComponent(() => import('../components/Avatar.vue'))
    }
}
</script>


<style>
body {
  font-size: .875rem;
}

.feather {
  width: 16px;
  height: 16px;
}

/*
 * Sidebar
 */

.sidebar {
  position: fixed;
  top: 0;
  /* rtl:raw:
  right: 0;
  */
  bottom: 0;
  /* rtl:remove */
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}

@media (max-width: 767.98px) {
  .sidebar {
    top: 5rem;
  }
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: .5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #727272;
}

.sidebar .nav-link.active {
  color: #2470dc;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: .75rem;
}

/*
 * Navbar
 */
.navbar{
    background-color: #4FB9BB;
}
.navbar-brand {
  padding-top: .75rem;
  padding-bottom: .75rem;
  color: #4FB9BB;
  background-color: #FFFFFF;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
}

.navbar .navbar-toggler {
  top: .25rem;
  right: 1rem;
}

.navbar .form-control {
  padding: .75rem 1rem;
}
.nav-link{
    color: gray;
    text-decoration: none;
}
.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, .1);
  border-color: rgba(255, 255, 255, .1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
}
.btn-tertiary{
    background-color: #4FB9BB;
    color: #FFFFFF;
}
</style>