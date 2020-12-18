<template>
  <div class="collects">
    <div class="single">
      <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
    </b-form-checkbox>
      <figure class="figure">
        <img src="../assets/books/hp2.jpg" class="figure-img img-fluid z-depth-1"
          alt="..." style="width: 400px">
        <figcaption class="figure-caption">Harry Potter and the Chambers of Secrets<br>by J.K Rowling</figcaption>
      </figure>
      <b-button v-b-tooltip.hover title="Add to My Collection" variant="light" v-on:click="fill = !fill" class="add"> 
        <b-icon :icon="fill ? 'bookmark-heart' : 'bookmark-heart-fill'" aria-hidden="true" scale="1.5"></b-icon>
      </b-button>
    </div>
    <div class="single">
      <b-form-checkbox
      id="checkbox-2"
      v-model="status"
      name="checkbox-2"
      value="accepted"
      unchecked-value="not_accepted"
    >
    </b-form-checkbox>
      <figure class="figure">
        <img src="../assets/books/hp2.jpg" class="figure-img img-fluid z-depth-1"
          alt="..." style="width: 400px">
        <figcaption class="figure-caption">Harry Potter and the Chambers of Secrets<br>by J.K Rowling</figcaption>
      </figure>
      <b-button v-b-tooltip.hover title="Add to My Collection" variant="light" v-on:click="fill = !fill" class="add"> 
        <b-icon :icon="fill ? 'bookmark-heart' : 'bookmark-heart-fill'" aria-hidden="true" scale="1.5"></b-icon>
      </b-button>
    </div>
    <div class="single">
      <b-form-checkbox
      id="checkbox-3"
      v-model="status"
      name="checkbox-3"
      value="accepted"
      unchecked-value="not_accepted"
    >
    </b-form-checkbox>
      <figure class="figure">
        <img src="../assets/books/hp2.jpg" class="figure-img img-fluid z-depth-1"
          alt="..." style="width: 400px">
        <figcaption class="figure-caption">Harry Potter and the Chambers of Secrets<br>by J.K Rowling</figcaption>
      </figure>
      <b-button v-b-tooltip.hover title="Add to My Collection" variant="light" v-on:click="fill = !fill" class="add"> 
        <b-icon :icon="fill ? 'bookmark-heart' : 'bookmark-heart-fill'" aria-hidden="true" scale="1.5"></b-icon>
      </b-button>
    </div>
    
    
    
    <div class="check">
      <b-link  class="check-out" href="/checkOut">Check Out</b-link>
    </div>
  </div>
</template>


<script>
  export default {
    name: "Collection",
    data() {
        return {
          Icon:{
            name: 'bookmark-heart-fill'
          },
          fill: false
        }
      }
  }
</script>


<style scoped>
.collects{
  width: 100%;
  margin-left: 2em;
  margin-right: 2em;
  margin-top: 2em;
  font-family: 'Nunito', sans-serif;
}

.single{
  padding: .5em;
  padding-top: 0em;
  width: 20%;
  height: 19em;
  text-align: center;
  display: inline-block;
  flex-direction: row;
  flex-flow: wrap;
  align-content: flex-start;
}

.check{
  margin-top: 5em;
}

figure{
  width: 60%;
}

img{
  width:60%;
}

.custom-control{
  display: inline;
}

svg{
  color: #2c3e50;
}

.add{
  padding-left: .5em;
  padding-top: 0;
  background: none;
  border: none;
  outline: none !important;
  vertical-align: top;
  margin-top: .5em; 
}

.add:focus{
  border: none;
  outline: none;
}

figcaption{
  color: black;
}

.check{
  display: flex;
  justify-content: flex-end;
  margin-right: 3em;
  margin-bottom: 2em;
}

.check-out{
  font-size: 1em;
  border-radius: 10px;
  background:linear-gradient(#136a8a, #267871);
  padding: .7em;
  color: #fff;
  text-decoration: none;
}

</style>
