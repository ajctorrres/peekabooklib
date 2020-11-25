<template>
  <v-app>
    <v-container>
      <h5 class="activityHistory">Activity History</h5>
      <v-card outlined>
        <v-simple-table fixed-header height="300px" class="acc-mgmt-table">
          <thead>
            <tr>
              <th class="text-left" style="font-size: 14px">Date</th>
              <th class="text-left" style="font-size: 14px">Activity</th>
              <th class="text-left" style="font-size: 14px">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="activity in activities" v-bind:key="activity.id">
              <td>{{ activity.date }}</td>
              <td>{{ activity.activity }}</td>
              <td>{{ activity.details }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
    name: 'AdminActivity',
    data(){
        return{
            activities: [
                {
                    date: "Sept 5 2020",
                    activity: "Student Account",
                    details: "Suspended Xiangling"
                }
            ]
        }
    }
};
</script>

<style scoped>
.activityHistory{
    font-size: 15px;
    margin: 0px 0px 15px 10px;
    font-weight: bolder;
}
</style>