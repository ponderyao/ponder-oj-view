<template>
  <div id="user-layout">
    <a-layout>
      <a-layout-content class="basic-content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="basic-footer">Ponder OJ</a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts"></script>

<style>
#user-layout {
  min-height: 100vh;
}

#user-layout .basic-content {
  //background: linear-gradient(to right, #bbb, #fff);
  margin: auto;
}

#user-layout .basic-footer {
  min-height: 10vh;
  background: #efefef;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
