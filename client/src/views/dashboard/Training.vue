<template>
  <div class="training">
    <el-table v-loading="loading" :data="trainings" style="width: 100%">
      <el-table-column prop="exercise" label="Упражнение"> </el-table-column>
      <el-table-column prop="set" label="Подход №"> </el-table-column>
      <el-table-column prop="weight" label="Вес"> </el-table-column>
      <el-table-column prop="repeats" label="Повторы"> </el-table-column>
      <el-table-column label="Дата">
        <template slot-scope="scope">
          {{ scope.row.date }}
        </template>
      </el-table-column>
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
            class="inline-input"
            v-model="controls.exercise"
            :fetch-suggestions="querySearch"
            placeholder="Упражнение"
            @select="handleSelect"
            clearable
          ></el-autocomplete>
        </el-form-item>
        <el-form-item
          class="set"
          v-if="exercise_exist"
          style="text-align: left"
        >
          Макс. вес: {{ max.weight }} × {{ max.repeats }} раз(a)
        </el-form-item>

        <el-form-item class="weight" label="Вес:">
          <div class="block">
            <span class="demonstration">{{ controls.weight }}</span>
            <div class="block">
              <el-slider
                v-model="controls.weight"
                show-input
                inputmode="numeric"
                :max="150"
              >
              </el-slider>
            </div>
          </div>
        </el-form-item>
        <el-form-item class="repeats" label="Повторения:">
          <div class="block">
            <span class="demonstration">{{ controls.repeats }}</span>
            <el-slider
              v-model="controls.repeats"
              show-input
              inputmode="numeric"
              :show-tooltip="false"
              :max="40"
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
      loading: true,
      exercise_exist: false,
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
      max: {
        set: 0,
        exercise: 0,
        weight: 0,
        repeats: 0,
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

        { value: "Разгибания рук на верхнем блоке" },
        { value: "Становая тяга" },
        { value: "Подъем штанги на бицепс" },
        { value: " Кроссоверы на верхних блоках" },
        { value: " Кроссоверы на средних блоках" },

        { value: "Жим штанги сидя (смит)" },
        { value: "Жим штанги стоя" },
        { value: "Жим гантелей стоя" },

        { value: "Подтягивания" },
        { value: "Подтягивания обратным хватом" },

        { value: "Подъемы гантелей (махи) через стороны вверх" },
        { value: "Подъемы гантелей через стороны вверх в наклоне" },

        { value: "Дэнчик (плечи)" },

        { value: "Тяга штанги на прямых ногах" },
        { value: "Гильотина" },

        { value: "Приседания со штангой на спине" },
        { value: "Выпады с гантелями" },
        { value: "Разгибание ног в тренажере" },
        { value: "Жим ногами" },
        { value: "Подъемы на носки сидя " },

        { value: "Гиперэкстензии" },
      ];
    },
    handleSelect(item) {
      this.maxSet(item.value);
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

    async maxSet(set) {
      let response = await Sportsman.maxSet({
        jwt: localStorage.getItem("jwt"),
        exercise: set,
      });

      this.max.exercise = response.exercise;
      this.max.weight = response.weight;
      this.max.set = response.set;
      this.max.repeats = response.repeats;
      if (response.weight) {
        console.log(typeof response);
        this.exercise_exist = true;
      } else {
        this.exercise_exist = false;
      }
    },
  },

  mounted() {
    this.links = this.loadAll();
  },
  async created() {
    let response = await Sportsman.allTrainings({
      jwt: localStorage.getItem("jwt"),
    });
    this.trainings = response;
    this.loading = false;
  },
};
</script>

<style lang="css" scoped>
.el-form {
  text-align: right !important;

  border-radius: 20px;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    0px 0px 25px 0px rgba(58, 58, 58, 0.19);
  box-shadow: 0px 10px 13px -7px #808080,
    0px 0px 25px 0px rgba(58, 58, 58, 0.19);
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