<template>
  <div class="training">
    <el-table :data="trainings" style="width: 100%">
      <el-table-column width="80" prop="set" label="Подход"> </el-table-column>
      <el-table-column prop="exercise" label="Упражнение"> </el-table-column>

      <el-table-column width="80" prop="weight" label="Вес"> </el-table-column>
      <el-table-column width="85" prop="repeats" label="Повторы"> </el-table-column>
    </el-table>
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
import { Sportsman } from "@/services/training.service.js";
export default {
  data() {
    return {
      trainings: [],
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
    nextSet(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.sendData();
          this.controls.set++;
          this.controls.repeats = 0;
        }
      });
    },
    async sendData() {
      let response = await Sportsman.addSet({
        user: localStorage.getItem("user"),
        jwt: localStorage.getItem("jwt"),
        set: this.controls.set,
        exercise: this.controls.exercise,
        weight: this.controls.weight,
        repeats: this.controls.repeats,
      });
      this.trainings = response;
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
    let response = await Sportsman.allTrainings({
      user: localStorage.getItem("user"),
      jwt: localStorage.getItem("jwt"),
    });
    this.trainings = response;
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
.el-form-item__error::after {
  position: relative !important;
  right: 0;
}
</style>