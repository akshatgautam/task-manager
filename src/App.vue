<template>
  <div id="app">
    <div class="main">
      <navigation></navigation>
      <div class="body">
        <head-bar></head-bar>
        <div class="view">
          <router-view></router-view>
        </div>
      </div>
      <add-todo></add-todo>
    </div>
  </div>
</template>

<script>
import router from './router';
import navigation from './components/navigation/navigation.vue';
import headBar from './components/head-bar/head-bar.vue';
import addTodo from './components/add-todo/add-todo.vue';

export default {
  name: 'App',
  components: {
    navigation,
    headBar,
    addTodo,
  },
  router,
};
</script>

<style lang="less">
* {
  box-sizing: border-box;
}
body {
  font-family: 'Nunito', 'sans serif';
  font-weight: @font-weight-normal;
  margin: 0;
}
p,
ul {
  margin: 0;
}
ul {
  padding: 0;
}
.main {
  display: flex;
  min-height: 100vh;
  .body {
    width: calc(100% - 75px);
  }
}

@media screen and (max-width: @mobile-max-width) {
  .main {
  flex-direction: column;
  .navigation {
    width: 100%;
  }
  .body {
    width: 100%;
  }
}
}
</style>
