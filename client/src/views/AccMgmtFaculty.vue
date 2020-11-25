<template>
  <v-app>
    <FilterFaculty></FilterFaculty>
    <ResultFaculty v-bind:users="faculties">
        <h5 slot="header">Faculty Accounts</h5>
    </ResultFaculty>
  </v-app>
</template>
<style scoped>
  h5{
    font-size: 16px;
    margin: 0px 0px 10px 10px;
  }
</style>
<script>
import FilterFaculty from "../components/FilterFaculty";
import ResultFaculty from "../components/ResultFaculty";
export default {
  name: "AccMgmtFaculty",
  components: {
    FilterFaculty,
    ResultFaculty,
  },
  data(){
    return{
      faculties: [
        {
          id: "00010",
          name: "Jean",
          email: "jean@gmail.com",
          contact: "712635",
          status: "active",
        },
        {
          id: "00020",
          name: "Dilluc",
          email: "dilluc@gmail.com",
          contact: "712635",
          status: "suspended"
        }
      ]
    }
  }
};
</script>