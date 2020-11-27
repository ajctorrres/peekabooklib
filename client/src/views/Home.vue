<template>
  <div class="home">
    <Search />
    <BookDisplay />
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '@/components/Search.vue'
import BookDisplay from '@/components/BookDisplay.vue'

export default {
  name: 'Home',
  components: {
    Search,
    BookDisplay
  }
}
</script>
