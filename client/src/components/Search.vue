<template>
  <div class="search">
    <div>
      <b-nav tabs class="sub-nav">
        <b-nav-item href="#" active>Webliography</b-nav-item>
        <b-nav-item href="#">Electronic Resources</b-nav-item>
        <b-nav-item href="#">DSpace</b-nav-item>
        <b-nav-item href="#">Advanced Search</b-nav-item>
      </b-nav>
    </div>
    
    <div class="searchBar">
      <b-form inline> 
        <b-form-input v-model="form.name" placeholder="Search Title, Author, Keyword" required></b-form-input>
        <b-form-select class="custom-select" id="types" v-model="form.types" :options="types" required>{{types}}</b-form-select>
        <b-link href="Resources/"><b-icon icon="search" variant="dark" aria-hidden="true" scale="1.2" class="mt-2"></b-icon></b-link>
      </b-form> 
    </div>
  </div>
</template>


<script>
export default {
  name: 'Search',
  data() {
    return {
      form: {
        name: '',
        types: 'Books',
      },
      types: [
        { value: 'Book', text: 'Books' },
        { value: 'Journal', text: 'Journals' },
        { value: 'Article', text: 'Articles' },
        { value: 'Video', text: 'Videos' },
        { value: 'Laptop', text: 'Laptops'}
      ],
      show:true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.search{
  width: 75%;
  margin: auto;
  margin-top: 2em;

}

.searchBar{
  height: 4.2em;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;
}

.nav-tabs .nav-link{
  color: #006D77 !important;
}

form{
  padding: .5em .5em .5em .5em; 
}

input{
  flex-grow: 2;
  width: 100%;
  font-size: 1.3em;
  border:none;
}

input:focus, select:focus{
  border-color: white;
  box-shadow: 0 1px 1px rgba(255, 255, 255, 255) inset, 0 0 8px rgba(255, 255, 255, 0.6);
}

select{
  border: none;
}


.svg-inline--fa{
  font-size: 1.2em;
  color: black;
}

button{
  background:white;
  border:none;
}

@media screen and (min-width: 400px){
  
}

</style>
