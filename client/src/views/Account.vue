<template>
  <div>
    <div>
      <div class="container">
        <b-card border-variant="light">
          <b-tabs 
            v-model="tabIndex" 
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
                  <b-tabs pills vertical v-model="genSetTabIndx">
                    <b-tab title="Account" :title-link-class="genSetTabClass(0)">
                      <b-card-text>
                        <b-card >
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
                        </b-card>
                      </b-card-text>
                    </b-tab>
                    <b-tab title="Notification" :title-link-class="genSetTabClass(1)">
                      <b-card >
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
                      </b-card>
                    </b-tab>
                    <b-tab title="Payment Method" :title-link-class="genSetTabClass(2)">
                      <b-card >
                      <b-card-text style="text-align: left">
                         <div>
                           <b-form-group>
                            <b-form-radio id="radio-1" v-model="selected_paymentMethod" value="cash">
                              <p>Cash</p>
                            </b-form-radio>
                            <b-form-radio id="radio-2" v-model="selected_paymentMethod" value="ePayment">
                              <p>E-payment</p>
                              <ul class="links">
                                <li><a href="https://www.gcash.com/">Link G-Cash</a></li>
                                <li><a href="https://www.paymaya.com/">Add Paymaya</a></li>
                                <li><a href="https://www.paypal.com/ph/signin">Add Paypal</a></li>
                              </ul>
                            </b-form-radio>
                           </b-form-group>
                        </div>
                      </b-card-text>
                      </b-card>
                    </b-tab>
                  </b-tabs>
              </div>
              <div class="row buttons">
                <b-button pill v-on:click="save" variant="secondary">Save</b-button>
                <b-button pill variant="light">Cancel</b-button>
              </div>
            </b-tab>
            <b-tab title="Account Activity" :title-link-class="linkClass(2)">
              <div>
                  <b-tabs pills vertical v-model="accActTabIndx">
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
              </div>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
      <!-- <div class="col-md-1"></div> -->
    </div>

  </div>
</template>


<script>
import UserProfile from '../components/UserProfile'

export default {
  name: 'Account',
  components: {
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
          return ['bg-secondary', 'text-light']
        } else {
          return ['bg-light', 'text-dark']
        }
      },
      genSetTabClass: function(idx) {
        if (this.genSetTabIndx === idx) {
          return ['bg-secondary', 'text-light']
        } else {
          return ['bg-light', 'text-dark']
        }
      },
      accActTabClass: function(idx) {
        if (this.accActTabIndx === idx) {
          return ['bg-secondary', 'text-light']
        } else {
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
.card-body .card-header{
  background: white;
}
.buttons {
  float: right;
}
.buttons .btn {
  padding-left: 50px;
  padding-right: 50px;
  margin-left: 5px;
}
.links {
  margin-top: -10px;
  margin-left: 20px;
}
</style>