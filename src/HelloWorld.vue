<template>
  <div class="font-sans welcome-msg">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
// import Button from "./components/w-button"

export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: 'HelloWorld',
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
