import { createPinia } from "pinia";
import piniaPluginpersist from "pinia-plugin-persist";

const store = createPinia();

store.use(piniaPluginpersist);

export default store;
