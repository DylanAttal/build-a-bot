<template>
  <div class="home">
    <div>
      <img
        class="robot"
        src="../assets/robot-home.png"
        aria-hidden="true"
        alt="Robot with head, arms, torso, and base."
      >
    </div>
    <div class="get-started">
      <router-link to="/build">Get started</router-link>&nbsp;building your robot!
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  created() {
    console.log(process.env.VUE_APP_TEST, process.env.SOME_TEST);
  },
  props: {
    msg: String
  }
};
</script>

<style scoped>
.home {
  text-align: center;
}
.robot {
  height: 300px;
}
</style>
