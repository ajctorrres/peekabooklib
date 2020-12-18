<template>
  <v-app>
    <FilterStudent></FilterStudent>
    <ResultStudent v-bind:users="students"></ResultStudent>
  </v-app>
</template>

<style scoped>
h5 {
  font-size: 16px;
  margin: 0px 0px 10px 10px;
}
</style>

<script>
import FilterStudent from "../components/FilterStudent";
import ResultStudent from "../components/ResultStudent";
export default {
  name: "AccMgmtStudent",
  components: {
    FilterStudent,
    ResultStudent,
  },
  data() {
    return {
      students: [
        {
          id: "00000",
          name: "CTest",
          course: "Psychology",
          email: "chonghyun@gmail.com",
          contact: "712635",
          status: "active",
        },
        {
          id: "00001",
          name: "Xiangling",
          course: "Chef",
          email: "xiangling@gmail.com",
          contact: "712635",
          status: "suspended",
        },
        {
          id: "00002",
          name: "Xingqui",
          course: "Librarian",
          email: "xingqui@gmail.com",
          contact: "712635",
          status: "active",
        },
      ],
    };
  },
};
</script>