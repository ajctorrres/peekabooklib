<template>
  <div class="result">    
    <!-- <b-container fluid class="p-4 bg-dark"> -->
      <b-row>
        <b-col>
          <!-- <b-img thumbnail fluid :src="require('../assets/books/hp2.jpg')" alt="Harry Potter and the Chamber of Secrets"></b-img> -->
                <img src="../assets/books/hp2.jpg" alt="Harry Potter and the Chamber of Secrets">
        </b-col>
      </b-row>
    <!-- </b-container> -->
  </div>
</template>


<script>

export default {
  name: 'ResultSearch',
  components: {

  }

}

</script>
<style scoped>
.result{
  width:50%;
  background: #8e9eab;
  display: flex;
  flex-direction: row;
}

img{
  width:15%;
}

</style>