<template>
  <AdminMgmtResult>
    <th slot="campusCol" class="text-left" style="font-size: 14px">Campus</th>
    <th slot="edit" class="text-left" style="font-size: 14px">Option</th>
    <tbody slot="resultBody">
      <tr v-for="user in users" v-bind:key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.contact }}</td>
        <td>{{ user.campus }}</td>
        <td>
            <v-icon>mdi-account-edit</v-icon>
            <v-icon>mdi-close-thick</v-icon>
        </td>
      </tr>
    </tbody>
  </AdminMgmtResult>
</template>
<script>
import AdminMgmtResult from "./base/AdminAccResult";
export default {
  name: "ResultAdmin",
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