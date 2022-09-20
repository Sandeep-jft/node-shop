const { axiosInstance } = require("src/utils/api");
const { PATHS } = require("src/utils/paths");

export const addToCartService = async (id, qty) => {
  const { data } = await axiosInstance().get(PATHS.GET_PRODUCT_BY_ID(id));
  const payload = {
    _id: data._id,
    image: data.image,
    title: data.title,
    price: data.price,
    stock: data.stock,
    qty,
  };
  return payload;
};
