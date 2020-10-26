<template>
  <div class="weight">
    <el-form
      style="
        max-width: 400px;
        position: relative;
        margin: 0px auto;
        padding: 20px;
      "
      ref="controls"
      label-width="90px"
      label-position="left "
    >
      <el-form-item label="Вес" prop="weight">
        <el-input-number
          v-model="controls.weight"
          :precision="2"
          :step="0.1"
          :max="400"
        ></el-input-number>
      </el-form-item>

      <el-button type="primary" @click="submitForm('controls')"
        >Сохранить</el-button
      >
    </el-form>
    <el-table
      :data="weights"
      stripe
      height="450"
      fixed
      style="width: 100%; display: inline-block"
    >
      <el-table-column prop="date" label="Дата"> </el-table-column>
      <el-table-column prop="weight" label="Вес"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { Sportsman } from "@/services/sportsman.service.js";

export default {
  data() {
    return {
      weights: [],
      controls: {
        weight: "",
      },
    };
  },
  async created() {
    let response = await Sportsman.allWeights({
      user: localStorage.getItem("user"),
      jwt: localStorage.getItem("jwt"),
    });
    this.weights = response.reverse();
    console.log(this.weights[0].weight);
    this.controls.weight = this.weights[0].weight;
  },

  methods: {
    async submitForm() {
      let response = await Sportsman.changeWeight({
        user: localStorage.getItem("user"),
        jwt: localStorage.getItem("jwt"),
        weight: this.controls.weight,
      });
      this.weights = response.reverse();
    },
  },
};
</script>

<style lang="css" scoped>
.el-table td {
  text-align: center;
}
.el-button {
  width: 100%;
}
.el-form {
  position: fixed;
}
</style>