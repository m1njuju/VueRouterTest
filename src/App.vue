<template>
  <div id="app">
    <!-- user의 값이 ""일 때 false로 사용 -->
    <!-- user의 값이 존재할 때 true로 사용 -->
    <div v-if="user">
      <button @click="$router.push('/')">글 목록</button>
      <!-- ``을 이용하여 App의 data의 user값을 전달 -->
      <button @click="$router.push(`/user/${user}`)">{{user}}님의 정보</button>
      <button @click="logOut">로그아웃</button>
    </div>
    <button v-else @click="$router.push('/login')">로그인</button>

    <!-- 가장 처음 화면 글 목록(중첩-동적라우팅을 이용한 페이지컴포넌트)-->
    <!-- path: '/', 페이지 컴포넌트의 path : '/board/:page' -->
    <!-- 로그인 화면 -->
    <!-- path: 'login' -->
    <!-- 유저정보 페이지 -->
    <!-- path: 'user' -->
    <router-view @login-user="showLogin" />
    <!-- $emit을 이용해서 사용자 이벤트를 발생시켰을 경우 -->
    <!-- 이벤트를 발생한 컴포넌트에서 이벤트를 확인해야 한다 -->
  </div>
</template>

<script>
export default {
  name:'App',
  data:() => ({
    user: '',
  }),
  methods: {
    // 사용자 지정이벤트로 가져온 this.user값을 넣기 위한 매개변수 user
    showLogin: function(user) {
      this.user = user;
      this.login = true;
    },
    logOut: function() {
      //user값 빈값, push 홈화면
      this.user='';
      this.$router.push('/');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
