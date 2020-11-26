<template>
  <div class="container">

    <div class="row">
      <div class="col col-xs-2"></div>
      <div class="col-8 col-xs-10">
        <b-card style="max-width: 100%;" bg-variant="light">
          <b-tabs 
            v-model="tabIndex" 
            card
            active-nav-item-class="font-weight-bold"
            active-tab-class="text-dark"
            content-class="mt-3"
            align="left"
          >
            <b-tab title="Profile" :title-link-class="linkClass(0)">
                <UserProfile></UserProfile>
            </b-tab>
            <b-tab title="General Setting" :title-link-class="linkClass(1)">
              <div>
                <b-card no-body>
                  <b-tabs class="col-md-12" pills card vertical v-model="genSetTabIndx">
                    <b-tab title="Account" :title-link-class="genSetTabClass(0)">
                      <b-card-text>
                        <b-container fluid>
                          <b-row>
                            <b-col sm="4">
                              <label>Contact Number</label>
                            </b-col>
                            <b-col sm="8">
                              <b-form-input ref="contact_num" :value="genSetting.contactNum"></b-form-input>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col sm="4">
                              <label>Home Address</label>
                            </b-col>
                            <b-col sm="8">
                              <b-form-input ref="home_add" :value="genSetting.homeAdd"></b-form-input>
                            </b-col>
                          </b-row>                          
                          <b-row>
                            <b-col sm="4">
                              <label>Delivery Address</label>
                            </b-col>
                            <b-col sm="8">
                              <b-form-input ref="delivery_add" :value="genSetting.deliveryAdd"></b-form-input>
                            </b-col>
                          </b-row>                          
                          <b-row>
                            <b-col sm="4">
                              <label>Email</label>
                            </b-col>
                            <b-col sm="8">
                              <b-form-input ref="email" :value="genSetting.email"></b-form-input>
                            </b-col>
                          </b-row>
                        </b-container>
                      </b-card-text>
                    </b-tab>
                    <b-tab title="Notification" :title-link-class="genSetTabClass(1)">
                      <b-card-text style="text-align: left">
                        <b-form-group>
                          <b-form-checkbox-group id="checkbox-group-2" v-model="selected_notif" name="notif">
                            <div>
                              <b-form-checkbox value="savedBook">Saved Book</b-form-checkbox>
                              <p class="small text-muted">Notify me if saved book is available</p>
                            </div>
                            <div>
                              <b-form-checkbox value="paymentDue">Payment Due</b-form-checkbox>
                              <p class="small text-muted">Remind me of payment dues</p>
                            </div>
                            <div>
                              <b-form-checkbox value="bookReturn">Book Return</b-form-checkbox>
                              <p class="small text-muted">Notify me of book return dues</p>
                            </div>
                            <div>
                              <div>
                                <p>Email Notifications</p>
                                <b-form-checkbox id="checkbox-1" value="emailNotif">
                                  <p>Send me emails about my activity and updates I requested.</p>
                                </b-form-checkbox>
                              </div>
                            </div> 
                          </b-form-checkbox-group>
                        </b-form-group>
                      </b-card-text>
                    </b-tab>
                    <b-tab title="Payment Method" :title-link-class="genSetTabClass(2)">
                      <b-card-text style="text-align: left">
                         <div>
                           <b-form-group label="Individual radios" label-for="radio-1">
                            <b-form-radio id="radio-1" v-model="selected_paymentMethod" value="cash">
                              <p>Cash</p>
                            </b-form-radio>
                           </b-form-group>
                           <b-form-group label="Individual radios"  label-for="radio-">
                            <b-form-radio id="radio-2" v-model="selected_paymentMethod" value="ePayment">
                              <p>E-payment</p>
                              <ul>
                                <li><a href="https://www.gcash.com/">Link G-Cash</a></li>
                                <li><a href="https://www.paymaya.com/">Add Paymaya</a></li>
                                <li><a href="https://www.paypal.com/ph/signin">Add Paypal</a></li>
                              </ul>
                            </b-form-radio>
                           </b-form-group>
                        </div>
                      </b-card-text>
                    </b-tab>
                  </b-tabs>
                </b-card>
              </div>
              <div class="row">
                <div class="col-7"></div>
                <div class="col-5">
                  <b-button v-on:click="save" variant="secondary">Save</b-button>
                  <b-button variant="light">Cancel</b-button>
                </div>
              </div>
            </b-tab>
            <b-tab title="Account Activity" :title-link-class="linkClass(2)">
              <div>
                <b-card no-body>
                  <b-tabs class="col-md-12" pills card vertical v-model="accActTabIndx">
                    <b-tab title="Loans" :title-link-class="accActTabClass(0)">
                      <b-card-text>
                        <div>
                          <b-table responsive :items="loans"></b-table>
                        </div>
                      </b-card-text>
                    </b-tab>
                    <b-tab title="Fines" :title-link-class="accActTabClass(1)">
                      <b-card-text>
                        <div>
                          <b-table responsive :items="fines"></b-table>
                        </div>
                      </b-card-text>
                    </b-tab>
                    <b-tab title="Loan History" :title-link-class="accActTabClass(2)">
                      <b-card-text>
                        <div>
                          <b-table responsive :items="loans"></b-table>
                        </div>
                      </b-card-text>
                    </b-tab>
                  </b-tabs>
                </b-card>
              </div>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
      <div class="col col-xs-2"></div>
    </div>

  </div>
