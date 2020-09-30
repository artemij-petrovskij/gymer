<template>
  <div class="calendar">
    <el-calendar v-model="value" style="max-height:90px!important;"> </el-calendar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: new Date(),
    };
  },
};
</script>

<style lang="css" scoped>
.current {
  border-bottom: 0px!important;
}
</style>