<template>
  <div id="app">
    <Navigation />
    <router-view />
    
    <!-- <AdminNav>
      <span slot="content">
        <router-view />
      </span>
    </AdminNav> -->
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
// import AdminNav from './components/AdminNav.vue'

export default {
  components: {
    Navigation,
    // AdminNav 
  }
}
</script>

<style>

#app {
  /* font-family: 'Nunito', sans-serif; */
  /* font-family: 'Quicksand', sans-serif; */
  /* font-family: 'Sniglet', cursive; */
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


</style>
