<template>
  <v-container>
    <slot name="header"></slot>
    <v-card outlined class="acc-mgmt-cont">
      <v-simple-table fixed-header height="300px" class="acc-mgmt-table">
          <thead>
            <tr>
              <th class="text-left" style="font-size: 14px">ID</th>
              <th class="text-left" style="font-size: 14px">Name</th>
              <slot name="courseCol"></slot>
              <th class="text-left" style="font-size: 14px">Email</th>
              <th class="text-left" style="font-size: 14px">Contact</th>
              <slot name="campusCol"></slot>
              <slot name="edit"><th class="text-left" style="font-size: 14px">Status</th></slot>
            </tr>
          </thead>
          <slot name="resultBody"></slot>
      </v-simple-table>
    </v-card>
  </v-container>
</template>
<style scoped>
</style>
<script>
export default {
  name: "AdminMgmtResult"
};
</script>