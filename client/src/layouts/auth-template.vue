<template>
  <div class="container">
    <el-container>
      <el-header>
        <el-menu
          router
          class="el-menu-demo"
          mode="horizontal"
          :default-active="$route.path"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="/">
            <a index="/" class="logo">GYMER</a>
          </el-menu-item>
          <el-menu-item index="/login">Вход</el-menu-item>
          <el-menu-item index="/signup">Регистрация</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>
 
<script>
export default {
  name: "auth-template", // you can enter any name (optional)
};
</script>
 