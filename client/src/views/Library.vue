<template>
  <div class="about">
    <b-card 
      border-variant="light"
    >
      <div class="row">
        <div class="col-md-3">
          <div class="card libCamp">
            <div class="list-group text-left">
            <b-list-group>
              <b-list-group-item 
                v-b-toggle.downtowncamp 
                v-bind:class="{ 'active' : isSelected(-1) }" 
                v-on:click="selected = -1"
              >
                <span>Downtown Campus</span><v-icon right small>fas fa-arrow-down</v-icon>
              </b-list-group-item>
              <b-collapse id="downtowncamp">
                <b-list-group-item 
                  href="#" 
                  v-bind:class="{ 'active' : isSelected(0) }" 
                  v-on:click="toggle(0); selected = 0"
                >
                  <small>American Corner</small>
                </b-list-group-item>
                <b-list-group-item 
                  href="#" 
                  v-bind:class="{ 'active' : isSelected(1) }" 
                  v-on:click="toggle(1); selected = 1"
                >
                  <small>Bernard Bonk Library</small>
                </b-list-group-item>
                <b-list-group-item 
                  href="#" 
                  v-bind:class="{ 'active' : isSelected(2) }" 
                  v-on:click="toggle(2); selected = 2"
                >
                  <small>Law Library</small>
                </b-list-group-item>
              </b-collapse>
              <b-list-group-item 
                href="#" 
                v-bind:class="{ 'active' : isSelected(3) }" 
                v-on:click="toggle(3); selected = 3"
              >
                <span>Talamban Campus</span>
              </b-list-group-item>
              <b-list-group-item 
                href="#" 
                v-b-toggle.southcamp 
                v-bind:class="{ 'active' : isSelected(-2) }" 
                v-on:click="selected = -2"
              >
                <span>South Campus</span><v-icon right small>fas fa-arrow-down</v-icon>
              </b-list-group-item>
              <b-collapse id="southcamp">
                <b-list-group-item 
                  href="#" 
                  v-bind:class="{ 'active' : isSelected(4)}" 
                  v-on:click="toggle(4); selected = 4"
                >
                  <small>Educational Library</small>
                </b-list-group-item>
                <b-list-group-item 
                  href="#" 
                  v-bind:class="{ 'active' : isSelected(5) }" 
                  v-on:click="toggle(5); selected = 5"
                >
                  <small>Elementary Library</small>
                </b-list-group-item>
                <b-list-group-item 
                  href="#" 
                  v-bind:class="{ 'active' : isSelected(6) }" 
                  v-on:click="toggle(6); selected = 6"
                >
                  <small>High School Library</small>
                </b-list-group-item>
              </b-collapse>
              <b-list-group-item 
                href="#" 
                v-bind:class="{ 'active' : isSelected(7) }" 
                v-on:click="toggle(7); selected = 7"
              >
                <span>North Campus</span>
              </b-list-group-item>
            </b-list-group>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card libInfo">
            <div class="card-body">
              <div>
                <div>
                  <h4 class="text-left">{{info.libName}}</h4>
                  <h6 class="text-left">{{info.campName}}</h6>
                </div>
                <div class="lib-info">
                  <div class="row">
                    <span><v-icon left small class="icon">fas fa-map-marker-alt</v-icon></span>
                    <small class="text-left">{{info.campAdd}}</small>
                  </div>
                  <div class="row">
                    <span><v-icon left small class="icon">fas fa-clock</v-icon></span>
                    <small class="text-left">{{info.campTime}}</small>
                  </div>
                </div>
                <div class="row">
                  <p class="text-content" v-html="info.content"></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-1">
          <div class="card libContact mx-auto">
            <div class="card-body">
              <h6 class="card-title text-left">Contact Us</h6>
              <p class="contactInfo"><strong>Contact Person: </strong>{{libContact.person}}</p>
              <p class="contactInfo"><strong>Position: </strong>{{libContact.position}}</p>
              <p class="contactInfo"><strong>Phone: </strong>{{libContact.telNo}}</p>
              <p class="contactInfo"><strong>Email: </strong>{{libContact.email}}</p>
            </div>
          </div>
        </div> 

      </div>
    </b-card>

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
                content: "<p><small>The American Corner (AC) in the University of San Carlos (USC) is the first of its kind in Cebu and the fourteenth in the entire Philippines. The American Corner is a joint partnership project of the USC and the US Embassy. AC aims to promote cooperation and understanding between the U.S. and the Philippines by providing free access to the local community its current and factual information about the United States, its peoples and its policies. Information is provided in a variety of formats which include books, journal, magazines and multimedia resources including digital video conferencing facility.</small></p>  <p><small>The American Corner was launched on December 14, 2009 at the Joseph Baumgartner Central Library. United States Ambassador Kristie A. Kenney was the special guest of honor for this momentous ocassion. The Carolinian community headed by the University President - Fr. Dionisio Miranda, SVD, Vice President for Academic Affairs - Fr. Felino Javines, Jr. SVD and Director of Libraries - Dr. Marilou P. Tadlip formally welcomed the Ambassador Kenney. The Ambassador greeted addressed the invited guests from government offices, media, and representatives from the universities in Cebu City, along with the deans, chairs, faculty members, staff and students of USC. She stressed that the new facility serves as an information outpost similar to public library reference service that contains a comprehensive account about the United States. She further said, We want the American Corner to be a center for learning. I hope you will take advantage of the oppotunity, to look up information about your dreams, do dome research here, learn a little bit and broaden your mind.</small></p>"
              },
              { 
                libName: "Bernard Bonk Library",
                campName: "Downtown Campus",
                campAdd: "Pantaleon del Rosario Street, Cebu City, Philippines 6000.",
                campTime: "7:30 a.m. to 8:00 p.m.",
                content: "<p><small>The Bernard Bonk Library is also known SBE Library that serves the undergraduate and graduate students and faculty members from the School of Business and Economics and other customers of the University who need to utilize the library collections. SBE is composed of following departments: Accountancy, Business Administration, Economics and Hospitality and Tourism.</small></p>"
              },
              { 
                libName: "Law Library",
                campName: "Downtown Campus",
                campAdd: "Pantaleon del Rosario Street, Cebu City, Philippines 6000.",
                campTime: "8:00 a.m. to 8:00 p.m.",
                content: "<p><small>The Law Library was established with the founding of the Law School in 1937. The library was one of the recipients of the Model Centennial Law Library Award given by the Supreme Court of the Philippines during its centennial celebration in 2001.</small></p>  <p><small>The Law Library, located on the 5th floor of the Law and Graduate Business Building, Main Campus, has a total seating capacity of 250 including individual Study Carrels. The area has five divisions namely:</small></p> <ul><li><small>Knowledge Navigation Center (KNC)</small></li> <li><small>KReading Area</small></li> <li><small>Perk Room/ Discussion Room</small></li> <li><small>Quiet Rooms</small></li> <li><small>Student Lounge</li></ul>"
              },
              { 
                libName: "Josef Baumgartner Learning Resource Center (JB-LRC)",
                campName: "Talamban Campus",
                campAdd: "Gov. M. Cuenco Ave, Cebu City, 6000 Cebu.",
                campTime: "7:30 a.m. to 6:00 p.m.",
                content: "<p><small>The largest library in the country. The 16,000 square meter library, JB-LRC of the University of San Carlos, is located at Talamban Campus with a sprawling space that can accommodate 1,800 library users. The imposing library edifice, the one-stop knowledge hub of the university, blessed and officially inaugurated last March 8, 2012 is named in honor of the late Fr. Josef Baumgartner, SVD (1913-2011), known as the father of the USC Library.</small></p>"
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
          ],
      libContact: [
        {
          person: "",
          position: "",
          telNo: "",
          email: ""
        }
      ],
      contact: [
        {
          person: "Ms. Mary-Gwyn Corazon Caro, RL",
          position: "AC Librarian",
          telNo: "2300-100 local 570",
          email: "mlcaro@usc.edu.ph"
        },
        {
          person: "Ms. Divina Tenorio, RL, MS",
          position: "SBE Librarian",
          telNo: "dctenorio@usc.edu.ph",
          email: "2300-100 local 570"
        },
        {
          person: "",
          position: "",
          telNo: "2300-100 local 569",
          email: "usclawlib569@gmail.com"
        },
        {
          person: "Maxie Doreen L. Cabarron, RL, MS",
          position: "Director of Libraries",
          telNo: "(032) 2300-100 local 194",
          email: "libdirector@usc.edu.ph"
        },
        {
          person: "",
          position: "",
          telNo: "",
          email: ""
        },
        {
          person: "",
          position: "",
          telNo: "",
          email: ""
        },
        {
          person: "",
          position: "",
          telNo: "",
          email: ""
        },
        {
          person: "",
          position: "",
          telNo: "",
          email: ""
        },
        {
          person: "",
          position: "",
          telNo: "",
          email: ""
        }
      ]
    }
  },
  methods: {
    refreshCamp: function() {
      return this.info = this.campuses[0]
    },
    refreshLibContact: function() {
      return this.libContact = this.contact[0]
    },
    isSelected: function(id) {
      return id === this.selected
    },
    toggle: function(id) {
      this.info = this.campuses[id]
      this.libContact = this.contact[id]
    }
  },
  beforeMount(){
    this.refreshCamp()
    this.refreshLibContact()
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
.contactInfo{
  font-size: 12px;
}
.lib-info {
  margin-top: 5px;
  margin-left: 10px;
  margin-bottom: 5px;
}
.icon {
  margin-bottom: 6px;
}
.text-content {
  padding: 20px;
  text-align: justify;
}
</style>