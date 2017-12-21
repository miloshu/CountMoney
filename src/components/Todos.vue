<template>
  <div class="container">
      <div class="page-header">
        <h1>
          {{userinfo.username}}代办事项
          <!-- label-warning -->
          <span class='label label-default label-warning'>3</span>
        </h1>
      </div>
      <div class="input-group">
          <input type="text" class="form-control" placeholder="添加任务" v-model="todo">
          <span class="input-group-btn">
            <button class="btn btn-default btn-success" type="button" @click="addTodo">添加</button>
          </span>
        </div>
        <br>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>详细内容</th>
              <th>是否完成</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>买牙膏</td>
              <td>
                <input type="checkbox">
              </td>
              <td>true</td>
            </tr>
          </tbody>
        </table>
    </div>
</template>
<script>
export default {
  data () {
    return {
      todo: ''
    }
  },
  created () {
    // console.log(this.userinfo)
    if (!this.userinfo.uid) {
      // 重定向到首页
      this.$router.replace('/')
    } else {
      this.$store.dispatch('getTodos')
    }
  },
  methods: {
    addTodo () {
      this.$store.dispatch('addTodo', this.todo)
        .then(res => {
          alert(res.msg)
        })
    }
  },
  computed: {
    userinfo () {
      return this.$store.state.userinfo
    }
  }
}
</script>

