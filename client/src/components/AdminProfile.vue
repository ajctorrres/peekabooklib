<template>
  <v-app>
    <AccountProfile v-bind:user="user">
      <h5 slot="profile-title">Administrator Profile</h5>
      <span slot="add-content">
        <v-row>
          <v-col cols="3" class="content-label">
            <p>Campus</p>
          </v-col>
          <v-col cols="9">
            <p>{{ user.campus }}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3" class="content-label">
            <p>Admin Type</p>
          </v-col>
          <v-col cols="9">
            <p>{{ user.adminType }}</p>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
          <v-col cols="3" class="content-label">
            <p>Email</p>
          </v-col>
          <v-col cols="9">
            <p>{{ user.email }}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3" class="content-label">
            <p>Password</p>
          </v-col>
          <v-col cols="9">
            <span v-if="editPass">
              <v-text-field v-bind:value="user.password">
                <v-btn icon slot="append">
                  <v-icon>mdi-check-bold</v-icon>
                </v-btn>
                <v-btn
                  icon
                  slot="append"
                  v-on:click="edittablePass()"
                >
                  <v-icon>mdi-close-thick</v-icon>
                </v-btn>
              </v-text-field>
            </span>
            <span v-else>
              <p>
                {{ user.password }}
                <v-btn
                  icon
                  class="float-right"
                  v-on:click="edittablePass()"
                >
                  <v-icon>mdi-pencil-outline</v-icon>
                </v-btn>
              </p>
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3" class="content-label">
            <p>Contact</p>
          </v-col>
          <v-col cols="9">
            <span v-if="editContact">
              <v-text-field v-bind:value="user.contact">
                <v-btn icon slot="append">
                  <v-icon>mdi-check-bold</v-icon>
                </v-btn>
                <v-btn
                  icon
                  slot="append"
                  v-on:click="edittableContact()"
                >
                  <v-icon>mdi-close-thick</v-icon>
                </v-btn>
              </v-text-field>
            </span>
            <span v-else>
              <p>
                {{ user.contact }}
                <v-btn
                  icon
                  class="float-right"
                  v-on:click="edittableContact()"
                >
                  <v-icon>mdi-pencil-outline</v-icon>
                </v-btn>
              </p>
            </span>
          </v-col>
        </v-row>
      </span>
    </AccountProfile>
  </v-app>
</template>
<style scoped>
h5 {
  font-size: 23px;
  padding: 5px 0px 0px 0px;
}
.content .col-9 {
  padding: 0px;
  margin: 0px;
  margin-bottom: 3px;
}
.content .col-3 {
  padding: 0px;
  margin: 0px;
}
.content-label {
  color: grey;
}
.content p {
  margin-bottom: 8px;
}
</style>
<script>
import AccountProfile from "./base/AccountProfile";
export default {
  name: "AdminProfile",
  components: {
    AccountProfile,
  },
  data() {
    return {
      user: {
        id: "00000",
        name: "Kim Taehyung",
        bday: "December 30 1995",
        campus: "Talamban",
        adminType: "Administrator",
        yearlvl: "5",
        email: "taehyung@gmail.com",
        password: "taehyung",
        contact: "9734787124",
        pic:
          "https://i.pinimg.com/736x/2b/5e/7a/2b5e7a98d33396b0cbe55c4666a7b107.jpg",
      },
      editPass: false,
      editContact: false,
    };
  },
  methods: {
    edittablePass: function () {
      this.editPass = !this.editPass;
    },
    edittableContact: function () {
      this.editContact = !this.editContact;
    },
  },
};
</script>