<template>
  <div class="container login">
    <h1>注册</h1>
    <div class="form-group">
      <label for="username">用户名</label>
      <input type="text" class="form-control" id="username" placeholder="请输入用户名" v-model="username">
    </div>
    <div class="form-group">
      <label for="pass">密码</label>
      <input type="password" class="form-control" id="pass" placeholder="请输入密码" v-model="pass">
    </div>
    <router-link to="/" tag="button" class="btn btn-default">返回</router-link>
    <!-- <button type="button" class="btn btn-default">返回</button> -->
    <button type="button" class="btn btn-default btn-success" @click="add">注册</button>
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
    add () {
      let userObj = {
        username: this.username,
        pass: this.pass
      }
      this.$store.dispatch('add', userObj)
        .then(res => {
          alert(res.msg)
        })
    }
  }
}
</script>

