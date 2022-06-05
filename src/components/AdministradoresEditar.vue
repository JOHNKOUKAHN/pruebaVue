<template>
<html>
  <h1>ADMINISTRADORES EDITAR</h1>
  <h2 v-if="selectedUser.id"> Editar Administrador </h2>
  <h2 v-else > Agregar nuevo admin </h2>
<form class=" g-3 needs-validation" novalidate>
    <div class="card">
      <div class="card-top">
      <img class="card-img" :src="selectedUser.id  ? selectedUser.imagen : imgDefault" alt="img">
      </div>
      <div class="card-bottom">
        <span>Arrastra tu archivo o</span>
        <div class="input-button">
          <button class="btn btn-outline-secondary">
            Selecciona
          </button>
          <input type="file">
        </div>
        </div>
    </div>

    <div class="pt-3 pb-2 mb-3 border-bottom">
      <input class="input-line pt-3 pb-2 mb-3" type="text" placeholder="Nombre (s)" v-model="selectedUser.nombre">
      <input class="input-line pt-3 pb-2 mb-3" type="text" placeholder="Apelldos" v-model="selectedUser.apellidos">
      <input class="input-line pt-3 pb-2 mb-3" type="text" placeholder="Correo electrónico" v-model="selectedUser.correo">
      <select class="input-line pt-3 pb-2 mb-3 form-select" aria-label="Default select example" v-model="selectedUser.area">
          <option selected value="">Área</option>
          <option v-for="area in areas" :key="area.id" :value="area.nombre">{{area.nombre}}</option>  
      </select>
      <select class="input-line pt-3 pb-2 mb-3 form-select" aria-label="Default select example" v-model="selectedUser.estatus">
        <option selected value="null">Estatus</option>
        <option :value="'true'">Activo</option>
        <option :value="'false'">Inactivo</option>
      </select>
    </div>  
    <div class="btn-toolbar mb-2 mb-md-2">
      <button class="btn btn-outline-secondary" @click="$router.push({name: 'tabla'})">
          Cancelar
      </button>
      <button class="btn btn-tertiary" @click="$router.push({name: 'guardar'})">
          <span v-if="selectedUser.id">Guardar Cambios</span>
          <span v-else>Agregar Administrador</span>
      </button>
    </div>
 </form> 
</html>
</template>

<script>
export default {
  props:{
    userID:{
          type: String,
          required: true
    }
  },
  data(){ 
      return{
        users:[
            {
              id: '1', 
              nombre: 'Juan Pablo',
              apellidos: 'Zavala Paramo',
              correo: 'correo@gmail.com',
              area: 'Sistemas',
              estatus: true,
              imagen: require('../assets/profilepictures/1.jpg')
            },
            {
              id: '2', 
              nombre: 'Ana',
              apellidos: 'Lopez',
              correo: 'correo@gmail.com',
              area: 'Recursos Humanos',
              estatus: false,
              imagen: require('../assets/profilepictures/2.jpg')
            },
            {
              id: '3', 
              nombre: 'Pedro',
              apellidos: 'Perez',
              correo: 'correo@gmail.com',
              area: 'Recursos Humanos',
              estatus: true,
              imagen: require('../assets/profilepictures/3.jpg')
            },
            {
              id: '4', 
              nombre: 'Adrian',
              apellidos: 'Zuniga',
              correo: 'correo@gmail.com',
              area: 'Ventas',
              estatus: false,
              imagen: require('../assets/profilepictures/4.jpg')
            },
            {
              id: '5', 
              nombre: 'Juan',
              apellidos: 'Zavala Paramo',
              correo: 'correo@gmail.com',
              area: 'Ventas',
              estatus: true,
              imagen: require('../assets/profilepictures/5.jpg')
            },
            {
              id: '6', 
              nombre: 'Pablo',
              apellidos: 'Zavala Paramo',
              correo: 'correo@gmail.com',
              area: 'Recursos Humanos',
              estatus: true,
              imagen: require('../assets/profilepictures/6.jpg')
            },
            {
              id: '7', 
              nombre: 'Juan Pablo',
              apellidos: 'Zavala',
              correo: 'correo@gmail.com',
              area: 'Sistemas',
              estatus: true,
              imagen: require('../assets/profilepictures/7.jpg')
            },
            {
              id: '8', 
              nombre: 'Juan Pablo',
              apellidos: 'Paramo',
              correo: 'correo@gmail.com',
              area: 'Recursos Humanos',
              estatus: false,
              imagen: require('../assets/profilepictures/8.jpg')
            },
            {
              id: '9', 
              nombre: 'Juan',
              apellidos: 'Paramo',
              correo: 'correo@gmail.com',
              area: 'Recursos Humanos',
              estatus: true,
              imagen: require('../assets/profilepictures/9.jpg')
            },
            {
              id: '10', 
              nombre: 'Yesica',
              apellidos: 'Alvarez',
              correo: 'correo@gmail.com',
              area: 'SIstemas',
              estatus: false,
              imagen: require('../assets/profilepictures/10.jpg')
            },
            {
              id: '11', 
              nombre: 'Claudia',
              apellidos: 'Mendez',
              correo: 'correo@gmail.com',
              area: 'Ventas',
              estatus: true,
              imagen: require('../assets/profilepictures/11.jpg')
            },
            {
              id: '12', 
              nombre: 'Guadalupe',
              apellidos: 'Martinez',
              correo: 'correo@gmail.com',
              area: 'Sistemas',
              estatus: true,
              imagen: require('../assets/profilepictures/12.jpg')
            },
            {
              id: '13', 
              nombre: 'Esther',
              apellidos: 'Zavala',
              correo: 'correo@gmail.com',
              area: 'Recursos Humanos',
              estatus: false,
              imagen: require('../assets/profilepictures/13.jpg')
            },
            {
              id: '14', 
              nombre: 'Martha',
              apellidos: 'Paramo',
              correo: 'correo@gmail.com',
              area: 'Recursos Humanos',
              estatus: false,
              imagen: require('../assets/profilepictures/14.jpg')
            },
            {
              id: '15', 
              nombre: 'Adriana',
              apellidos: 'Cortez',
              correo: 'correo@gmail.com',
              area: 'Sistemas',
              estatus: true,
              imagen: require('../assets/profilepictures/15.jpg')
            },
            {
              id: '16', 
              nombre: 'Mariana',
              apellidos: 'Jimenez',
              correo: 'correo@gmail.com',
              area: 'Ventas',
              estatus: true,
              imagen: require('../assets/profilepictures/16.jpg')
            },
          ],
          areas:[
            {id:'1', nombre:'Recursos Humanos'},
            {id:'2', nombre:'Sistemas'},
            {id:'3', nombre:'Ventas'}
          
          ],
          selectedUser: {
              id: null, 
              nombre: '',
              apellidos: '',
              correo: '',
              area: '',
              estatus: null,
              imagen: null
            },
          imgDefault: require('../assets/default.png')
      }
  },
  created(){
    let index = this.users.findIndex((user) => user.id == this.userID)
    if (index != -1){
      this.selectedUser = this.users[index]
    }
  }
}

</script>

<style>
.card{
  width: 15em;
  height: 20em;
}
.card-top{
  width: 100%;
  height: 60%;
}
.card-img{
  width: 100%;
  height: 100%;
}
.card-bottom{
  
  display: inline-block;
  position: relative;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  padding-left: 3em;
  width: 100%;
  height: 40%;
}

.input-button input[type=file] {
  left: 0;
  top: 0;
  opacity: 0;
  position: absolute;
  font-size: 90px;
}

.input-line{
  display: block;
  width: 35em;
}

</style>