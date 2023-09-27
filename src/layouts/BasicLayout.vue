<template>
  <div id="basic-layout">
    <a-layout style="height: 400px">
      <a-layout-header class="basic-header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="basic-content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="basic-footer">Ponder OJ</a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>

<style>
#basic-layout {
  min-height: 100vh;
}

#basic-layout .basic-header {
  margin-bottom: 16px;
  box-shadow: #eee 1px 1px 5px;
}

#basic-layout .basic-content {
  background: linear-gradient(to right, #bbb, #fff);
  margin-bottom: 16px;
  padding: 20px;
}

#basic-layout .basic-footer {
  background: #efefef;
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
