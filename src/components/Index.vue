<template>
    <div class="visitor-page">
        {{msg}}
        <p><router-link to="/">首页</router-link></p>
        <p><router-link to="/page/factory">工厂</router-link></p>
        <p><router-link to="/page/government">政府</router-link></p>
        <p><router-link to="/page/visitor">访客</router-link></p>
        <p><router-link to="/login2">登录</router-link></p>
        <p><router-link to="/register2">注册</router-link></p>
    </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to EnvFront'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
