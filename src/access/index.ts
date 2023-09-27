import LoginUser, { useLoginUserStore } from "@/store/user";
import AccessType from "@/access/access-type";
import { router } from "@/router";

router.beforeEach(async (to, from, next) => {
  // 判断目标路由是否需要登录
  const needAccess = (to.meta?.access as AccessType) ?? AccessType.NOT_LOGIN;
  if (needAccess !== AccessType.NOT_LOGIN) {
    // 需要登录，先获取登录信息
    const userStore = useLoginUserStore();
    let loginUser: LoginUser = userStore.loginUser;
    // 若未登录，尝试自动登录
    if (!loginUser || !loginUser.userRole) {
      loginUser = await userStore.getLoginUser();
    }
    // 自动登录失败，跳转登录页面
    if (!loginUser || !loginUser.userRole) {
      next(`/user/login?redirect=${to.fullPath}`);
      return;
    }
    // 存在登录信息，做权限校验
    if (!checkAccess(loginUser, needAccess)) {
      next("/noAuth");
      return;
    }
  }
  next();
});

// 权限校验
export const checkAccess = (loginUser: LoginUser, needAccess: AccessType) => {
  // 如果当前页面不需要登录权限直接返回true
  if (needAccess === undefined || needAccess === AccessType.NOT_LOGIN) {
    return true;
  }
  // 获取当前登录用户具有的权限，为空则默认未登录
  const userAccess = loginUser?.userRole ?? AccessType.NOT_LOGIN;
  // 如果用户未登录，直接返回false
  if (userAccess === AccessType.NOT_LOGIN) {
    return false;
  }
  // 管理员直接返回true
  if (userAccess === AccessType.ADMIN) {
    return true;
  }
  return userAccess === needAccess;
};
