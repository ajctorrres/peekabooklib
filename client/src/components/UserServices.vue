<template>
  <div class="services">
    <div class="row" style="margin-top: 50px">
      <div class="col-md-1"></div>
      <div class="col-md-10">

        <b-card style="max-width: 100%" border-variant="light">
          <b-tabs
            v-model="tabIndex"
            active-nav-item-class="font-weight-bold"
            active-tab-class="text-dark"
            content-class="mt-3"
            align="center"
            fill
          >
            <b-tab
              title="Information Literacy Program"
              :title-link-class="linkClass(0)"
            >
              <div>
                <b-embed type="video" controls poster="poster.png">
                  <source
                    src="../assets/services/USC_ILP.mp4"
                    type="video/mp4"
                  />
                </b-embed>
              </div>
            </b-tab>

            <b-tab title="Library Services" :title-link-class="linkClass(1)">
              <div>
                <b-tabs pills vertical small v-model="libServicesTabIndex">
                  <b-tab
                    title="Circulation"
                    :title-link-class="libServicesTabClass(0)"
                  >
                    <b-card>
                      <b-card-text class="libSerCont">
                        <ul>
                          <li><strong>Book Borrowing</strong></li>
                          <p></p>
                          <li><strong>Reserve Book Service</strong></li>
                          <p>
                            Faculty members may place books on a particular
                            subject on reserve. Their students may borrow the
                            books by the hour or for overnoon and overnight use
                            at the Reserved Book Section.
                          </p>
                          <li><strong>Book Reservation</strong></li>
                          <p>
                            Administrators, faculty members, and administrative
                            staff who have urgent processing requests are
                            notified by phone when the books are delivered to
                            the Circulation Counter.
                          </p>
                          <li><strong>Stack Service</strong></li>
                          <p>
                            Shelvers maintain the books in accurate arrangement
                            to ensure efficiency in searching and locating the
                            volumes for use by different customers.
                          </p>
                          <li><strong>Document Delivery</strong></li>
                        </ul>
                      </b-card-text>
                    </b-card>
                  </b-tab>
                  <b-tab
                    title="Current Awareness Service"
                    :title-link-class="libServicesTabClass(1)"
                  >
                    <b-card>
                      <b-card-text class="libSerCont">
                        <ul>
                          <li>
                            <strong
                              ><a
                                href="http://www.library.usc.edu.ph/contentpages.asp?loc=89"
                                >Acquisitions List</a
                              ></strong
                            >
                          </li>
                          <p>
                            Librarians prepare and distribute acquisitions lists
                            which enumerate the materials acquired by the
                            libraries in certain periods within the semester.
                          </p>
                          <li><strong>Table of Contents' List</strong></li>
                          <p>
                            A copy of the table of contents of selected core
                            journal is prepared every time new issues arrive.
                            This is distributed to academic departments.
                          </p>
                          <li><strong>Periodical Routing</strong></li>
                          <p>
                            Recent issues of selected professional journals in
                            different fields are routed to some academic and
                            administrative heads upon request.
                          </p>
                        </ul>
                      </b-card-text>
                    </b-card>
                  </b-tab>
                  <b-tab
                    title="Information Literacy"
                    :title-link-class="libServicesTabClass(2)"
                  >
                    <b-card>
                      <b-card-text class="libSerCont">
                        <p class="font-weight-bold">
                          Information Literacy (IL)What IL Is and Why IL Is
                          Important
                        </p>
                        <p>
                          Information Literacy is the set of skills needed to
                          find, retrieve, analyze, and use information.
                        </p>
                        <p>
                          Information Literacy helps us to cope by giving us the
                          skills to know when we need information and where to
                          locate it effectively and efficiently. It includes the
                          technological skills needed to use the modern library
                          as a gateway to information. It enables us to analyze
                          and evaluate the information we find, thus giving us
                          confidence in using that information to make a
                          decision or create a product.
                        </p>
                        <p>
                          Information Literacy Program at USC Library System
                        </p>
                        <div class="adjust">
                          <ul>
                            <li><strong>Library Tour</strong></li>
                            <p></p>
                            <li><strong>Library Orientation </strong></li>
                            <p>
                              provides a good understanding of the libraries
                              core function, slogan, facilities, resources and
                              services. This service is offered to undergraduate
                              freshmen and transferees during the start of every
                              semester in collaboration with the Department of
                              Languages and Literature through the English 1
                              subject.
                            </p>
                            <li><strong>Library Instruction</strong></li>
                            <p>
                              is also called user education. Its goal is to
                              teach users how to search, evaluate, and use
                              information and how to use the library effectively
                              and independently. The Library Instruction module
                              covers the following: Steps in Library Research
                              and The Different Search Tools namely: Library of
                              Congress List of Subject Heading, OPAC, Online
                              Databases and the Internet. Generally given to
                              formal classes, it may also be requested by small
                              groups.
                            </p>
                            <li>
                              <strong>Bibliographic Instruction (BI)</strong>
                            </li>
                            <p>
                              is an instructional program designed to teach
                              library users how to locate the information they
                              need quickly and effectively.
                            </p>
                            <p>In USC library BI is done through:</p>
                            <div class="adjust">
                              <ul class="circle">
                                <li>
                                  Teaching patrons how to locate and use library
                                  materials
                                </li>
                                <li>
                                  Teaching patrons how to evaluate the
                                  information they find
                                </li>
                                <li>
                                  Introducing patrons to database searching
                                </li>
                                <li>
                                  Helping patrons become aware of information as
                                  it exists in its different formats: print,
                                  non-print, electronic and online.
                                </li>
                              </ul>
                            </div>
                            <li><strong>Library Tutorials</strong></li>
                            <p>
                              Below are the list of tutorials made available for
                              USC clients. The files are saved in Small Web
                              Format (SWF). You may need to download and install
                              the free software adobe flash player to view the
                              files. Clicking on the links will open a new
                              window and may take a while to load depending on
                              the file size.
                            </p>
                            <strong>Online Public Access Catalog</strong>
                            <div class="adjust">
                              <ul class="circle">
                                <li>
                                  <a
                                    href="../assets/services/opac tutorial.swf"
                                    download
                                    >Interactive OPAC Tutorials</a
                                  >
                                </li>
                                <p>(70Mb progressive download)</p>
                              </ul>
                            </div>
                            <li><strong>Bibliographic Assistance</strong></li>
                            <div class="adjust">
                              <ul class="circle">
                                <li>
                                  <strong
                                    >Bibliography-Making Librarians</strong
                                  >
                                </li>
                                <p>
                                  prepare bibliographies on certain subjects
                                  upon request by departments.
                                </p>
                                <li><strong>Acquisitions Lists</strong></li>
                                <p>
                                  Librarians prepare and distribute acquisitions
                                  lists which enumerate the materials acquired
                                  by the libraries in certain periods within the
                                  semester. The lists are written in
                                  bibliographic format.
                                </p>
                              </ul>
                            </div>
                          </ul>
                        </div>
                      </b-card-text>
                    </b-card>
                  </b-tab>
                  <b-tab
                    title="JB-LRC Space Utilzation Service"
                    :title-link-class="libServicesTabClass(3)"
                  >
                    <b-card>
                      <b-card-text class="libSerCont">
                        <p class="text-uppercase font-weight-bold">policy</p>
                        <p>
                          The Josef Baumgartner Learning Resource Center Spaces
                          creates avenue for alternative learning by supporting
                          the instruction, research and extension functions of
                          the university.
                        </p>
                        <p class="font-weight-bold">
                          Steps in applying for the use of Spaces at LRC:
                        </p>
                        <div class="adjust">
                          <ol>
                            <li>
                              Applicant checks availability of LRC spaces, and
                              equipment prior to reservation.
                            </li>
                            <li>
                              Applicant accomplishes and files reservation form
                              one week before the actual use of space and
                              equipment.
                            </li>
                            <li>
                              Have application form endorsed by the Student
                              Activities Officer for Student Organizations and
                              Department Chair/Dean/Administrative Head for
                              classroom/instruction related activities.
                            </li>
                            <li>
                              Information Desk/KNC Librarian registers and plots
                              the schedule applied by the applicant in the
                              booking/log book based on the reservation form
                              submitted by the applicant. No schedule will be
                              logged in the absence of the reservation form.
                            </li>
                            <li>
                              Have application form approved by the Director of
                              Libraries and Vice-President for Administration
                              for Campus Entry Permit.
                            </li>
                            <li>
                              Submit reservation form to the Information
                              Desk/KNC Librarian at the Josef Baumgartner
                              Learning Resource Center.
                            </li>
                            <p>
                              Copy 1- LRC Copy 2 - Requesting Party Copy 3 -
                              Security Office
                            </p>
                            <li>
                              In case of cancellation /changes, Requesting Party
                              must notify the Information Desk/KNC Librarian 2
                              days ahead so other applicants can assume the
                              reservation.
                            </li>
                          </ol>
                          <p>
                            <a
                              href="http://youseemore.com/san_carlos/uploads/jb-lrc%20space%20utilization%20form%20-%20for%20usc%20users.pdf"
                            >
                              JB-LRC Space Utilization Form - FOR USC USERS
                              (977KB)</a
                            >
                          </p>
                        </div>
                        <p class="font-weight-bold">
                          Steps in applying for the use of spaces at LRC by
                          Student Organizations/USC Affiliated Activities:
                        </p>
                        <div class="adjust">
                          <ol>
                            <li>
                              Applicant checks availability of LRC space, and
                              equipment prior to reservation.
                            </li>
                            <li>
                              If LRC space and equipment are available on the
                              requested date, accomplish Reservation Form.
                            </li>
                            <li>
                              Have application form endorsed by Department
                              Chair/Dean/Administrative Head for USC Affiliated
                              Activities.
                            </li>
                            <li>
                              Present accomplished form to the Information
                              Desk/KNC Librarian who registers and plots the
                              schedule in the log book and assess the space
                              utilization fee. No schedule will be logged in the
                              absence of the reservation form.
                            </li>
                            <li>Make Payment at the Bursar's Office.</li>
                            <li>
                              Have application form approved by the Director of
                              Libraries and Vice-President for Administration
                              for Campus Entry Permit.
                            </li>
                            <li>
                              Submit reservation form to the Information
                              Desk/KNC Librarian at the Josef Baumgartner
                              Learning Resource Center.
                            </li>
                            <p>
                              Copy 1- LRC Copy 2 - Requesting Party Copy 3 -
                              Security Office
                            </p>
                            <li>
                              In case of cancellation /changes, requesting party
                              should notify the Information Desk/KNC, 2 days
                              ahead so other applicants can assume the
                              reservation.
                            </li>
                          </ol>
                        </div>
                        <p class="font-weight-bold">
                          Steps in applying for the use of spaces at LRC by Non-
                          USC- Users:
                        </p>
                        <div class="adjust">
                          <ol>
                            <li>
                              Applicant checks availability of LRC space, and
                              equipment prior to reservation.
                            </li>
                            <li>
                              If LRC space and equipment are available on the
                              requested date, accomplish Reservation Form.
                            </li>
                            <li>
                              Present accomplished form to the Information
                              Desk/KNC Librarian who registers and plots the
                              schedule in the log.
                            </li>
                            <li>
                              book and assess the space utilization fee. No
                              schedule will be logged in the absence of the
                              reservation form.
                            </li>
                            <li>Make Payment at the Bursar's Office.</li>
                            <li>
                              Have application form approved by the Director of
                              Libraries and Vice-President for Administration
                              for Campus Entry Permit.
                            </li>
                            <li>
                              Submit reservation form to the Information
                              Desk/KNC Librarian at the Josef Baumgartner
                              Learning Resource Center.
                            </li>
                            <p>
                              Copy 1- LRC Copy 2 - Requesting Party Copy 3 -
                              Security Office
                            </p>
                            <li>
                              In case of cancellation /changes, requesting party
                              should notify the Information Desk/KNC, 2 days
                              ahead so other applicants can assume the
                              reservation.
                            </li>
                          </ol>
                          <p>
                            <a
                              href="http://www.library.usc.edu.ph/JB-LRC%20Space%20Utilization%20Form%20-%20FOR%20NON-USC%20USERS.pdf"
                              >JB-LRC Space Utilization Form - FOR NON-USC USERS
                              (1038KB)</a
                            >
                          </p>
                          <p>
                            <a
                              href="http://youseemore.com/san_carlos/uploads/lrc%20space%20utilization%20pricing%20scheme.pdf"
                              >JB-LRC Space Utilization Pricing Scheme
                              (212KB)</a
                            >
                          </p>
                        </div>
                      </b-card-text>
                    </b-card>
                  </b-tab>
                  <b-tab
                    title="Laptop for a fee"
                    :title-link-class="libServicesTabClass(4)"
                  >
                    <b-card>
                      <b-card-text class="libSerCont">
                        <p>
                          Laptop computers are available for checkout to USC
                          students, faculty and staff with a FEE. Laptops are
                          available at the following libraries: Basic Education,
                          Bonk, Education, JB-LRC and Law.
                        </p>
                        <p class="font-weight-bold">Laptop Circulation Rules</p>
                        <div class="adjust">
                          <ul>
                            <li>
                              Laptops may be checked out by bonafide library
                              users who have a valid university ID.
                            </li>
                            <li>
                              Patrons who wish to check out a laptop must read
                              and conform to the Laptop Responsibility Agreement
                              of the Library System.
                            </li>
                            <li>
                              Laptop use is charged by the hour at Php 50.00.
                              Loan period for laptops is 2 hours. Renewable for
                              another hour. The Library System reserves the
                              right to deny a renewal request.
                            </li>
                            <li>
                              Only one laptop may be checked out per user.
                            </li>
                            <li>
                              Laptops are for library use only. Users are not
                              permitted to bring out the laptop from the library
                              premises.
                            </li>
                            <li>
                              Laptops may not be checked out for overnight.
                            </li>
                          </ul>
                        </div>
                        <p class="font-weight-bold">
                          Fines and Replacement Fees
                        </p>
                        <div class="adjust">
                          <ul>
                            <li>
                              Laptops must be returned to the Information
                              Desk/KNC Librarian. Do not leave the laptop
                              unattended at the KNC counter. Wait for the
                              librarian to check in the laptop. Fines of Php
                              50.00 per hour will be assessed to the library
                              users who fail to return the laptop on the
                              scheduled time (due time). If the laptop is not
                              returned within the library service hours, the
                              user will be billed for the actual cost of the
                              replacement and failure to return the laptops on
                              time may resort to revoking the privilege to
                              borrow the laptop for 1 semester.
                            </li>
                          </ul>
                        </div>
                        <p class="font-weight-bold">Use Guidelines</p>
                        <div class="adjust">
                          <ul>
                            <li>
                              WIFI connection is available for users to connect
                              free of charge using the laptop.
                            </li>
                            <li>
                              Use a USB flash drive to save your files. Files
                              will not be retained on the hard drive; they are
                              automatically erased upon return.
                            </li>
                            <li>
                              To print from the laptop, save your work and print
                              at the KNC.
                            </li>
                            <li>
                              Never leave the laptop unattended. While the
                              laptop is in a User’s possession, the User shall
                              be responsible for it all the time.
                            </li>
                            <li>
                              If the laptop or any components (such as the power
                              cord) is lost, stolen or damaged while check out
                              to you, you are solely responsible for any and all
                              repair or replacement fees. If laptop is stolen
                              while signed out to a student , it should be
                              reported immediately to the Information Desk/KNC
                              Librarian
                            </li>
                            <li>
                              Laptops are to be used responsibly for academic
                              purposes, and are not intended for gameplay,
                              socializing, etc.
                            </li>
                          </ul>
                        </div>
                      </b-card-text>
                    </b-card>
                  </b-tab>
                  <b-tab
                    title="Interlibrary Loan, Referrals"
                    :title-link-class="libServicesTabClass(5)"
                  >
                    <b-card>
                      <b-card-text class="libSerCont">
                        <p>
                          Interlibrary loan is a service for administrators. The
                          library facilitates the temporary transfer of books
                          for loans within the USC Library System. It also helps
                          customers access the materials of other academic
                          libraries in the country and even outside.
                        </p>
                        <p class="font-weight-bold">
                          These are the intralibrary loan guidelines within the
                          System:
                        </p>
                        <div class="adjust">
                          <ul>
                            <li>
                              An administrator places a request for books with
                              his college librarian; these books are available
                              only in another USC library.
                            </li>
                            <li>
                              The librarians arrange for the temporary placement
                              of the requested books in the library.
                            </li>
                            <li>
                              When the books arrive, the customer is notified.
                              (In most cases requested books will arrive within
                              two to three days.
                            </li>
                            <li>
                              He may borrow the books in his library; he does
                              not have to go out of the campus to borrow.
                            </li>
                          </ul>
                        </div>
                        <p class="font-weight-bold">
                          Interlibrary Loans Outside the System
                        </p>
                        <div class="adjust">
                          <ul>
                            <li>
                              Science Library and Health Sciences Library link
                              up with DOST-7 Library for interlibrary loan
                              purposes.
                            </li>
                            <li>
                              The Acquisitions Unit handle interlibrary loan
                              requests involving the National Library and
                              academic libraries like Ateneo de Manila
                              University, De La Salle University and other
                              libraries with rich collections.
                            </li>
                          </ul>
                        </div>
                      </b-card-text>
                    </b-card>
                  </b-tab>
                  <b-tab
                    title="Reading Advisory Guidance"
                    :title-link-class="libServicesTabClass(6)"
                  >
                    <b-card>
                      <b-card-text class="libSerCont">
                        <p>
                          Librarians guide pupils and students in choosing
                          reading materials suited to their level. They provide
                          oral annotations of books to those who are looking for
                          something to read. During the Library Period, pupils
                          may choose to finish one or more selections from
                          English readers and answer the corresponding exercises
                          for added points in the Reading subject. The
                          librarians check the exercises and provide teachers
                          results and feedback on pupils reading. On free
                          reading time, pupils and students may choose from a
                          wide array of award-winning books, beautifully
                          illustrated books, books for browsing and books for
                          serious reading.
                        </p>
                      </b-card-text>
                    </b-card>
                  </b-tab>
                  <b-tab
                    title="Reference and Information"
                    :title-link-class="libServicesTabClass(7)"
                  >
                    <b-card>
                      <b-card-text class="libSerCont">
                        <p class="font-weight-bold">
                          Information Desk Assistance
                        </p>
                        <p>
                          Users needing assistance in the use of the Web-OPAC in
                          particular and use of the library in general may
                          approach the Information Desk.
                        </p>
                        <p class="font-weight-bold">KNC Services</p>
                        <p>
                          The KNC is a special component of the Libraries
                          Reference & Information Service The center allows the
                          customer to discover and explore CD Stations, the
                          Internet, digital resources and other applications but
                          more so to access the proper resources and subject
                          specialists.
                        </p>
                        <p class="text-center">
                          <img
                            src="../assets/services/kncweb.jpg"
                            alt="KNC Services"
                          />
                        </p>
                        <p>KNC Services:</p>
                        <div class="adjust">
                          <ul>
                            <li>
                              Assistance in Literature search (print/online)
                            </li>
                            <li>
                              Assistance in source citation: Bibliography,
                              Footnote and Endnote
                            </li>
                            <li>
                              Tutorial in the use of the different Research
                              Tools
                            </li>
                            <li>CD / Online Database Searching</li>
                            <li>Printing</li>
                            <li>Desktop Composing</li>
                            <li>Scanning</li>
                          </ul>
                        </div>
                        <p class="font-weight-bold">
                          Librarian Mediated Internet Search
                        </p>
                        <p>
                          The librarian helps the customer search the Internet
                          for relevant information and sources needed for
                          research.
                        </p>
                        <p class="font-weight-bold">Discover and Explore</p>
                        <p>
                          For customers who want to discover and explore more,
                          tutorial service on real time, visual, interactive,
                          and networked databases is an option.
                        </p>
                        <p class="font-weight-bold">
                          Text a Librarian (virtual reference)
                        </p>
                      </b-card-text>
                    </b-card>
                  </b-tab>
                  <b-tab
                    title="Storytelling and Book Talk"
                    :title-link-class="libServicesTabClass(8)"
                  >
                    <b-card>
                      <b-card-text class="libSerCont">
                        <p>
                          Librarians cultivate the love of books and reading by
                          conducting storytelling sessions to pupils and book
                          talks to students in the upper grades. With the use of
                          language, vocalization, and physical movements to
                          reveal the elements and images of a story in poems or
                          prose, the librarians teach children how to listen and
                          help them create their own images of what they have
                          heard; their ability to imagine is developed.
                        </p>
                      </b-card-text>
                    </b-card>
                  </b-tab>
                </b-tabs>
              </div>
            </b-tab>

            <b-tab title="AV Services" :title-link-class="linkClass(2)">
              <b-card>
                <b-card-text class="libSerCont">
                  <p>
                    List of the different AV rooms available in the University:
                  </p>
                  <div class="col-md-7">
                    <div>
                      <li v-for="(av, k) in avServices" :key="k">
                        {{ av.room }}
                      </li>
                    </div>
                    <div class="row text-link">
                      <p>
                        For AV Center Services reservation:
                        <a href="https://forms.gle/hLLkxGpaxVUsgj1M9"
                          >Click Here</a
                        >
                      </p>
                    </div>
                  </div>
                </b-card-text>
              </b-card>
            </b-tab>

            <b-tab title="Tutorials" :title-link-class="linkClass(3)">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Video</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>EBSCO Advanced Searching</strong></td>
                    <td>This tutorial demonstrates how to use Advanced Searching on the EBSCOhost interface with the Guided Style Find Fields.</td>
                    <td>
                            <b-button v-b-modal.modal-1 :style="{'background-color': '#387e8c', 'color': 'white'}">Watch Now</b-button>
                            <b-modal 
                                size="lg" 
                                v-bind:hide-footer="true" 
                                id="modal-1" 
                                title="EBSCO Advanced Searching"
                            >
                                <b-embed type="video" controls poster="poster.png">
                                    <source src="~@/assets/services/EBSCOhost Advanced Searching.mp4" type="video/mp4">
                                </b-embed>
                            </b-modal>
                    </td>
                  </tr>
                  <tr>
                        <th>EBSCO Basic Tutorial</th>
                        <td>This tutorial demonstrates how to create a Basic Search using EBSCOhost.</td>
                        <td>
                            <b-button v-b-modal.modal-2 :style="{'background-color': '#387e8c', 'color': 'white'}">Watch Now</b-button>
                            <b-modal 
                                size="lg" 
                                v-bind:hide-footer="true" 
                                id="modal-2" 
                                title="EBSCO Basic Tutorial"
                            >
                                <b-embed type="video" controls poster="poster.png">
                                    <source src="~@/assets/services/EBSCOhost Basic Search.mp4" type="video/mp4">
                                </b-embed>
                            </b-modal>
                        </td>
                    </tr>
                  <tr>
                        <th>How to access the Electronic Resources</th>
                        <td>This tutorial demonstrates the steps on how to access the electronic/online resources in the University of San Carlos Library System</td>
                        <td>
                            <b-button v-b-modal.modal-3 :style="{'background-color': '#387e8c', 'color': 'white'}">Watch Now</b-button>
                            <b-modal 
                                size="lg" 
                                v-bind:hide-footer="true" 
                                id="modal-3" 
                                title="How to access the electronic resources in USC Library?"
                            >
                                <b-embed
                                    type="iframe"
                                    aspect="16by9"
                                    src="https://www.youtube.com/embed/wLYScYq-rUk"
                                    allowfullscreen
                                ></b-embed>
                            </b-modal>
                        </td>
                    </tr>
                  <tr>
                        <th>How to access the Web OPAC</th>
                        <td>This tutorial demonstrates how to access the Web OPAC.</td>
                        <td>Coming Soon</td>
                    </tr>
                  <tr>
                        <th>What is Turnitin?</th>
                        <td>Turnitin is an originality checking and plagiarism prevention service that checks your writing for citation mistakes or inappropriate copying. When you submit your paper, Turnitin compares it to text in its massive database of student work, websites, books, articles, etc.</td>
                        <td>
                            <b-button v-b-modal.modal-4 :style="{'background-color': '#387e8c', 'color': 'white'}">Watch Now</b-button>
                            <b-modal 
                                size="lg" 
                                v-bind:hide-footer="true" 
                                id="modal-4" 
                                title="Turnitin - Introductory Video"
                            >
                                <b-embed
                                    type="iframe"
                                    aspect="16by9"
                                    src="https://www.youtube.com/embed/iL-KEgSbs3o"
                                    allowfullscreen
                                ></b-embed>
                            </b-modal>
                        </td>
                    </tr>
                </tbody>
              </table>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
      <div class="col-md-1"></div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      activetab: 1,
      tabIndex: 0,
      libServicesTabIndex: 0,
      avServices: [
        { room: "AV Material Loan" },
        { room: "Hall Booking and Reservation" },
        { room: "Photo Documentation" },
        { room: "Project and Viewing Service" },
        { room: "Sound and Recording Service" },
        { room: "Sound System Service" },
        { room: "Video Coverage" },
      ]
    };
  },
  methods: {
    linkClass: function (idx) {
      if (this.tabIndex === idx) {
        return ["bg-secondary", "text-light"];
      } else {
        return ["bg-light", "text-dark"];
      }
    },
    libServicesTabClass: function (idx) {
      if (this.libServicesTabIndex === idx) {
        return ["bg-secondary", "text-light"];
      } else {
        return ["bg-light", "text-dark"];
      }
    },
  },
};
</script>

<style scoped>
a {
  color: black;
}
a:hover {
  color: green;
  text-decoration: none;
}
.card-body {
  background: white;
}
.libSerCont {
  padding: 20px;
  text-align: justify;
}
.adjust {
  margin-left: 18px;
}
.text-link {
  margin-top: 30px;
}

</style>