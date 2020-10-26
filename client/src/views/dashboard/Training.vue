<template>
  <div class="training">
    <el-form
      style="
        max-width: 400px;
        position: relative;
        margin: 0px auto;
        padding: 20px;
      "
      ref="controls"
      label-position="left "
    >
      <el-form-item style="text-align: left">
        Подход: {{ controls.set }}
      </el-form-item>
      <el-form-item label="Упражнение">
        <el-autocomplete
          class="inline-input"
          v-model="controls.ex"
          :fetch-suggestions="querySearch"
          placeholder="Please Input"
          @select="handleSelect"
        ></el-autocomplete>
      </el-form-item>

      <el-form-item label="Вес:">
        <div class="block">
          <span class="demonstration">{{ controls.weight }}</span>
          <el-slider
            v-model="controls.weight"
            :show-tooltip="false"
          ></el-slider>
        </div>
      </el-form-item>
      <el-form-item label="Повторения:">
        <div class="block">
          <span class="demonstration">{{ controls.repeats }}</span>
          <el-slider
            v-model="controls.repeats"
            :show-tooltip="false"
          ></el-slider>
        </div>
      </el-form-item>

      <el-button type="primary" @click="submitForm('controls')"
        >Сохранить</el-button
      >
    </el-form>
  </div>
</template>

<script>
import { Sportsman } from "@/services/sportsman.service.js";
export default {
  data() {
    return {
      controls: {
        set: "1",
        weight: "",
        repeats: "",
      },
    };
  },
  methods: {
    querySearch(queryString, cb) {
      var links = this.links;
      var results = queryString
        ? links.filter(this.createFilter(queryString))
        : links;
      // call callback function to return suggestions
      cb(results);
    },
    createFilter(queryString) {
      return (link) => {
        return (
          link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    loadAll() {
      return [
        { value: "element" },
        { value: "cooking" },
        { value: "mint-ui" },
        { value: "vuex" },
        { value: "vue-router" },
        { value: "babel" },
      ];
    },
    handleSelect(item) {
      console.log(item);
    },
    async submitForm() {
      let response = await Sportsman.changeWeight({
        user: localStorage.getItem("user"),
        jwt: localStorage.getItem("jwt"),
      });
      this.weights = response.reverse();
    },
  },
  mounted() {
    this.links = this.loadAll();
  },
  async created() {
    /*
    let response = await Sportsman.777({
      user: localStorage.getItem("user"),
      jwt: localStorage.getItem("jwt"),
    });
    this.weights = response.reverse();
    console.log(this.weights[0].weight);
    this.controls.weight = this.weights[0].weight;
    */
  },
};
</script>

<style lang="css" scoped>
.el-form {
  text-align: right !important;
}
.el-button {
  width: 100%;
}
</style>