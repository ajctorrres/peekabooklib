<template>
  <v-container class="pt-0">
    <v-card outlined class="filter">
      <v-row>
        <v-col cols="10" class="pa-1 pr-2">
          <v-text-field
            placeholder="Search ID number, name"
            hide-details="auto"
            v-model="newInput"
            v-on:keyup.enter="inputSearch(newInput)"
            outlined
            height="35px"
          ></v-text-field>
        </v-col>
        <v-col cols="2" class="d-flex align-content-center pa-1 pl-2">
          <v-select
            label="Show"
            v-bind:items="showNum"
            item-text="num"
            item-value="num"
            :menu-props="{ bottom: true, offsetY: true }"
            height="35px"
            outlined
            hide-details
            return-object
          ></v-select>
        </v-col>
      </v-row>
      <slot name="additionalFilter"></slot>
    </v-card>
  </v-container>
</template>


<script>
export default {
  name: "AdminFilter",
  data() {
    return {
      input: "",
      newInput: "",
      showNum: [{ num: "10" }, { num: "30" }, { num: "50" }, { num: "100" }],
    };
  },
  methods: {
    inputSearch: function (newInput) {
      this.input = newInput;
    },
  },
};
</script>
<style scoped>
.filter {
  margin-top: 5px;
  padding: 15px 25px 15px 25px;
}
.v-select {
  font-size: 14px;
}
.filter{
  background: rgb(252, 252, 252);
}
</style>
<style>
.v-text-field .v-input__control .v-input__slot{
  min-height: auto !important;
  display: flex !important;
  align-items: center !important;
}
.v-select .v-input__control .v-input__slot{
  min-height: auto !important;
  display: flex !important;
  align-items: center !important;
}
.v-select .v-input__control .v-input__slot .v-select__selections {
  padding-bottom: 15px;
}
</style>