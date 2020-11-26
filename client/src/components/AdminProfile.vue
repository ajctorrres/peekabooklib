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
            <p>
                {{ user.password }}
                <v-btn icon small class="float-right">
                    <v-icon medium>mdi-pencil-outline</v-icon>
                </v-btn>
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3" class="content-label">
            <p>Contact</p>
          </v-col>
          <v-col cols="9">
            <p>
                {{ user.contact }}
                <v-btn icon small class="float-right">
                    <v-icon medium>mdi-pencil-outline</v-icon>
                </v-btn>
            </p>
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
    };
  },
};
</script>