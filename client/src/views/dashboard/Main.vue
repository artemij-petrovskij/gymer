<template>
  <div class="home">
    <h2>BOARD!</h2>
    <p>{{ user }}</p>
    <p>{{ jwt }}</p>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: localStorage.user,
      jwt: localStorage.jwt,
      isCollapse: true,
    };
  },
};
</script>
