<template>
<html>
  <h3>Perfil del administrador</h3>
  <div style="margin-top: 3em;">
   <img class="table-avatar" :src="selectedUser.imagen" alt="..."/>
   <h5 class="user-name">{{selectedUser.nombre + ' ' + selectedUser.apellidos }}</h5>
  </div>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <table class="table">
            <thead>
              <tr>
                <th  scope="col"><span class="text-muted">NOMBRE (S)</span></th>
                <th scope="col"><span class="text-muted">APELIDOS</span></th>
                <th scope="col"><span class="text-muted">CORREO ELECTRÓNICO</span></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span>{{selectedUser.nombre}}</span>
                </td>
                <td>
                  <span>{{selectedUser.apellidos}}</span>
                </td>
                <td>
                  <span>{{selectedUser.correo}}</span>
                </td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th  scope="col"><span class="text-muted">ÁREA</span></th>
                <th scope="col"><span class="text-muted">ESTATUS</span></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span>{{selectedUser.area}}</span>
                </td>
                <td>
                  <span v-if="selectedUser.estatus">Activo</span>
                  <span v-else>Inactivo</span>
                </td>
              </tr>
            </tbody>
          </table>
      </div>
      <button type="button" class="btn btn-sm btn-tertiary" @click="$router.push({name:'editar', params:{userID: selectedUser.id}})">Editar Administrador</button>
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
          selectedUser: null
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
td{
  font-weight: bold;
  font-size: medium;
}
.text-muted{
  font-weight: normal;
}
.table-avatar{
  
  margin-right: 0.5em;
  width: 40px;
  height: 40px;
  border-radius: 100%;
}

.user-name{
  display: block;
}
</style>