<template>
  <div class="about">
    <div class="container">

      <div class="row">
        <div class="col-md-3">
          <div class="card libCamp">
            <div class="list-group text-left">
            <b-list-group>
              <b-list-group-item 
                v-b-toggle.downtowncamp 
                v-bind:class="{ 'active' : isSelected(-1) }" 
                v-on:click="selected = -1">
                Downtown Campus
                <v-icon right small>fas fa-arrow-down</v-icon>
              </b-list-group-item>
              <b-collapse id="downtowncamp">
                <b-list-group-item href="#" v-bind:class="{ 'active' : isSelected(0) }" v-on:click="toggle(0); selected = 0">
                  <small>American Corner</small>
                </b-list-group-item>
                <b-list-group-item href="#" v-bind:class="{ 'active' : isSelected(1) }" v-on:click="toggle(1); selected = 1">
                  <small>Bernard Bonk Library</small>
                </b-list-group-item>
                <b-list-group-item href="#" v-bind:class="{ 'active' : isSelected(2) }" v-on:click="toggle(2); selected = 2">
                  <small>Law Library</small>
                </b-list-group-item>
              </b-collapse>
              <b-list-group-item href="#" v-bind:class="{ 'active' : isSelected(3) }" v-on:click="toggle(3); selected = 3">
                Talamban Campus
              </b-list-group-item>
              <b-list-group-item href="#" v-b-toggle.southcamp v-bind:class="{ 'active' : isSelected(-2) }" v-on:click="selected = -2">
                South Campus
                <v-icon right small>fas fa-arrow-down</v-icon>
              </b-list-group-item>
              <b-collapse id="southcamp">
                <b-list-group-item href="#" v-bind:class="{ 'active' : isSelected(4)}" v-on:click="toggle(4); selected = 4">
                  <small>Educational Library</small>
                </b-list-group-item>
                <b-list-group-item href="#" v-bind:class="{ 'active' : isSelected(5) }" v-on:click="toggle(5); selected = 5">
                  <small>Elementary Library</small>
                </b-list-group-item>
                <b-list-group-item href="#" v-bind:class="{ 'active' : isSelected(6) }" v-on:click="toggle(6); selected = 6">
                  <small>High School Library</small>
                </b-list-group-item>
              </b-collapse>
              <b-list-group-item href="#" v-bind:class="{ 'active' : isSelected(7) }" v-on:click="toggle(7); selected = 7">
                North Campus
              </b-list-group-item>
            </b-list-group>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card libInfo">
            <div class="card-body">
              <div>
                <h5 class="text-left">{{info.libName}}</h5>
                <h6 class="text-left">{{info.campName}}</h6>
                <div>
                  <div class="row">
                    <span><v-icon left small>fas fa-map-marker-alt</v-icon></span>
                    <small class="text-left">{{info.campAdd}}</small>
                  </div>
                  <div class="row">
                    <span><v-icon left small>fas fa-clock</v-icon></span>
                    <small class="text-left">{{info.campTime}}</small>
                  </div>
                </div>
                <div class="row content">
                  <p class="text-left">{{info.content}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-1">
          <div class="card libContact mx-auto">
            <div class="card-body">
              <h5 class="card-title text-left">Contact Us</h5>
              <p class="card-text text-left">Contact Person</p>
              <p class="card-text small text-muted text-left">position</p>
              <p class="card-subtitle text-left">###</p>
              <p class="card-subtitle text-left">email</p>
            </div>
          </div>
        </div> 

      </div>
    </div>

  </div>
</template>


<script>
export default {
  name: 'Libraries',
  data() {
    return {
      selected: 0,
      info: [
        { 
          libName: "",
          campName: "",
          campAdd: "",
          campTime: "",
          content: ""
        }
      ],
      campuses: [
              { 
                libName: "American Corner",
                campName: "Downtown Campus",
                campAdd: "Pantaleon del Rosario Street, Cebu City, Philippines 6000.",
                campTime: "7:30 a.m. to 8:00 p.m.",
                content: "lorem ipsum"
              },
              { 
                libName: "Bernard Bonk Library",
                campName: "Downtown Campus",
                campAdd: "Pantaleon del Rosario Street, Cebu City, Philippines 6000.",
                campTime: "7:30 a.m. to 8:00 p.m.",
                content: ""
              },
              { 
                libName: "Law Library",
                campName: "Downtown Campus",
                campAdd: "Pantaleon del Rosario Street, Cebu City, Philippines 6000.",
                campTime: "8:00 a.m. to 8:00 p.m.",
                content: ""
              },
              { 
                libName: "Josef Baumgartner Learning Resource Center (JB-LRC)",
                campName: "Talamban Campus",
                campAdd: "Gov. M. Cuenco Ave, Cebu City, 6000 Cebu.",
                campTime: "7:30 a.m. to 6:00 p.m.",
                content: ""
              },
              { 
                libName: "Education Library",
                campName: "South Campus",
                campAdd: "J. Alcantara St, Cebu City, 6000 Cebu",
                campTime: "7:30 a.m. to 6:30 p.m. Monday to Friday, 8:00 a.m. to 5:30 p.m. Saturday",
                content: ""
              },
              { 
                libName: "Elementary Library",
                campName: "South Campus",
                campAdd: "J. Alcantara St, Cebu City, 6000 Cebu",
                campTime: "7:00 a.m. to 5:30 p.m.",
                content: ""
              },
              { 
                libName: "High School Library",
                campName: "South Campus",
                campAdd: "J. Alcantara St, Cebu City, 6000 Cebu.",
                campTime: "7:00 a.m. to 5:30 p.m.",
                content: ""
              },
              {
                libName: "Basic Education Library",
                campName: "North Campus",
                campAdd: "General Maxilom Ave, Cebu City, 6000 Cebu.",
                campTime: "7:00 a.m. to 5:30 p.m.",
                content: ""
              },
              {
                libName: "Montessori Academy Library",
                campName: "Montessori Academy",
                campAdd: "F. Cebu City Don Filemon Sotto Drive, Cebu City, 6000 Cebu.",
                campTime: "nan",
                content: ""
              }
          ]
    }
  },
  methods: {
    refresh: function() {
      return this.info = this.campuses[0]
    },
    isSelected: function(id) {
      return id === this.selected
    },
    toggle: function(id) {
      this.info = this.campuses[id]
    }
  },
  beforeMount(){
    this.refresh()
  }
}
</script>

<style scoped>
i.v-icon.v-icon {
  color: grey;
} 
.active{ 
  background-color: #6c757d ;
}
.libCamp {
  width: 100%; 
}
.libInfo {
  width: 100%; 
  padding: 5px;
}
.libContact {
  width: 18rem
}
.content {
  margin: 10px;
}
</style>