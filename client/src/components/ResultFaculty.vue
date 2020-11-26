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
            <v-icon>mdi-checkbox-blank-circle</v-icon>
          </span>
          <span v-else-if="user.status == 'suspended'">
            <v-icon>mdi-minus-circle</v-icon>
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
  props: {
    users: {
      type: Array,
    },
  }
};
</script>