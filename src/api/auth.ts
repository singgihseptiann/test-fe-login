import { userAuthBaseUrl } from "./base.url";

const userAuth = {
  post: async (endpoint: string, data: any) => {
    try {
      const response = await userAuthBaseUrl.post(endpoint, data);

      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default userAuth;
