<template>
  <v-app>
    <div class="v-container">
      <div class="v-row">
        <h5 class="header">Monthly Summary</h5>
        <b-card-group deck>
          <v-card class="summary_card" elevation="2">
            <v-card-title class="title">0</v-card-title>
            <v-card-subtitle class="subtitle">Visitors</v-card-subtitle>
            <v-card-text class="text">Month of </v-card-text>
          </v-card>
          <v-card class="summary_card" elevation="2">
            <v-card-title class="title">0</v-card-title>
            <v-card-subtitle class="subtitle">Books Borrowed</v-card-subtitle>
            <v-card-text class="text">Month of </v-card-text>
          </v-card>
          <v-card class="summary_card" elevation="2">
            <v-card-title class="title">0</v-card-title>
            <v-card-subtitle class="subtitle">Books Returned</v-card-subtitle>
            <v-card-text class="text">Month of </v-card-text>
          </v-card>
        </b-card-group>
      </div>
      <div class="v-row">
        <h5 class="header">Today's Dues</h5>
        <v-simple-table fixed-header height="300px" class="today_dues_table">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left" style="font-size: 16px">Book Name</th>
                <th class="text-left" style="font-size: 16px">Borrower Name</th>
                <th class="text-left" style="font-size: 16px">Date Borrowed</th>
                <th class="text-left" style="font-size: 16px">
                  Contact Number
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="due in todayDues" v-bind:key="due.book_name">
                <td>{{ due.book_name }}</td>
                <td>{{ due.borrower_name }}</td>
                <td>{{ due.date_borrowed }}</td>
                <td>{{ due.contact_number }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>

      <div class="v-row">
        <v-row>
          <v-col cols="7">
            <h5 class="middle">Summary Report</h5>
          </v-col>
          <v-col cols="5">
            <v-form>
              <v-row>
                <v-col cols="5">
                  <v-select
                    label="Month"
                    id="monthInput"
                    v-model="monthSelect"
                    v-bind:items="months"
                    item-text="month"
                    item-value="month"
                    :menu-props="{ bottom: true, offsetY: true }"
                    dense
                    outlined
                    hide-details
                  ></v-select>
                </v-col>
                <v-col cols="4">
                  <v-select
                    label="Type of Report"
                    id="reportType"
                    v-model="reportTypeSelect"
                    v-bind:items="report_types"
                    item-text="type"
                    item-value="type"
                    :menu-props="{ bottom: true, offsetY: true }"
                    dense
                    outlined
                    hide-details
                  ></v-select>
                </v-col>
                <v-col cols="2">
                  <v-btn type="submit" depressed id="generateBtn"
                    >Generate</v-btn
                  >
                </v-col>
              </v-row>
            </v-form>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-app>
</template>


<script>
export default {
  data() {
    return {
      todayDues: [
        {
          book_name: "Percy Jackson & Olympians",
          borrower_name: "Kim Taehyung",
          date_borrowed: "November 12",
          contact_number: "09234124125",
        },
        {
          book_name: "Popsicle Flavor in Genshin",
          borrower_name: "Chonghyun",
          date_borrowed: "November 13",
          contact_number: "09128371412",
        },
      ],
      monthSelect: "",
      months: [
        { month: "January" },
        { month: "February" },
        { month: "March" },
        { month: "April" },
        { month: "May" },
        { month: "June" },
        { month: "July" },
        { month: "August" },
        { month: "September" },
        { month: "October" },
        { month: "November" },
        { month: "December" },
      ],
      reportTypeSelect: "",
      report_types: [
        { type: "Monthly" },
        { type: "Quarterly" },
        { type: "Annual" }
      ],
    };
  },
};
</script>
<style scoped>
.v-container {
  margin: 40px 120px 220px 120px;
}
.v-row {
  margin: 40px 10px 60px 10px;
  text-align: left;
}
.header {
  font-weight: bolder;
  margin-bottom: 19px;
  font-size: 17px;
}
.today_dues_table {
  border: 0.5px solid rgb(163, 163, 163);
  border-radius: 10px;
  padding: 0px 20px 0px 20px;
}
.summary_form select {
  margin-right: 10px;
}
.summary_card {
  background: rgb(235, 235, 235);
  width: 250px;
  border: none;
  margin: 12px;
}
.summary_card .title {
  font-size: 30px;
  font-weight: bolder;
}
</style>