import { defineStore } from "pinia";
import AccessType from "@/access/access-type";
import { UserControllerService } from "../../api";

interface LoginUser {
  userName?: string;
  userRole?: AccessType;
}

export const useLoginUserStore = defineStore("loginUser", {
  state: (): {
    loginUser: LoginUser;
    token: string;
  } => {
    return {
      loginUser: {
        userName: "未登录",
      },
      token: "",
    };
  },
  getters: {},
  actions: {
    async getLoginUser() {
      const res = await UserControllerService.getLoginUserUsingGet();
      if (res.code === 0) {
        this.updateLoginUser(res.data as LoginUser);
      } else {
        this.updateLoginUser({
          ...this.loginUser,
          userRole: AccessType.NOT_LOGIN,
        });
      }
      return this.loginUser;
    },
    updateLoginUser(loginUser: LoginUser) {
      this.loginUser = loginUser;
    },
    updateToken(token: string) {
      this.token = token;
    },
  },
  // persist: {
  //   enabled: true,
  //   strategies: [
  //     {
  //       key: "login_user",
  //       storage: localStorage,
  //       paths: ["loginUser"],
  //     },
  //   ],
  // },
});

export default LoginUser;
