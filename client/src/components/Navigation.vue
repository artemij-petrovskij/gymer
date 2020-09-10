<template>
  <div class="container">
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
      <el-menu-item index="/login">Log In</el-menu-item>
      <el-menu-item index="/signup">Sign Up</el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped>
.el-menu {
  background-color: red;
}
.logo {
  font-size: 20px;
  text-decoration: none;
}
</style>
