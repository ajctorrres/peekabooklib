<template>
  <div class="about">

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
              <!-- Video + Info about the program -->
              <div>
                <b-embed type="video" controls poster="poster.png">
                  <source src="~@/assets/USC_ILP.mp4" type="video/mp4">
                </b-embed>
              </div>
            </b-tab>
            <b-tab title="Library Services" :title-link-class="linkClass(1)">
              <!-- Service info of the library -->
              <div>
                <b-card no-body>
                  <b-tabs pills card vertical nav-wrapper-class="w-30" v-model="libServicesTabIndex">
                    <b-tab title="Circulation" :title-link-class="libServicesTabClass(0)">
                      <b-card-text>
                        <p v-for="(item, index) in circulation" :key="index">
                          <span v-html="item.title"></span>
                          <span v-html="item.desc"></span>
                        </p>
                      </b-card-text>
                    </b-tab>
                    <b-tab title="Current Awareness Service" :title-link-class="libServicesTabClass(1)">
                      <b-card-text>
                        <p v-for="(item, index) in curr_aware" :key="index">
                          <span v-html="item.title"></span>
                          <span v-html="item.desc"></span>
                        </p>
                      </b-card-text>
                    </b-tab>
                    <b-tab title="Information Literacy" :title-link-class="libServicesTabClass(2)">
                      <b-card-text>
                        <span v-html="information_lit[0].title"></span>
                        <span v-html="information_lit[0].desc"></span>
                        <p v-for="(item, index) in infor_lit" :key="index">
                          <span v-html="item.title"></span>
                          <span v-html="item.desc"></span>
                        </p>
                      </b-card-text>
                    </b-tab>
                    <b-tab title="JB-LRC Space Utilzation Service" :title-link-class="libServicesTabClass(3)">
                      <b-card-text>
                        <span v-html="jblrc_space_util[0].title"></span>
                        <span v-html="jblrc_space_util[0].desc"></span>
                        <span v-html="jblrc_space_util[1].title"></span>
                        <p v-for="(item, index) in jblrc_space_util[1].desc" :key="index">
                          {{ index + 1 }}.) {{ item.cont }}
                        </p>
                      </b-card-text>
                    </b-tab>
                    <b-tab title="Laptop for a fee" :title-link-class="libServicesTabClass(4)">
                      <b-card-text>
                        <span v-html="laptop[0].desc"></span>                        
                        <span v-html="laptop[1].title"></span>
                        <li v-for="(item, index) in laptop[1].desc" :key="index">
                          {{ item.cont }}
                        </li>
                        <span v-html="laptop[2].title"></span>
                        <span v-html="laptop[3].title"></span>
                        <li v-for="(item, index) in laptop[3].desc" :key="index">
                          {{ item.cont }}
                        </li>
                      </b-card-text>
                    </b-tab>
                    <b-tab title="Interlibrary Loan, Referrals" :title-link-class="libServicesTabClass(5)">
                      <b-card-text>
                        <p v-for="(item, index) in interlib_loan_ref" :key="index">
                          <span v-html="item.title"></span>
                          <span v-html="item.desc"></span>
                        </p>
                      </b-card-text>
                    </b-tab>
                    <b-tab title="Reading Advisory Guidance" :title-link-class="libServicesTabClass(6)">
                      <b-card-text>
                        <span v-html="read_adv_guide "></span>
                      </b-card-text>
                    </b-tab>
                    <b-tab title="Reference and Information" :title-link-class="libServicesTabClass(7)">
                      <b-card-text>
                        <p v-for="(item, index) in ref_and_info" :key="index">
                          <span v-html="item.title"></span>
                          <span v-html="item.desc"></span>
                        </p>
                      </b-card-text>
                    </b-tab>
                    <b-tab title="Storytelling and Book Talk" :title-link-class="libServicesTabClass(8)">
                      <b-card-text>
                        <span v-html="storytell_and_booktalk"></span>
                      </b-card-text>
                    </b-tab>
                  </b-tabs>
                </b-card>
              </div>
            </b-tab>
            <b-tab title="AV Services" :title-link-class="linkClass(2)">
              <div class="row">
                <p>List of the different AV rooms available in the University:</p>
                <div class="col-md-3"></div>
                <div class="col-md-7">
                  <div>
                    <li v-for="(av, index) in avServices" :key="index">{{av.room}}</li>
                  </div>
                  <div class="row mt-2">
                    <p>For AV Center Services reservation: <a href="https://forms.gle/hLLkxGpaxVUsgj1M9">Click Here</a> </p>
                  </div>
                </div>
                <div class="col-md-2"></div>
              </div>
            </b-tab>
            <b-tab title="Tutorials" :title-link-class="linkClass(3)">

               <b-table :items="tutorials">
                 <template #cell(title_and_description)="data">
                  <span v-html="data.value"></span>
                 </template>
                 <template #cell(vid)="data">
                   <span v-html="data.value"></span>
                   <!-- <b-embed type='video' controls poster='poster.png'> 
                     <source src="data.value" type='video/mp4'> 
                    </b-embed> -->
                  </template>
                </b-table>

                <!-- <div>
                  <b-embed type="video" controls poster="poster.png">
                    <source src="~@/assets/EBSCOhost Advanced Searching.mp4" type="video/mp4">
                  </b-embed>
                </div>
                <div>
                  <b-embed type="video" controls poster="poster.png">
                    <source src="~@/assets/EBSCOhost Basic Search.mp4" type="video/mp4">
                  </b-embed>
                </div> -->
              <!-- How to access the electronic resources in USC Library? -->
              <!-- https://www.youtube.com/watch?v=wLYScYq-rUk&ab_channel=USCLibrary -->
              <!-- Turnitin - Introductory Video -->
              <!-- https://www.youtube.com/watch?v=iL-KEgSbs3o&ab_channel=TurnitinAcademy -->
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
        tabIndex: 0,
        libServicesTabIndex: 0,
        circulation: [
          { title: "<li><strong>Book Borrowing</strong></li>",
            desc: "" 
          },
          { 
            title: "<li><strong>Reserve Book Service</strong></li>",
            desc: "<p>Faculty members may place books on a particular subject on reserve. Their students may borrow the books by the hour or for overnoon and overnight use at the Reserved Book Section.</p>" 
          },
          { 
            title: "<li><strong>Book Reservation</strong></li>",
            desc: "<p>Administrators, faculty members, and administrative staff who have urgent processing requests are notified by phone when the books are delivered to the Circulation Counter.</p>" 
          },
          { 
            title: "<li><strong>Stack Service</strong></li>",
            desc: "<p>Shelvers maintain the books in accurate arrangement to ensure efficiency in searching and locating the volumes for use by different customers.</p>" 
          },
          { 
            title: "<li><strong>Document Delivery</strong></li>",
            desc: "" 
          }
        ],
        curr_aware: [
          { 
            title: "<li><strong>Acquisitions List</strong></li>",
            desc: "<p>Librarians prepare and distribute acquisitions lists which enumerate the materials acquired by the libraries in certain periods within the semester.</p>" 
          },
          { 
            title: "<li><strong>Table of Contents' List</strong></li>",
            desc: "<p>A copy of the table of contents of selected core journal is prepared every time new issues arrive. This is distributed to academic departments.</p>" 
          },
          { 
            title: "<li><strong>Periodical Routing</strong></li>",
            desc: "<p>Recent issues of selected professional journals in different fields are routed to some academic and administrative heads upon request.</p>" 
          }
        ],
        information_lit: [
          {
            title: "<p><strong>Information Literacy (IL)What IL Is and Why IL Is Important</strong></p>",
            desc: "<p>Information Literacy is the set of skills needed to find, retrieve, analyze, and use information. Information Literacy helps us to cope by giving us the skills to know when we need information and where to locate it effectively and efficiently. It includes the technological skills needed to use the modern library as a gateway to information. It enables us to analyze and evaluate the information we find, thus giving us confidence in using that information to make a decision or create a product. Information Literacy Program at USC Library System </p>"
          }
        ],
        infor_lit: [
          { 
            title: "<li><strong>Library Tour</strong></li>",
            desc: "" 
          },
          { 
            title: "<li><strong>Library Orientation</strong></li>",
            desc: "<p>provides a good understanding of the libraries core function, slogan, facilities, resources and services. This service is offered to undergraduate freshmen and transferees during the start of every semester in collaboration with the Department of Languages and Literature through the English 1 subject.</p>" 
          },
          { 
            title: "<li><strong>Library Instruction</strong></li>",
            desc: "<p>is also called user education. Its goal is to teach users how to search, evaluate, and use information and how to use the library effectively and independently. The Library Instruction module covers the following: Steps in Library Research and The Different Search Tools namely: Library of Congress List of Subject Heading, OPAC, Online Databases and the Internet. Generally given to formal classes, it may also be requested by small groups.</p>" 
          },
          { 
            title: "<li><strong>Bibliographic Instruction (BI)</strong></li>",
            desc: "<p> is an instructional program designed to teach library users how to locate the information they need quickly and effectively.</p> <p>In USC library BI is done through: </p> <ul><li>Teaching patrons how to locate and use library materials</li> <li>Teaching patrons how to evaluate the information they find</li> <li>Introducing patrons to database searching</li> <li>Introducing patrons to searching the library's online catalogues, indexes and abstracts</li> <li>Helping patrons become aware of information as it exists in its different formats: print, non-print, electronic and online.</li> </ul>" 
          },
          { 
            title: "<li><strong>Library Tour</strong></li>",
            desc: "<p>Below are the list of tutorials made available for USC clients. The files are saved in Small Web Format (SWF). You may need to download and install the free software adobe flash player to view the files. Clicking on the links will open a new window and may take a while to load depending on the file size.</p><p><strong>Online Public Access Catalog</strong></p><li><a>Interactive OPAC Tutorials</a>(70Mb progressive download)</li>" 
          },
          { 
            title: "<li><strong>Bibliographic Assistance</strong></li>",
            desc: "<li><strong>Bibliography-Making</strong><p>Librarians prepare bibliographies on certain subjects upon request by departments.</p></li> <li><strong>Acquisitions Lists</strong><p>Librarians prepare and distribute acquisitions lists which enumerate the materials acquired by the libraries in certain periods within the semester. The lists are written in bibliographic format.</p></li>" 
          }

        ],
        interlib_loan_ref: [
          {
            title: "<p><strong>These are the intralibrary loan guidelines within the System:</strong></p>",
            desc: "<ul> <li>An administrator places a request for books with his college librarian; these books are available only in another USC library.</li> <li>The librarians arrange for the temporary placement of the requested books in the library.</li> <li>When the books arrive, the customer is notified. (In most cases requested books will arrive within two to three days.</li> <li>He may borrow the books in his library; he does not have to go out of the campus to borrow.</li> </ul>"
          },
          {
            title: "<p><strong>Interlibrary Loans Outside the System</strong></p>",
            desc: "<ul> <li>Science Library and Health Sciences Library link up with DOST-7 Library for interlibrary loan purposes.</li> <li>The Acquisitions Unit handle interlibrary loan requests involving the National Library and academic libraries like Ateneo de Manila University, De La Salle University and other libraries with rich collections.</li> </ul>"
          }
        ],
        jblrc_space_util: [
          {
            title: "<p><strong>POLICY</strong></p>",
            desc: "<p>The Josef Baumgartner Learning Resource Center Spaces creates avenue for alternative learning by supporting the instruction, research and extension functions of the university.</p>"
          },
          {
            title: "<p><strong>Steps in applying for the use of Spaces at LRC:</strong></p>",
            desc: [
             { cont: "Applicant checks availability of LRC spaces, and equipment prior to reservation." },
             { cont: "Applicant accomplishes and files reservation form one week before the actual use of space and equipment." },
             { cont: "Have application form endorsed by the Student Activities Officer for Student Organizations and Department Chair/Dean/Administrative Head for classroom/instruction related activities." },
             { cont: "Information Desk/KNC Librarian registers and plots the schedule applied by the applicant in the booking/log book based on the reservation form submitted by the applicant. No schedule will be logged in the absence of the reservation form." },
             { cont: "Information Desk/KNC Librarian registers and plots the schedule applied by the applicant in the booking/log book based on the reservation form submitted by the applicant. No schedule will be logged in the absence of the reservation form." },
             { cont: "Have application form approved by the Director of Libraries and Vice-President for Administration for Campus Entry Permit." },
             { cont: "Submit reservation form to the Information Desk/KNC Librarian at the Josef Baumgartner Learning Resource Center. Copy 1- LRC Copy 2 - Requesting Party Copy 3 - Security Office" },
             { cont: "In case of cancellation /changes, Requesting Party must notify the Information Desk/KNC Librarian 2 days ahead so other applicants can assume the reservation." } 
            ]
          },
          {
            title: "<p><strong>Steps in applying for the use of spaces at LRC by Student Organizations/USC Affiliated Activities:</strong></p>",
            desc: [
              { cont: "Applicant checks availability of LRC space, and equipment prior to reservation." },
              { cont: "If LRC space and equipment are available on the requested date, accomplish Reservation Form." },
              { cont: "Have application form endorsed by Department Chair/Dean/Administrative Head for USC Affiliated Activities." },
              { cont: "Present accomplished form to the Information Desk/KNC Librarian who registers and plots the schedule in the log book and assess the space utilization fee. No schedule will be logged in the absence of the reservation form." },
              { cont: "Make Payment at the Bursar's Office." },
              { cont: "Have application form approved by the Director of Libraries and Vice-President for Administration for Campus Entry Permit." },
              { cont: "Submit reservation form to the Information Desk/KNC Librarian at the Josef Baumgartner Learning Resource Center. Copy 1- LRC     Copy 2 - Requesting Party     Copy 3 - Security Office" },
              { cont: "In case of cancellation /changes, requesting party should notify the Information Desk/KNC, 2 days ahead so other applicants can assume the reservation." }
            ]
          },
          {
            title: "<p><strong>Steps in applying for the use of spaces at LRC by Non- USC- Users:</strong></p>",
            desc: [
              { cont: "Applicant checks availability of LRC space, and equipment prior to reservation." },
              { cont: "If LRC space and equipment are available on the requested date, accomplish Reservation Form." },
              { cont: "Present accomplished form to the Information Desk/KNC Librarian who registers and plots the schedule in the log." },
              { cont: "book and assess the space utilization fee. No schedule will be logged in the absence of the reservation form." },
              { cont: "Make Payment at the Bursar's Office." },
              { cont: "Have application form approved by the Director of Libraries and Vice-President for Administration for Campus Entry Permit." },
              { cont: "Submit reservation form to the Information Desk/KNC Librarian at the Josef Baumgartner Learning Resource Center. Copy 1- LRC     Copy 2 - Requesting Party     Copy 3 - Security Office" },
              { cont: "In case of cancellation /changes, requesting party should notify the Information Desk/KNC, 2 days ahead so other applicants can assume the reservation." }
            ]
          }
        ],
        laptop: [
          {
            title: "",
            desc: "<p>Laptop computers are available for checkout to USC students, faculty and staff with a FEE. Laptops are available at the following libraries: Basic Education, Bonk, Education, JB-LRC and Law.</p>"
          },
          {
            title: "<p><strong>Laptop Circulation Rules</strong></p>",
            desc: [
              { cont: "Laptops may be checked out by bonafide library users who have a valid university ID."},
              { cont: "Patrons who wish to check out a laptop must read and conform to the Laptop Responsibility Agreement of the Library System."},
              { cont: "Laptop use is charged by the hour at Php 50.00. Loan period for laptops is 2 hours. Renewable for another hour. The Library System reserves the right to deny a renewal request."},
              { cont: "Only one laptop may be checked out per user."},
              { cont: "Laptops are for library use only. Users are not permitted to bring out the laptop from the library premises."},
              { cont: "Laptops may not be checked out for overnight."}
            ]
          },
          {
            title: "<p><strong>Fines and Replacement Fees</strong></p>",
            desc: "<li>Laptops must be returned to the Information Desk/KNC Librarian. Do not leave the laptop unattended at the KNC counter. Wait for the librarian to check in the laptop. Fines of Php 50.00 per hour will be assessed to the library users who fail to return the laptop on the scheduled time (due time). If the laptop is not returned within the library service hours, the user will be billed for the actual cost of the replacement and failure to return the laptops on time may resort to revoking the privilege to borrow the laptop for 1 semester.</li>"
          },
          {
            title: "<p><strong>Use Guidelines</strong></p>",
            desc: [
              { cont: "WIFI connection is available for users to connect free of charge using the laptop." },
              { cont: "Use a USB flash drive to save your files. Files will not be retained on the hard drive; they are automatically erased upon return." },
              { cont: "To print from the laptop, save your work and print at the KNC." },
              { cont: "Never leave the laptop unattended. While the laptop is in a User’s possession, the User shall be responsible for it all the time." },
              { cont: "If the laptop or any components (such as the power cord) is lost, stolen or damaged while check out to you, you are solely responsible for any and all repair or replacement fees. If laptop is stolen while signed out to a student , it should be reported immediately to the Information Desk/KNC Librarian" },
              { cont: "Laptops are to be used responsibly for academic purposes, and are not intended for gameplay, socializing, etc." }
            ]
          },
        ],
        read_adv_guide: "<p>Librarians guide pupils and students in choosing reading materials suited to their level. They provide oral annotations of books to those who are looking for something to read. During the Library Period, pupils may choose to finish one or more selections from English readers and answer the corresponding exercises for added points in the Reading subject. The librarians check the exercises and provide teachers results and feedback on pupils reading. On free reading time, pupils and students may choose from a wide array of award-winning books, beautifully illustrated books, books for browsing and books for serious reading.</p>",
        ref_and_info: [
          {
            title: "<p><strong>Information Desk Assistance</strong></p>",
            desc: "<p>Users needing assistance in the use of the Web-OPAC in particular and use of the library in general may approach the Information Desk.</p>"
          },
          {
            title: "<a><strong>KNC Services</strong></a>",
            desc: ""
          },
          {
            title: "<p><strong>Librarian Mediated Internet Search </strong></p>",
            desc: "<p>The librarian helps the customer search the Internet for relevant information and sources needed for research.</p>"
          },
          {
            title: "<p><strong>Discover and Explore</strong></p>",
            desc: "<p>For customers who want to discover and explore more, tutorial service on real time, visual, interactive, and networked databases is an option.</p>"
          },
          {
            title: "<p><strong>Text a Librarian (virtual reference)</strong></p>",
            desc: ""
          },
        ],
        storytell_and_booktalk: "<p>Librarians cultivate the love of books and reading by conducting storytelling sessions to pupils and book talks to students in the upper grades. With the use of language, vocalization, and physical movements to reveal the elements and images of a story in poems or prose, the librarians teach children how to listen and help them create their own images of what they have heard; their ability to imagine is developed.</p>",
        avServices: [
          { room: "AV Material Loan" },
          { room: "Hall Booking and Reservation"},
          { room: "Photo Documentation" },
          { room: "Project and Viewing Service" },
          { room: "Sound and Recording Service" },
          { room: "Sound System Service" },
          { room: "Video Coverage" }
        ],
        tutorials: [
          { 
            title_and_description: "<ul><strong>EBSCO Advanced Searching</strong></ul><p>This tutorial demonstrates how to use Advanced Searching on the EBSCOhost interface with the Guided Style Find Fields.</p>",
            vid: "<a>link</a>" 
          },
          { 
            title_and_description: "<p><strong>EBSCO Basic Tutorial</strong></p><p>This tutorial demonstrates how to create a Basic Search using EBSCOhost.</p>",
            vid: "<a>link</a>" 
          },
          { 
            title_and_description: "<p><strong>EBSCO Basic Tutorial</strong></p><p>This tutorial demonstrates how to create a Basic Search using EBSCOhost.</p>",
            vid: "<a  href='https://www.youtube.com/watch?v=wLYScYq-rUk&ab_channel=USCLibrary'>Click Here</a>" 
          },
          { 
            title_and_description: "<p><strong>EBSCO Basic Tutorial</strong></p><p>This tutorial demonstrates how to create a Basic Search using EBSCOhost.</p>",
            vid: "<p>Coming Soon</p>" 
          },
          { 
            title_and_description: "<p><strong>EBSCO Basic Tutorial</strong></p><p>This tutorial demonstrates how to create a Basic Search using EBSCOhost.</p>",
            vid: "<a href='https://www.youtube.com/watch?v=iL-KEgSbs3o&ab_channel=TurnitinAcademy'>Click Here</a>" 
          },

        ]
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
      },
      libServicesTabClass: function(idx) {
        if (this.libServicesTabIndex === idx) {
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
a {
  color: black;
}
a:hover {
  color: green;
  text-decoration: none;
}
</style>