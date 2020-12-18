<template>
  <v-app id="inspire">
    <v-navigation-drawer
      color="rgb(240, 240, 240)"
      floating
      v-model="drawer"
      app
    >
      <v-list-item>
        <v-list-item-content class="mt-2 ml-2">
          <v-list-item-title class="title"> PEEKABOOK </v-list-item-title>
          <v-list-item-subtitle>
            USC Library Management System
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item-group color="blue">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <router-link to="/dashboard"
                >Dashboard</router-link
              ></v-list-item-content
            >
          </v-list-item>

          <v-list-group>
            <template v-slot:activator>
              <v-list-item-icon>
                <v-icon>mdi-book-open-page-variant</v-icon>
              </v-list-item-icon>
              <v-list-item-content> Resources </v-list-item-content>
            </template>
            <v-list-item>
              <v-list-item-content class="ml-10 pl-4 list-item">
                 <router-link to="/resources/collection"
                  >Resource List</router-link>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content class="ml-10 pl-4 list-item">
                Add Resource
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-group>
            <template v-slot:activator>
              <v-list-item-icon>
                <v-icon>mdi-account-group</v-icon>
              </v-list-item-icon>
              <v-list-item-content> Accounts </v-list-item-content>
            </template>
            <v-list-item>
              <v-list-item-content class="ml-10 pl-4 list-item">
                <router-link to="/acc-mgmt/student"
                  >Student Accounts</router-link
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content class="ml-10 pl-4 list-item">
                <router-link to="/acc-mgmt/faculty"
                  >Faculty Accounts</router-link
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content class="ml-10 pl-4 list-item">
                <router-link to="/acc-mgmt/admin">Admin Accounts</router-link>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-group>
            <template v-slot:activator>
              <v-list-item-icon>
                <v-icon>mdi-handshake</v-icon>
              </v-list-item-icon>
              <v-list-item-content> Transactions </v-list-item-content>
            </template>
            <v-list-item>
              <v-list-item-content class="ml-10 pl-4 list-item">
                View Transaction
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content class="ml-10 pl-4 list-item">
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

      <v-btn small icon class="ma-1">
        <v-icon>mdi-bell</v-icon>
      </v-btn>

      <v-menu offset-y>
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
          <v-list-item>Logout</v-list-item>
        </v-list>
      </v-menu>
      <!-- <p class="pt-4 ml-1 mr-4"> Admin </p> -->
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