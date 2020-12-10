<template>
  <div class="search-result">
    <Search />
    <Filters />
  </div>
</template>


<script>
import Search from '@/components/Search.vue'
import Filters from '@/components/Filters.vue'

export default {
  name: 'SearchResult',
  components: {
    Search,
    Filters
  }

}

</script>
<style scoped>

</style>