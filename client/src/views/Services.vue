<template>
  <div class="about">
    <h1>This is a service  page</h1>

    <div class="row">
      <div class="col"></div>
      <div class="col-8">
        <b-card
          style="max-width: 100%;" 
          bg-variant="light"
        >
          <b-tabs 
            v-model="tabIndex" 
            card
            active-nav-item-class="font-weight-bold"
            active-tab-class="text-dark"
            content-class="mt-3"
            align="center"
          >
            <b-tab title="Information Literacy Program" :title-link-class="linkClass(0)">
              Video + Info about the program
              <div>
                <!-- <b-embed
                  type="iframe"
                  aspect="16by9"
                  src= "https://www.youtube.com/embed/yIvb4csSgcs"
                  allowfullscreen
                ></b-embed> -->
              </div>
            </b-tab>
            <b-tab title="Library Services" :title-link-class="linkClass(1)">
              Service info of the library
            </b-tab>
            <b-tab title="AV Services" :title-link-class="linkClass(2)">
              different AV rooms available
            </b-tab>
            <b-tab title="Tutorials" :title-link-class="linkClass(3)">
              link of videos for tutorials on library system
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
      <div class="col"></div>
    </div>

  </div>
</template>


<script>
export default {
    data() {
      return {
        tabIndex: 0
      }
    },
    methods: {
      linkClass: function(idx) {
        if (this.tabIndex === idx) {
          //text when active
          return ['bg-secondary', 'text-light']
        } else {
          //text when not active
          return ['bg-light', 'text-dark']
        }
      }
    }
}
</script>

<style scoped>
</style>