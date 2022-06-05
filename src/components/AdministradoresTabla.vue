<template>
<html>
  <h2>Administradores de la consola</h2>
   <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <div class="btn-toolbar mb-2 mb-md-0">
        <input class="search-bar" type="text" placeholder="Buscar" aria-label="Search">
        <button class="btn btn-secondary">
          Buscar
        </button>
        <div class="dropdown">
          <button class="btn btn-tertiary" id="dropdownMenuAdminFilter" data-bs-toggle="dropdown" aria-expanded="false">>
            <i class="fa fa-filter icon" ></i>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuAdminFilter">
            <li><div class="border-bottom">Filtros de búsqueda</div></li>
            <li>
              <div class="border-bottom">
                <select class="form-select" aria-label="Default select example" v-model="filters.area">
                  <option selected value="">Área</option>
                  <option v-for="area in areas" :key="area.id" :value="area.nombre">{{area.nombre}}</option>
                </select>
                <select class="form-select" aria-label="Default select example" v-model="filters.estatus">
                  <option selected value="">Estatus</option>
                  <option :value="'true'">Activo</option>
                  <option :value="'false'">Inactivo</option>
                </select>
              </div>
            </li>
            <li>
              <div class="border-bottom">
                <div class="btn-toolbar mb-2 mb-md-0">
                  <button class="btn btn-secondary">
                     Limpiar
                  </button>
                  <button class="btn btn-tertiary" @click="filterUsers">
                     Aplicar
                  </button>
                </div>
              </div>
            </li>
          </ul>
         </div> 
        </div>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group me-2">
            <button type="button" class="btn btn-sm btn-outline-secondary">Descargar</button>
            <button type="button" class="btn btn-sm btn-tertiary" @click="$router.push({name:'editar', params:{userID:'0'}})">Agregar nuevo admin</button>
          </div>
        </div>
      </div>
   
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">
                  <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    </div>
                </th>
                <th scope="col">Administradores</th>
                <th scope="col">Área</th>
                <th scope="col">Estatus</th>
                <th scope="col">Detalles</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in filteredUsers" :key="user.id">
                <th scope="row">
                  <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    </div>
                </th>
                <td>
                  <img class="table-avatar" :src="user.imagen" alt="..."/>
                  <span>{{user.nombre + ' ' + user.apellidos }}</span>
                </td>
                <td>{{user.area}}</td>
                <td>
                  <span v-if="user.estatus" class="activo">ACTIVO</span>
                  <span v-else class="inactivo">INACTIVO</span>
                </td>
                <td>
                  <i 
                      class="fa fa-edit table-icon" 
                      style="color:#4FB9BB" 
                      @click="$router.push({name:'editar', params:{userID: user.id}})">
                  </i>

                  <i 
                      class="fa fa-trash-o table-icon" 
                      style="color:red"
                      @click="selectUser(user.id)" 
                      data-bs-toggle="modal" 
                      data-bs-target="#exampleModal">
                  </i>

                  <i 
                      class="fa fa-eye table-icon" 
                      @click="$router.push({name:'perfil', params:{userID: user.id}})">
                  </i>
                </td>
              </tr>
            </tbody>
          </table>
      </div>
              <!-- Modal -->
        <div  class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Eliminar administrador</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div v-if="selectedUser" class="modal-body">
                <p>¿Estás seguro de eliminar este administrador?</p>
                <div class="d-flex">
                    <img class="table-avatar" :src="selectedUser.imagen" alt="..."/>
                    <ul class="modal-list">
                      <li>{{selectedUser.nombre + ' ' + selectedUser.apellidos}}</li>
                      <li>{{selectedUser.correo}}</li>
                    </ul>
                </div>
                  
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-tertiary" data-bs-dismiss="modal" @click="deleteUser">Sí, eliminar</button>
              </div>
            </div>
          </div>
        </div>
</html>
</template>

<script>
export default {
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
          selectedUser: null,
          filteredUsers:[],
          filters: {area: '', estatus: ''}

        }
  },
  methods:{
    filterUsers(){
      let  filtUsers = []
      if(this.filters.area === '' && this.filters.estatus === '' ){
        filtUsers = this.users
      }
      else if(this.filters.area != '' && this.filters.estatus != '' ){
        filtUsers = this.users.filter(user => (user.area == this.filters.area && String(user.estatus) == this.filters.estatus))
      }
      else if(this.filters.area != '' && this.filters.estatus === ''){
        filtUsers = this.users.filter(user => user.area == this.filters.area)
      }
      else if(this.filters.estatus != '' && this.filters.area === ''){
        filtUsers = this.users.filter(user => String(user.estatus) == this.filters.estatus)
      }
      
      this.filteredUsers = filtUsers
    },
    selectUser(id){
    this.selectedUser = this.users[this.users.findIndex((user) => user.id == id)]
    },
    deleteUser(){
      if(this.selectUser){
        this.users.splice(this.users.indexOf(this.selectedUser),1)
        this.selectedUser = null
      }
    }
  },
  created(){
    this.filterUsers()
  }

}
</script>

<style>
.table-icon{
  font-size:24px;
  margin: 0.3em;
}
.table-avatar{
  
  margin-right: 0.5em;
  width: 36px;
  height: 36px;
  border-radius: 100%;
}
.activo{
  color: #4CAF50;
  background-color: #E8F5E9;
}
.inactivo{
  color: #EB5757;
  background-color: #FFE1E0;
}
.modal-title{
  color: #4FB9BB;
}
.modal-list{
  list-style-type: none;
}
</style>