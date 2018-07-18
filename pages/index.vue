<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        ultimate-nuxt
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
      User :<input v-model="form.user" type="text"> <br>
      Password :<input v-model="form.pass" type="text"> <br>
      <button @click="submit()">login</button>
     {{ list }}
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import firebase from 'firebase/app'
export default {
  components: {
    AppLogo
  },
  data () {
    return {
      user: null,
      form: {
        user: '',
        pass: ''
      },
      list: []
    }
  },
  methods: {
    submit() {
      this.user.push(this.form)
    }
  },
  async mounted () {
    this.user = firebase.database().ref('users') // craete database
    this.user.on('value', (data) => {
      let item = data.val()
      item.id = data.key
      this.list.push(...item)
    })
    this.user.on('child_added', (data) => {
      let item = data.val()
      item.id = data.key
      this.list.push(item)
    })
    this.user.on('child_removed', function (data) {
      let id = data.key
      let index = this.list.findIndex(item => item.id === id)
      this.list.splice(index, 1)
    })
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
