<template>
  <div class="resultsSearch">
    <div class="results">
      <div class="filter">
          <h5>Filter Search Result</h5>
          <b-form inline>
              <label class="mr-sm-2" for="sorting">Sort by</label>
              <b-form-select id="sorting" v-model="selected" :options="sort" size="sm" class="mb-2 mr-sm-2 mb-sm-0"></b-form-select>
          </b-form>
          <br>
          <b-form-group label="Location">
            <b-form-checkbox-group
              v-model="selected"
              :options="location"
              name="location"
              stacked
            ></b-form-checkbox-group>
          </b-form-group>
          <br>        
          <b-form-group label="Format">
            <b-form-checkbox-group
              v-model="selected"
              :options="type"
              name="type"
              stacked
            ></b-form-checkbox-group>
          </b-form-group>
      </div>


      <div class="result">    
          <b-row>
            <b-col cols="3" align-self="center" class="d-flex justify-content-center">
              <img src="../assets/books/hp1.jpg" alt="Harry Potter and the Chamber of Secrets">
            </b-col>
            <b-col cols="8">
              <h4><strong>Harry Potter and the Philosopher's Stone</strong></h4>
              <p>By J.K. Rowling</p>
              <p>Bloomsbury Publishing</p>
              <p>June 1997</p>
              <p><strong>Location</strong></p>
              <p>Library:JB-LRC</p>
              <p>Location:Talamban Campus</p>
            </b-col>
            <b-col cols="1">
              <b-button v-b-tooltip.hover title="Add to My Collection" variant="light" v-on:click="fill = !fill">
                <b-icon :icon="fill ? 'bookmark-heart-fill' : 'bookmark-heart'" aria-hidden="true" scale="1.5" class="mt-2"></b-icon>
              </b-button>
            </b-col>
          </b-row>
          <hr>
          <b-row>
            <b-col cols="3" align-self="center" class="d-flex justify-content-center">
              <img src="../assets/books/hp2.jpg" alt="Harry Potter and the Chamber of Secrets">
            </b-col>
            <b-col cols="8">
              <h4><strong>Harry Potter and the Chamber of Secrets</strong></h4>
              <p>By J.K. Rowling</p>
              <p>Bloomsbury Publishing</p>
              <p>June 1997</p>
              <p><strong>Location</strong></p>
              <p>Library:JB-LRC</p>
              <p>Location:Talamban Campus</p>
            </b-col>
            <b-col cols="1">
              <b-button v-b-tooltip.hover title="Add to My Collection">
                <b-icon icon="bookmark-heart" aria-hidden="true" scale="1.5" class="mt-2"></b-icon>
              </b-button>
            </b-col>
          </b-row>
          <hr>
          <b-row>
            <b-col cols="3" align-self="center" class="d-flex justify-content-center">
              <img src="../assets/books/hp3.jpg" alt="Harry Potter and the Prisoner in Azkaban">
            </b-col>
            <b-col cols="8">
              <h4><strong>Harry Potter and the Prisoner in Azkaban</strong></h4>
              <p>By J.K. Rowling</p>
              <p>Bloomsbury Publishing</p>
              <p>June 1997</p>
              <p><strong>Location</strong></p>
              <p>Library:JB-LRC</p>
              <p>Location:Talamban Campus</p>
            </b-col>
            <b-col cols="1">
              <b-button v-b-tooltip.hover title="Add to My Collection" variant="light" v-on:click="fill = !fill">
                <b-icon :icon="fill ? 'bookmark-heart-fill' : 'bookmark-heart'" aria-hidden="true" scale="1.5" class="mt-2"></b-icon>
              </b-button>
            </b-col>
          </b-row>
      </div>
    </div>
    <div class="mt-4 mr-5">
      <b-pagination v-model="currentPage" pills :total-rows="rows" align="right"></b-pagination>
    </div>
  </div>
</template>

<script>

export default {
  name: "Filters",
  props: {
    
  },
  data() {
    return {
      Icon:{
        name: 'bookmark-heart'
      },
      fill: false,
      rows: 50,
      currentPage:1,
      selectSort: null,
      sort: [
        { text: 'Relevance', value: 'relevance' },
        { text: 'A-Z', value: 'ascend' },
        { text: 'Z-A', value: 'descend' },
        { text: 'New Added', value: 'newAdd' },
        { text: 'Available', value: 'available' },
      ],
      selectLocation: [], 
      location: [
        { text: 'Talamban Campus', value: 'talamban' },
        { text: 'North Campus', value: 'north' },
        { text: 'South Campus', value: 'south' },
        { text: 'Downtorn Campus', value: 'downtown' },
        { text: 'Montessori Academy', value: 'montessori' },
      ],
      selectType: [], 
      type: [
        { text: 'Book', value: 'book' },
        { text: 'Journal', value: 'journal' },
        { text: 'Article', value: 'article' },
        { text: 'Video', value: 'video' },
        { text: 'Thesis', value: 'thesis' },
      ],
    }
  },
  methods: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.results{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  font-family: 'Nunito', sans-serif;
}

.filter{
  width: 30%;
  /* background: #bdc3c7; */
  margin-left: 2em;
  margin-top: 2.5em;
  padding: 0em 3em 1em 4em;
  /* padding-left:3em; */
}

h5{
  margin-bottom: 1.5em;
}

.result{
  width:64%;
  background: #D7DDE8;
  margin-left: 1em;
  margin-top: 2.5em;
  ;padding: 1em;
  ;padding-left:2em;
}

img{
  width:62%;
}

p{
  margin-bottom: 0em ;
}

svg{
    color:#40798C;
}

button{
  background-color: #D7DDE8;
  border-color:#D7DDE8;
}

button:on hover{
  background-color: #D7DDE8;
}
</style>
