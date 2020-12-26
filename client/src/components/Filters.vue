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
          <b-row v-for="book in books" :key="book.id" :items="books" :per-page="perPage" :current-page="currentPage">
            <b-col cols="3" align-self="center" class="d-flex justify-content-center">
              <img :src="book.cover" :alt="book.title">
            </b-col>
            <b-col cols="8">
              <h4><strong>{{book.title}}</strong></h4>
              <p>By {{book.authorfname}}{{book.authorlname}}</p>
              <p>{{book.publisher}}</p>
              <p>{{book.publishDate}}</p>
              <p><strong>Location</strong></p>
              <p>{{book.location}}</p>
            </b-col>
            <b-col cols="1">
              <b-button v-b-tooltip.hover title="Add to My Collection" variant="light" :v-on:click="book.fill = !book.fill">
                <b-icon :icon="book.fill ? 'bookmark-heart-fill' : 'bookmark-heart'" aria-hidden="true" scale="1.5" class="mt-2"></b-icon>
              </b-button>
            </b-col>
          </b-row>
          <hr>
      </div>
    </div>
    <div class="overflow-auto mt-4 mr-5">
      <b-pagination v-model="currentPage" pills :total-rows="rows" :per-page="perPage" aria-controls="res-book" align="right"></b-pagination>
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
      perPage: 5,
      currentPage: 1,
      books: [
        {
          id:1,
          title: "Harry Potter and the Philosopher's Stone",
          authorlname: 'Rowling',
          authorfname: 'J.K.',
          ISBN: '978-0439708180',
          publishDate: 'September 1, 1998',
          publisher: 'Scholastic Education',
          cover:require('../assets/books/hp1.jpg'),
          location:'JB-LRC, Talamban Campus',
          status:'Available',
          fill:false
        },
        {
          id:2,
          title: "Harry Potter and the Chamber of Secrets",
          authorlname: 'Rowling',
          authorfname: 'J.K.',
          ISBN: '978-0439064873',
          publishDate: 'September 9, 2000',
          publisher: 'Scholastic Education',
          cover: require('../assets/books/hp2.jpg'),
          location:'JB-LRC, Talamban Campus',
          status:'Available',
          fill:false
        },
        {
          id:3,
          title: "Harry Potter and the Prisoner of Azkaban",
          authorlname: 'Rowling',
          authorfname: 'J.K.',
          ISBN: '978-0439136365',
          publishDate: 'October 1, 2001',
          publisher: 'Scholastic Education',
          cover:require('../assets/books/hp3.jpg'),
          location:'JB-LRC, Talamban Campus',
          status:'Available',
          fill:false
        },
        {
          id:4,          
          title: "Harry Potter and the Goblet of Fire",
          authorlname: 'Rowling',
          authorfname: 'J.K.',
          ISBN: '978-0439139601',
          publishDate: 'September 1, 2002',
          publisher: 'Scholastic Education',
          cover:require('../assets/books/hp4.jpg'),
          location:'JB-LRC, Talamban Campus',
          status:'Available',
          fill:false
        },
        {
          id:5,          
          title: "Harry Potter and the Order of the Phoenix",
          authorlname: 'Rowling',
          authorfname: 'J.K.',
          ISBN: '978-0439358071',
          publishDate: 'September 1, 2004',
          publisher: 'Scholastic Education',
          cover:require('../assets/books/hp5.jpg'),
          location:'JB-LRC, Talamban Campus',
          status:'Available',
          fill:false
        }, 
        {
          id:6,          
          title: "Harry Potter and the Half-Blood Prince",
          authorlname: 'Rowling',
          authorfname: 'J.K.',
          ISBN: '978-0439785969',
          publishDate: 'July 25, 2006',
          publisher: 'Scholastic Education',
          cover:require('../assets/books/hp6.jpg'),
          location:'JB-LRC, Talamban Campus',
          status:'Available',
          fill:false
        },  
        {
          id:7,          
          title: "Harry Potter and the Deathly Hallows",
          authorlname: 'Rowling',
          authorfname: 'J.K.',
          ISBN: '978-0545139700',
          publishDate: 'July 01, 2009',
          publisher: 'Scholastic Education',
          cover:require('../assets/books/hp7.jpg'),
          location:'JB-LRC, Talamban Campus',
          status:'Available',
          fill:false
        },     
      ],
      // fill: false,
      // fill1: false,
      // fill2: false,
      // fill3: false,
      // fill4: false,
      selectSort: [0],
      sort: [
        { text: 'Relevance', value: 'relevance' },
        { text: 'A-Z', value: 'ascend' },
        { text: 'Z-A', value: 'descend' },
        { text: 'New Added', value: 'newAdd' },
        { text: 'Available', value: 'available' },
      ],
      selectLocation: [0], 
      location: [
        { text: 'Talamban Campus', value: 'talamban' },
        { text: 'North Campus', value: 'north' },
        { text: 'South Campus', value: 'south' },
        { text: 'Downtorn Campus', value: 'downtown' },
        { text: 'Montessori Academy', value: 'montessori' },
      ],
      selectType: [0], 
      type: [
        { text: 'Book', value: 'book' },
        { text: 'Journal', value: 'journal' },
        { text: 'Article', value: 'article' },
        { text: 'Video', value: 'video' },
        { text: 'Thesis', value: 'thesis' },
      ],
    }
  },
  computed: {
    // get lists() {
    //   return this.books.slice(
    //     (this.currentPage-1)*this.perPage,
    //     this.currentPage * this.perPage,
    //   );
    // },
    rows() {
      return this.books.length
      // return this.$store.getters.loadedLists.length
    }
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
