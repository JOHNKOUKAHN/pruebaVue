<template>
<div class="row">
    <div class="col-3">
        <Menu/>
    </div>
    <div class="col">  
        <NavBar/>
        <router-link to="#" class="path-link">Inicio</router-link>
        <a :href="$route.matched[0].path" class="path-link" style="color:#4FB9BB;">> {{path}}</a>
        <router-view/> 
    </div>
</div>     
</template>

<script>
import {defineAsyncComponent} from 'vue'
export default {
    components:{
        Menu: defineAsyncComponent(() => import('../components/MenuLateral.vue')),
        NavBar: defineAsyncComponent(() => import('../components/NavBar.vue'))
    },
    computed:{
        path(){
            return this.$route.matched[0].name
        }
    }
}
</script>

<style>
.container{
    display: flex;
}
.menu{
    width: 20%;
    height: 100%;
    background-color: darkgray;
}
.path-link{
    color: #E8EAF0;
    text-decoration: none;
}

</style>