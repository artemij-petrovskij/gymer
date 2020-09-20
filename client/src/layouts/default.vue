<template>
  <div>
    <YourHeader />
    <YourSidebar />
    <div class="container">
      <router-view />
    </div>
    <YourFooter />
  </div>
</template>
 
<script>
  export default {
    name: 'defaultLayout'     // you can enter any name (optional)
  }
</script>
 
<style>
*{
  color:red
}
</style>