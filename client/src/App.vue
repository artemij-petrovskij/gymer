<template>
  <div id="app">
    <el-container>
      <el-header>
        <navigation />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import navigation from "./components/Navigation";
export default {
  name: "Home",
  components: {
    navigation,
  },
};
</script>

<style>
html, body, .el-header, .el-main{
  margin:0px;
  padding: 0px;
}



#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
