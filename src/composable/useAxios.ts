import { getCurrentInstance } from "vue";

export default function useAxios() {
  const axios = getCurrentInstance()?.appContext.config.globalProperties.axios;
  return {
    axios
  };
}
