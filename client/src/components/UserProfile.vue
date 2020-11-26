<template>
  <AccountProfile v-bind:user="user">
    <h5 slot="profile-title">Student Profile</h5>
    <span slot="add-content">
      <v-row>
        <v-col cols="3" class="content-label">
          <p>Department</p>
        </v-col>
        <v-col cols="9">
          <p>{{ user.department }}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3" class="content-label">
          <p>Program</p>
        </v-col>
        <v-col cols="9">
          <p>{{ user.program }}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3" class="content-label">
          <p>Year Level</p>
        </v-col>
        <v-col cols="9">
          <p>{{ user.yearlvl }}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3" class="content-label">
          <p>Student Type</p>
        </v-col>
        <v-col cols="9">
          <p>{{ user.studentType }}</p>
        </v-col>
      </v-row>
    </span>
  </AccountProfile>
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
  name: "UserProfile",
  components: {
    AccountProfile,
  },
  data() {
    return {
      user: {
        id: "00000",
        name: "Chonghyun",
        bday: "September 7",
        department: "Department of Psychology",
        program: "Bachelor of Science in Psychology",
        yearlvl: "4",
        studentType: "Continuing",
        pic:
          "https://www.personality-database.com/profile_images/198442.png?id=119088",
      },
    };
  },
};
</script>