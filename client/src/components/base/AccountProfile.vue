<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-img
          v-bind:src="user.pic"
          alt="Rounded image"
          max-height="100%"
          max-width="100%"
          id="user-profile-pic"
        ></v-img>
      </v-col>
      <v-col cols="9">
        <v-card outlined>
          <v-card elevation="1" class="header-card">
            <v-icon x-large class="float-sm-left">mdi-account</v-icon>
            <slot name="profile-title"></slot>
          </v-card>
          <v-container class="content">
            <v-row>
              <v-col cols="3" class="content-label">
                <p>Name</p>
              </v-col>
              <v-col cols="9">
                <p>{{ user.name }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3" class="content-label">
                <p>ID Number</p>
              </v-col>
              <v-col cols="9">
                <p>{{ user.id }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3" class="content-label">
                <p>Date of Birth</p>
              </v-col>
              <v-col cols="9">
                <p>{{ user.bday }}</p>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <slot name="add-content"></slot>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
            
<style scoped>
#user-profile-pic {
  margin-top: 20px;
  border-radius: 20px;
}
.v-icon {
  margin-right: 10px;
}
.content .col-9{
  padding:0px;
  margin:0px;
  margin-bottom: 3px;
}
.content .col-3{
  padding:0px;
  margin:0px;
}
.content-label {
  color: grey;
}
.content {
  font-size: 16px;
  padding: 10px 40px 10px 60px;
}
.content p {
  margin-bottom: 8px;
}
.header-card {
  background: rgb(240, 240, 240);
  padding: 10px;
  margin: 10px;
}
</style>
<script>
export default {
  name: "AccountProfile",
  props: {
    user: {
      type: Array,
    },
  },
};
</script>