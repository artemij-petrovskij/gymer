<template>
  <div class="training">
    <el-form
      style="
        max-width: 400px;
        position: relative;
        margin: 0px auto;
        padding: 20px;
      "
      :model="controls"
      :rules="rules"
      ref="controls"
      label-position="left "
    >
      <el-form-item style="text-align: left">
        Подход: {{ controls.set }}
      </el-form-item>
      <el-form-item label="Упражнение" prop="exercise">
        <el-autocomplete
          class="inline-input"
          v-model="controls.exercise"
          :fetch-suggestions="querySearch"
          placeholder="Please Input"
          @select="handleSelect"
          required
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

      <el-button-group>
        <el-button type="primary" @click="nextExercise('controls')"
          >Следующее Упражнение</el-button
        >
        <el-button type="primary" @click="nextSet('controls')"
          >Следующий подход <i class="el-icon-refresh"></i
        ></el-button>
      </el-button-group>
    </el-form>
  </div>
</template>

<script>
//import { Sportsman } from "@/services/sportsman.service.js";
export default {
  data() {
    return {
      controls: {
        set: 1,
        exercise: "",
        weight: 0,
        repeats: 0,
      },
      rules: {
        exercise: [
          {
            min: 1,
            max: 40,
            required: true,
            message: "Введите упражнение",
            trigger: "change",
          },
        ],
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
    async nextSet(formName) {
      /*
      let response = await Sportsman.changeWeight({
        user: localStorage.getItem("user"),
        jwt: localStorage.getItem("jwt"),
      });
      */
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let data = {
            user: localStorage.getItem("user"),
            jwt: localStorage.getItem("jwt"),
            set: this.controls.set,
            exercise: this.controls.exercise,
            weight: this.controls.weight,
            repeats: this.controls.repeats,
          };
          console.log(data);
          this.controls.set++;
          this.controls.repeats = 0;
        }
      });
    },
    async nextExercise() {
      this.controls.set = 1;
      this.controls.weight = 0;
      this.controls.repeats = 0;
      this.controls.exercise = "";
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
.el-button-group {
  width: 100%;
}
.el-button {
  width: 50%;
}
.el-form-item__error::after{
  position: relative!important;
  right: 0;
}
</style>