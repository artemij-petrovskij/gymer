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

        <el-menu-item index="/dashboard/calendar">
          <i class="el-icon-date"></i>
          <span slot="title">Календарь</span>
        </el-menu-item>

        <el-menu-item @click="exit">
          <i class="el-icon-setting"></i>
          <span slot="title">Выход</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>{{ $route.name }}</el-header>
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
 
