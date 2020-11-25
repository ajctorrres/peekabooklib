<template>
  <v-app>
    <AdminFilter></AdminFilter>
    <ResultAdmin v-bind:users="admins">
        <h5 slot="header">Admin Accounts</h5>
    </ResultAdmin>
  </v-app>
</template>
<style scoped>
  h5{
    font-size: 16px;
    margin: 0px 0px 10px 10px;
  }
</style>
<script>
import AdminFilter from "../components/base/AdminFilter";
import ResultAdmin from "../components/ResultAdmin";
export default {
  name: "AccMgmtFaculty",
  components: {
    AdminFilter,
    ResultAdmin,
  },
  data(){
    return{
      admins: [
        {
          id: "00110",
          name: "Kim",
          email: "kim@gmail.com",
          contact: "712635",
          campus: "Talamban",
        },
        {
          id: "00120",
          name: "Taehyung",
          email: "taehyung@gmail.com",
          contact: "712635",
          campus: "North"
        }
      ]
    }
  }
};
</script>