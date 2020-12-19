<template>
  <AdminMgmtResult>
    <h5 slot="header">Faculty Accounts</h5>
    <tbody slot="resultBody">
      <tr v-for="user in users" v-bind:key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.contact }}</td>
        <td>
          <span v-if="user.status == 'active'">
            <v-dialog v-model="suspend" persistent max-width="460">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="green" icon dark v-bind="attrs" v-on="on">
                  <v-icon>mdi-checkbox-blank-circle</v-icon>
                </v-btn>
              </template>
              <v-card class="px-3 pt-1">
                <v-card-title class="headline justify-center">
                  Suspend Account
                </v-card-title>
                <v-card-text>
                  ID Number: <br/>
                  Name: <br/>
                  Email:
                </v-card-text>
                <v-container>
                  <v-textarea label="Reason for Suspension" outlined dense>
                  </v-textarea>
                </v-container>
                <p class="font-italic pl-4" style="font-size:12px;">
                  *This message will notify the user and be sent to their email
                </p>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="grey" text v-on:click="suspend = false">
                    Cancel
                  </v-btn>
                  <v-btn color="red darken-1" text v-on:click="suspend = false">
                    Suspend
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </span>

          <span v-else-if="user.status == 'suspended'">
            <v-dialog v-model="active" persistent max-width="460">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="red" icon dark v-bind="attrs" v-on="on">
                  <v-icon>mdi-minus-circle</v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="headline justify-center">
                  Activate Account
                </v-card-title>
                <v-card-text>
                  ID Number: <br/>
                  Name: <br/>
                  <p class="font-italic pl-2 mt-5" >
                  Allow this user to borrow the library resources
                </p>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="grey" text v-on:click="active = false">
                    Cancel
                  </v-btn>
                  <v-btn color="green darken-1" text v-on:click="active = false">
                    Activate
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </span>
        </td>
      </tr>
    </tbody>
  </AdminMgmtResult>
</template>
<script>
import AdminMgmtResult from "./base/AdminAccResult";
export default {
  name: "ResultFaculty",
  components: {
      AdminMgmtResult
  },
  data() {
    return {
      active: false,
      suspend: false
    };
  },
  props: {
    users: {
      type: Array,
    },
  }
};
</script>