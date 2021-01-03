<template>
  <el-container>
    <el-form
   
      style="width: 600px"
      label-position="top"
    >
      <el-form-item label="Логин:">
        <div label="top">-</div>
      </el-form-item>
      <el-form-item label="Пароль:">
        <div label="top">-</div>
      </el-form-item>

      <el-form-item >
         <el-button type="danger" @click="exit">Выйти</el-button>
      </el-form-item>

     
    </el-form>
  </el-container>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    exit() {
      localStorage.removeItem("jwt");
      localStorage.removeItem("user");
      this.$router.push("/login");
    },
  },
};
</script>
<style lang="css" scoped>
.el-form{
    margin:50px;
}
.el-form-item{
    text-align:left;
    font-weight: bold;
}
</style>