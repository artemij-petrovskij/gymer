<template>
  <div class="training">
    <el-table :data="trainings" style="width: 100%">
      <el-table-column prop="exercise" label="Упражнение"> </el-table-column>
      <el-table-column prop="set" label="Подход №"> </el-table-column>

      <el-table-column prop="weight" label="Вес"> </el-table-column>
      <el-table-column prop="repeats" label="Повторы"> </el-table-column>
    </el-table>
    <div class="form">
      <el-form
        style="
          max-width: 600px;
          position: relative;
          margin-left: 20px;
          margin: 20px auto;
          padding: 20px;
        "
        :model="controls"
        :rules="rules"
        ref="controls"
        label-position="left "
      >
        <el-form-item class="set" style="text-align: left">
          Подход: {{ controls.set }}
        </el-form-item>
        <el-form-item prop="exercise">
          <el-autocomplete
            v-model="controls.exercise"
            :fetch-suggestions="querySearch"
            placeholder="Please Input"
          ></el-autocomplete>
        </el-form-item>

        <el-form-item class="weight" label="Вес:">
          <div class="block">
            <span class="demonstration">{{ controls.weight }}</span>
            <el-slider
              v-model="controls.weight"
              :show-tooltip="false"
            ></el-slider>
          </div>
        </el-form-item>
        <el-form-item class="repeats" label="Повторения:">
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
            >Закончить
          </el-button>
          <el-button type="primary" @click="nextSet('controls')"
            >Подход <i class="el-icon-refresh"></i
          ></el-button>
        </el-button-group>
      </el-form>
    </div>
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
            max: 80,
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
        { value: "Жим штанги лежа на горизонтальной скамье" },
        { value: "Жим штанги лежа на наклонной скамье" },

        { value: "Жим гантелей лежа на горизонтальной скамье" },
        { value: "Жим гантелей лежа на наклонной скамье" },

        { value: "Разведения гантелей лежа на наклонной скамье" },
        { value: "Разведения гантелей лежа на горизонтальной скамье" },

        { value: "Жим штанги лежа узким хватом на горизонтальной скамье" },
        { value: "Жим штанги лежа узким хватом на наклонной скамье" },

        { value: "Жим штанги сидя (смит)" },
        { value: "Жим штанги стоя" },
        { value: "Жим гантелей стоя" },

        { value: "Подтягивания" },
        { value: "Подтягивания обратным хватом" },

        { value: "Подъемы гантелей (махи) через стороны вверх" },
        { value: "Подъемы гантелей через стороны вверх в наклоне" },
        { value: "Дэнчик (плечи)" },

        { value: "Приседания со штангой на спине" },
        { value: "Выпады с гантелями" },
        { value: "Разгибание ног в тренажере" },
        { value: "Жим ногами" },
        { value: "Подъемы на носки сидя " },

        { value: "Гиперэкстензии" },
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
  background-color: #dbd9de;
  border-radius: 20px;
}
.el-button-group {
  width: 100%;
}
.el-button {
  width: 50%;
}

.form {
  padding: 10px;
}
.set,
.weight,
.repeats {
  font-weight: bold;
  color: black !important;
}
.el-autocomplete {
  width: 100%;
}
</style>