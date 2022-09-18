import { axiosInstance } from "src/utils/api";
import { PATHS } from "src/utils/paths";

export const getAllProducts = async () => {
  try {
    const data = await axiosInstance().get(PATHS.GET_ALL_PRODUCTS);
    return data;
  } catch (error) {
    console.error({ error });
    return error;
  }
};

export const getProductDetailsById = async (id) => {
  try {
    const data = await axiosInstance().get(PATHS.GET_PRODUCT_BY_ID(id));
    return data;
  } catch (error) {
    console.error({ error });
    return error;
  }
};
