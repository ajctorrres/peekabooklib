<template>
  <v-app id="inspire">
    <v-navigation-drawer
      color="#01A27F"
      floating
      v-model="drawer"
      app
    >
      <v-list-item>
        <v-list-item-content class="mt-2 ml-2">
          <v-list-item-title class="title" style="color: #DAF5FB"> PEEKABOOK </v-list-item-title>
          <v-list-item-subtitle style="color: #A8DEF0">
            USC Library Management System
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item-group>
          <router-link to="/dashboard" style="color: #C8F0F9">
            <v-list-item >
              <v-list-item-icon class="ml-2 ma-0 mt-2 mr-2">
                <v-icon small style="color: #EDFAFD">mdi-view-dashboard</v-icon>
              </v-list-item-icon>
              <v-list-item-content style="color: #DAF5FB; font-size:14px" > Dashboard </v-list-item-content>
            </v-list-item>
          </router-link>
          <v-list-group color="white">
            <template v-slot:activator>
              <v-list-item-icon class="ml-2 ma-0 mt-2 mr-2">
                <v-icon small style="color: #EDFAFD">mdi-book-open-page-variant</v-icon>
              </v-list-item-icon>
              <v-list-item-content style="color: #DAF5FB; font-size:14px" > Resources </v-list-item-content>
            </template>
            <v-list-item >
              <v-list-item-content class="ml-10 pl-4 list-item" style="color: #DAF5FB">
                Resource List
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content class="ml-10 pl-4 list-item" style="color: #DAF5FB">
                Add Resource
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-group color="white">
            <template v-slot:activator>
              <v-list-item-icon class="ml-2 ma-0 mt-2 mr-2">
                <v-icon small style="color: #EDFAFD">mdi-account-group</v-icon>
              </v-list-item-icon>
              <v-list-item-content style="color: #DAF5FB; font-size:14px" > Accounts </v-list-item-content>
            </template>
            <router-link to="/acc-mgmt/student" style="color: #DAF5FB">
              <v-list-item>
                <v-list-item-content class="ml-10 pl-4 list-item" style="color: #DAF5FB">
                  Student Accounts
                </v-list-item-content>
              </v-list-item>
            </router-link>
            <router-link to="/acc-mgmt/faculty" style="color: #DAF5FB">
              <v-list-item>
                <v-list-item-content class="ml-10 pl-4 list-item" style="color: #DAF5FB">
                  Faculty Accounts
                </v-list-item-content>
              </v-list-item>
            </router-link>
            <router-link to="/acc-mgmt/admin" style="color: #DAF5FB">
              <v-list-item>
                <v-list-item-content class="ml-10 pl-4 list-item" style="color: #DAF5FB">
                  Admin Accounts
                </v-list-item-content>
              </v-list-item>
            </router-link>
          </v-list-group>

          <v-list-group color="white">
            <template v-slot:activator>
              <v-list-item-icon class="ma-0 ml-2 mt-2 mr-2">
                <v-icon small style="color: #EDFAFD">mdi-handshake</v-icon>
              </v-list-item-icon>
              <v-list-item-content style="color: #DAF5FB; font-size:14px" > Transactions </v-list-item-content>
            </template>
            <v-list-item>
              <v-list-item-content class="ml-10 pl-4 list-item" style="color: #DAF5FB">
                View Transaction
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content class="ml-10 pl-4 list-item" style="color: #DAF5FB">
                Archive
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar dense flat app hide-on-scroll>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title></v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" icon class="ma-1">
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <router-link to="/account/profile">Account</router-link>
          </v-list-item>
          <v-list-item
            ><router-link to="/account/activity">Activity</router-link>
          </v-list-item>
        </v-list>
      </v-menu> -->
      <!-- <p class="pt-4 ml-1 mr-4"> Admin </p> -->
      <router-link to="/account/activity">
      <v-btn small icon class="ma-1">
        <v-icon>mdi-account-clock</v-icon>
      </v-btn>
      </router-link>
      <router-link to="/account/profile">
      <v-btn small icon class="ma-1">
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
      </router-link>
      <v-btn small icon class="ma-1">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="ma-5">
      <slot name="content"></slot>
    </v-main>
  </v-app>
</template>
<style scoped>
.list-item {
  font-size: 13px;
}
a {
  text-decoration: none;
}
</style>
<script>
export default {
  name: "AdminNavBar",
  data() {
    return {
      drawer: null,
    };
  },
};
</script>