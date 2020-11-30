<template>
  <el-container>
    <el-aside width="65px">
      <el-menu
        router
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        :collapse="true"
        style="height: 100vh"
      >
        <el-menu-item index="/dashboard">
          <i class="el-icon-house"></i>
          <span slot="title">Главная</span>
        </el-menu-item>

        <el-menu-item index="/dashboard/weight">
          <i class="el-icon-user-solid"></i>
          <span slot="title">Вес</span>
        </el-menu-item>

        <el-menu-item index="/dashboard/training">
          <i class="el-icon-edit-outline"></i>
          <span slot="title">Тренировка</span>
        </el-menu-item>

        <el-menu-item @click="exit">
          <i class="el-icon-setting"></i>
          <span slot="title">Выход</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header><div class="route-header">{{ $route.meta.header }}</div></el-header>
      <el-main><router-view /> </el-main>
    </el-container>
  </el-container>
</template>
 
<script>
export default {
  name: "dashboard-template",
  methods: {
    exit() {
      localStorage.removeItem("jwt")
      localStorage.removeItem("user")
      this.$router.push("/login")
    },
  },
};
</script>
<style lang="css">
body{
  -webkit-touch-callout: none; 
  -webkit-user-select: none;   
  -khtml-user-select: none;    
  -moz-user-select: none;     
  -ms-user-select: none;       
  user-select: none;  
}
.route-header{
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
}
</style>
 
