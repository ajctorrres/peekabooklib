<template>
  <v-app>
    <v-container>
      <v-card outlined class="filter">
        <v-row>
          <v-col cols="10">
            <v-text-field
              label="Search ID number, name"
              hide-details="auto"
              v-model="newInput"
              v-on:keyup.enter="inputSearch(newInput)"
              dense
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="2" class="d-flex align-content-center">
            <v-select
              label="Show"
              v-bind:items="showNum"
              item-text="num"
              item-value="num"
              :menu-props="{ bottom: true, offsetY: true }"
              dense
              outlined
              hide-details
            ></v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="2">
            <v-select
              label="Year Level"
              v-bind:items="year_levels"
              item-text="lvl"
              item-value="lvl"
              :menu-props="{ bottom: true, offsetY: true }"
              dense
              outlined
              hide-details
            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-select
              v-model="selectedSchool"
              label="School"
              v-bind:items="schools"
              item-text="school"
              item-value="school"
              :menu-props="{ bottom: true, offsetY: true }"
              dense
              outlined
              hide-details

            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-select
              label="Department"
              v-bind:items="departments"
              item-text="dept"
              item-value="dept"
              :menu-props="{ bottom: true, offsetY: true }"
              dense
              outlined
              hide-details
            ></v-select>
          </v-col>
          <v-col cols="2">
            <v-select
              label="Status"
              v-bind:items="status"
              item-text="stat"
              item-value="stat"
              :menu-props="{ bottom: true, offsetY: true }"
              dense
              outlined
              hide-details
            ></v-select>
          </v-col>
        </v-row>
      </v-card>
      
      <v-card outlined class="acc-mgmt-cont">
        <v-simple-table fixed-header height="300px" class="acc-mgmt-table">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left" style="font-size:14px;">ID</th>
                <th class="text-left" style="font-size:14px;">Name</th>
                <th class="text-left" style="font-size:14px;">Course</th>
                <th class="text-left" style="font-size:14px;">Email</th>
                <th class="text-left" style="font-size:14px;">Contact</th>
                <th class="text-left" style="font-size:14px;">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="student in students" v-bind:key="student.id">
                <td>{{ student.id }}</td>
                <td>{{ student.name }}</td>
                <td>{{ student.course }}</td>
                <td>{{ student.email }}</td>
                <td>{{ student.contact }}</td>
                <td>{{ student.status }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    </v-container>
  </v-app>
</template>


<script>
export default {
  data() {
    return {
      input: "",
      newInput: "",
      school: '',
      selectedSchool: '',
      showNum: [{ num: "10" }, { num: "30" }, { num: "50" }, { num: "100" }],
      year_levels: [
        { lvl: "All" },
        { lvl: "First Year" },
        { lvl: "Second Year" },
        { lvl: "Third Year" },
        { lvl: "Fourth Year" },
        { lvl: "Fifth Year" },
      ],
      schools: [
        { school: "All" },
        { school: "Basic Education" },
        { school: "School of Architecture, Fine Arts and Design" },
        { school: "School of Arts and Sciences" },
        { school: "School of Business and Economics" },
        { school: "School of Education" },
        { school: "School of Engineering" },
        { school: "School of Healthcare Professions" },
        { school: "School of Law and Governance" },
      ],
      departments: [{ dept: "All" }],
      status: [{ stat: "All" }, { stat: "Active" }, { stat: "Disabled" }],
      students: [
        { id: '00000', name: 'Vin', course: 'BSCS', email: 'vin@gmail.com', contact: '712635', status: true}
      ]
    };
  },
  methods: {
    inputSearch: function (newInput) {
      this.input = newInput;
    }
  },
};
</script>
<style scoped>
.filter {
  margin-top: 30px;
  padding: 15px 25px 15px 25px;
  text-align: left;
}
.v-select {
  font-size: 14px;
}
.acc-mgmt-cont {
  margin-top: 35px;
}
</style>