</template>


<script>
import UserProfile from '../components/UserProfile'

export default {
  components: {
    UserProfile
  },
  name: 'Account',
  component: {
    UserProfile
  },
    data() {
      return {
        tabIndex: 0,
        genSetTabIndx: 0,
        accActTabIndx: 0,
        mainProps: { 
          blank: true, 
          blankColor: '#6c757d'
        },
        profile: {
          name: "student",
          studId: "18000000",
          dob: "xx-xx-xxxx",
          dept: "Science",
          prog: "BSCS",
          yrLvl: "3",
          studType: "???"
        },
        genSetting: {
          contactNum: "01234353523",
          homeAdd: "earth",
          deliveryAdd: "balay",
          email: "student@gmail.com"
        },
        selected_notif: [],
        selected_paymentMethod: [],
        loans: [
          { 
            book_title: "sample 1", 
            date_borrowed: '11-20-2020', 
            due_date: '11-27-2020' 
          },
          { 
            book_title: "sample 2", 
            date_borrowed: '11-21-2020', 
            due_date: '11-28-2020' 
          },
          { 
            book_title: "sample 3", 
            date_borrowed: '11-22-2020', 
            due_date: '11-29-2020' 
          }
        ],
        fines: [
          {
            item_borrowed: "book #1",
            overdue_fine: "Php xx.xx"
          },
          {
            item_borrowed: "laptop #1",
            overdue_fine: "Php xxx.xx"
          },
          {
            item_borrowed: "book #1",
            overdue_fine: "Php xx.xx"
          }
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
      genSetTabClass: function(idx) {
        if (this.genSetTabIndx === idx) {
          //text when active
          return ['bg-secondary', 'text-light']
        } else {
          //text when not active
          return ['bg-light', 'text-dark']
        }
      },
      accActTabClass: function(idx) {
        if (this.accActTabIndx === idx) {
          //text when active
          return ['bg-secondary', 'text-light']
        } else {
          //text when not active
          return ['bg-light', 'text-dark']
        }
      },
      save: function() {
        // this.genSetting.contactNum = this.$refs['contact_num'].value;
        // this.genSetting.homeAdd = this.$refs['home_add'].value;
        // this.genSetting.deliveryAdd = this.$refs['delivery_add'].value;
        // this.genSetting.email = this.$refs['email'].value; 
      }
    }
}
</script>

<style scope>
a {
  color: black;
}
a:hover {
  color: green;
  text-decoration: none;
}
</style>