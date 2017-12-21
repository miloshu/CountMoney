<template>
  <div class="container login">
    <h1>登陆</h1>
    <div class="form-group">
      <label for="username">用户名</label>
      <input type="text" class="form-control" id="username" placeholder="请输入用户名" v-model="username">
    </div>
    <div class="form-group">
      <label for="pass">密码</label>
      <input type="password" class="form-control" id="pass" placeholder="请输入密码" v-model="pass">
    </div>
    <button type="button" class="btn btn-default" @click="login">登陆</button>
    <router-link to="/add" tag="button" class="btn btn-default btn-success">注册</router-link>
  </div>
</template>
<style scoped>
.login{
  margin-top: 100px;
}
</style>
<script>
export default {
  data () {
    return {
      username: '',
      pass: ''
    }
  },
  methods: {
    login () {
      let userObj = {
        username: this.username,
        pass: this.pass
      }
      this.$store.dispatch('login', userObj)
        .then(res => {
          alert(res.msg)
          if (!res.err) {
            this.$router.push('/todos')
          }
        })
    }
  }
}
</script>


