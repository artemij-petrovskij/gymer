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
          :step="0.01"
          :max="400"
        ></el-input-number>
      </el-form-item>

      <el-button type="primary" @click="submitForm('controls')"
        >Сохранить</el-button
      >
    </el-form>
  </div>
</template>

<script>
/*
import { User } from "@/services/weight.service.js";
*/
export default {
  data() {
    return {
      controls: {
        weight: "",
      },
    };
  },

  methods: {
    submitForm() {
      // this.addUser();
    },
    async changeWeight() {
      
    },
  },
};
</script>

<style lang="css" scoped>
.el-button {
  width: 100%;
}
</style>