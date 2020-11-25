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
              return-object
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
              return-object
            ></v-select>
          </v-col>
          <v-col cols="4">
            <v-select
              v-model="selectedSchool"
              label="School"
              v-bind:items="schools"
              item-text="value"
              item-value="value"
              :menu-props="{ bottom: true, offsetY: true }"
              dense
              outlined
              hide-details
              return-object
              v-on:change="changeDept(selectedSchool)"
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
              return-object
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
              return
              object
            ></v-select>
          </v-col>
        </v-row>
      </v-card>

      <v-card outlined class="acc-mgmt-cont">
        <v-simple-table fixed-header height="300px" class="acc-mgmt-table">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left" style="font-size: 14px">ID</th>
                <th class="text-left" style="font-size: 14px">Name</th>
                <th class="text-left" style="font-size: 14px">Course</th>
                <th class="text-left" style="font-size: 14px">Email</th>
                <th class="text-left" style="font-size: 14px">Contact</th>
                <th class="text-left" style="font-size: 14px">Status</th>
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
      showNum: [{ num: "10" }, { num: "30" }, { num: "50" }, { num: "100" }],
      year_levels: [
        { lvl: "All"},
        { lvl: "First Year" },
        { lvl: "Second Year" },
        { lvl: "Third Year" },
        { lvl: "Fourth Year" },
        { lvl: "Fifth Year" }
      ],
      yearData: {
        BED: [
          { lvl: "All"}
        ],
        College: [
          { lvl: "All"},
          { lvl: "First Year" },
          { lvl: "Second Year" },
          { lvl: "Third Year" },
          { lvl: "Fourth Year" },
          { lvl: "Fifth Year" }
        ]
      },
      selectedSchool: "",
      school: "",
      schools: [
        { value: "All" },
        { value: "Basic Education" },
        { value: "School of Architecture, Fine Arts and Design" },
        { value: "School of Arts and Sciences" },
        { value: "School of Business and Economics" },
        { value: "School of Education" },
        { value: "School of Engineering" },
        { value: "School of Healthcare Professions" },
        { value: "School of Law and Governance" },
      ],
      departments: [
          { dept: "All" },
          { dept: "Department of Architecture" },
          { dept: "Department of Fine Arts" },

          { dept: "Department of Anthropology, Sociology and History" },
          { dept: "Department of Biology" },
          { dept: "Department of Chemistry" },
          { dept: "Department of Communications, Linguistics and Literature" },
          { dept: "Department of Computer, Information Sciences and Mathematics" },
          { dept: "Department of General Education and Mission" },
          { dept: "Department of Philosophy" },
          { dept: "Department of Physics" },
          { dept: "Department of Psychology" },
          { dept: "Mathematics Section" },

          { dept: "Department of Accountancy" },
          { dept: "Department of Business Administration" },
          { dept: "Department of Economics" },
          { dept: "Department of Hospitality Management" },

          { dept: "Department of Science and Mathematics Education" },
          { dept: "Department of Teacher Education" },

          { dept: "Department of Chemical Engineering" },
          { dept: "Department of Civil Engineering" },
          { dept: "Department of Computer Engineering" },
          { dept: "Department of Electrical and Electronics Engineering" },
          { dept: "Department of Industrial Engineering" },

          { dept: "Department of Nursing" },
          { dept: "Department of Nutrition and Dietetics" },
          { dept: "Department of Pharmacy" },

          { dept: "Department of Political Science" },
          { dept: "Law" }
      ],
      departmentData: {
        All: [
          { dept: "All" },
          { dept: "Department of Architecture" },
          { dept: "Department of Fine Arts" },

          { dept: "Department of Anthropology, Sociology and History" },
          { dept: "Department of Biology" },
          { dept: "Department of Chemistry" },
          { dept: "Department of Communications, Linguistics and Literature" },
          { dept: "Department of Computer, Information Sciences and Mathematics" },
          { dept: "Department of General Education and Mission" },
          { dept: "Department of Philosophy" },
          { dept: "Department of Physics" },
          { dept: "Department of Psychology" },
          { dept: "Mathematics Section" },

          { dept: "Department of Accountancy" },
          { dept: "Department of Business Administration" },
          { dept: "Department of Economics" },
          { dept: "Department of Hospitality Management" },

          { dept: "Department of Science and Mathematics Education" },
          { dept: "Department of Teacher Education" },

          { dept: "Department of Chemical Engineering" },
          { dept: "Department of Civil Engineering" },
          { dept: "Department of Computer Engineering" },
          { dept: "Department of Electrical and Electronics Engineering" },
          { dept: "Department of Industrial Engineering" },

          { dept: "Department of Nursing" },
          { dept: "Department of Nutrition and Dietetics" },
          { dept: "Department of Pharmacy" },

          { dept: "Department of Political Science" },
          { dept: "Law" }
        ],
        BED: [
          { dept: "All" }
        ],
        SAFAD: [
          { dept: "All" },
          { dept: "Department of Architecture" },
          { dept: "Department of Fine Arts" }
        ],
        SAS: [
          { dept: "All" },
          { dept: "Department of Anthropology, Sociology and History" },
          { dept: "Department of Biology" },
          { dept: "Department of Chemistry" },
          { dept: "Department of Communications, Linguistics and Literature" },
          { dept: "Department of Computer, Information Sciences and Mathematics" },
          { dept: "Department of General Education and Mission" },
          { dept: "Department of Philosophy" },
          { dept: "Department of Physics" },
          { dept: "Department of Psychology" },
          { dept: "Mathematics Section" }
        ],
        SBE: [
          { dept: "All" },
          { dept: "Department of Accountancy" },
          { dept: "Department of Business Administration" },
          { dept: "Department of Economics" },
          { dept: "Department of Hospitality Management" }
        ],
        SED: [
          { dept: "All" },
          { dept: "Department of Science and Mathematics Education" },
          { dept: "Department of Teacher Education" }
        ],
        SOE: [
          { dept: "All" },
          { dept: "Department of Chemical Engineering" },
          { dept: "Department of Civil Engineering" },
          { dept: "Department of Computer Engineering" },
          { dept: "Department of Electrical and Electronics Engineering" },
          { dept: "Department of Industrial Engineering" }
        ],
        SHCP: [
          { dept: "All" },
          { dept: "Department of Nursing" },
          { dept: "Department of Nutrition and Dietetics" },
          { dept: "Department of Pharmacy" }
        ],
        SLG: [
          { dept: "All" },
          { dept: "Department of Political Science" },
          { dept: "Law" }
        ]
      },

      status: [{ stat: "All" }, { stat: "Active" }, { stat: "Suspended" }, { stat: "Removed"}],
      students: [
        {
          id: "00000",
          name: "Vin",
          course: "BSCS",
          email: "vin@gmail.com",
          contact: "712635",
          status: true,
        },
      ],
    };
  },
  methods: {
    inputSearch: function (newInput) {
      this.input = newInput;
    },
    changeDept: function (selectedSchool) {
      switch(selectedSchool.value) {
         case 'All':
          this.year_levels = this.yearData.College
          this.departments = this.departmentData.All
          break;

        case 'Basic Education':
          this.year_levels = this.yearData.BED
          this.departments = this.departmentData.BED
          break;

        case 'School of Architecture, Fine Arts and Design':
          this.year_levels = this.yearData.College
          this.departments = this.departmentData.SAFAD
          break;

        case 'School of Arts and Sciences':
          this.year_levels = this.yearData.College
          this.departments = this.departmentData.SAS
          break;

        case 'School of Business and Economics':
          this.year_levels = this.yearData.College
          this.departments = this.departmentData.SBE
          break;
        
        case 'School of Education':
          this.year_levels = this.yearData.College
          this.departments = this.departmentData.SED
          break;

        case 'School of Engineering':
          this.year_levels = this.yearData.College
          this.departments = this.departmentData.SOE
          break;
        
        case 'School of Healthcare Professions':
          this.year_levels = this.yearData.College
          this.departments = this.departmentData.SHCP
          break;
        
        case 'School of Law and Governance':
          this.year_levels = this.yearData.College
          this.departments = this.departmentData.SLG
          break;
      }
    }
  }
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