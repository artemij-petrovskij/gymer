<template>
  <el-container>
    <el-aside width="65px">
      <el-menu
        router
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        :collapse="true"
        style="height:100vh"
      >
        <el-menu-item index="/dashboard">
          <i class="el-icon-setting"></i>
          <span slot="title">Main</span>
        </el-menu-item>
        <el-menu-item index="/dashboard/calendar">
          <i class="el-icon-setting"></i>
          <span slot="title">Calendar</span>
        </el-menu-item>
        <el-menu-item index="/signup">
          <i class="el-icon-setting"></i>
          <span slot="title">Navigator Four</span>
        </el-menu-item>
        <el-menu-item index="/signup">
          <i class="el-icon-setting"></i>
          <span slot="title">Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>1</el-header>
      <el-main><router-view/> </el-main>
    </el-container>
  </el-container>
</template>
 
<script>
export default {
  name: "dashboard-template",
};
</script>
 
