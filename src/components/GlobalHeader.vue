<template>
  <a-row id="global-header" :wrap="false">
    <a-col flex="auto">
      <a-menu
        mode="horizontal"
        :selected-keys="selectedKeys"
        :default-selected-keys="['1']"
        @menu-item-click="doMenuClick"
      >
        <a-menu-item
          key="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
          <div class="title-bar">
            <img class="logo" src="../assets/logo.png" alt="" />
            <div class="title">Ponder OJ</div>
          </div>
        </a-menu-item>
        <template v-for="item in visibleRoutes" :key="item.path">
          <a-menu-item v-if="!item.children || item.children.length == 0">
            {{ item.name }}
          </a-menu-item>
          <a-sub-menu v-else>
            <template #title>{{ item.name }}</template>
            <a-menu-item v-for="subItem in item.children" :key="subItem.path">
              {{ subItem.name }}
            </a-menu-item>
          </a-sub-menu>
        </template>
      </a-menu>
    </a-col>
    <a-col flex="100px">
      <div>
        {{ userStore.loginUser.userName }}
      </div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import { useLoginUserStore } from "@/store/user";
import { checkAccess } from "@/access";
import AccessType from "@/access/access-type";
import { menuRoutes } from "@/router";

// 默认主页
const selectedKeys = ref(["/"]);
const router = useRouter();
const userStore = useLoginUserStore();

// 过滤掉不需要展示的路由
const visibleRoutes = computed(() => {
  return menuRoutes?.children?.filter((item) => {
    const menuAccess = item.meta?.access as AccessType;
    return !item.meta?.hide && checkAccess(userStore.loginUser, menuAccess);
  });
});

// 路由跳转后，更新选项中的菜单
router.afterEach((to, from, next) => {
  selectedKeys.value = [to.path];
});

// 点击菜单跳转路由
const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};
</script>

<style>
#global-header {
  align-items: center;
}

.title-bar {
  display: flex;
  align-items: center;
}

.logo {
  height: 28px;
}

.title {
  color: #444;
  margin-left: 10px;
  font-weight: 700;
  font-size: 20px;
}
</style>
