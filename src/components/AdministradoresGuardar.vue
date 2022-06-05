<template>
  <h3 class="pt-3 pb-2 mb-3">Administradores de la consola</h3>
  <button class="btn btn-round pt-3 pb-2 mb-3">
    <i class="fa fa-check table-icon" style="color:white"></i>
  </button>
  <p class="pt-3 pb-2 mb-3 text-bold"> <strong> Cambios guardados </strong></p>
  <p class="pt-3 pb-2 mb-3">Tu administrador se ha guardado correctamente</p>
  <button class="btn btn-tertiary" @click="$router.push({name: 'tabla'})">
    Regresar a mis administradores
  </button>

</template>

<script>
export default {

}
</script>

<style>
.btn-round{
  background-color: #6FCF97;
  border-radius: 100% ;
}
</style>