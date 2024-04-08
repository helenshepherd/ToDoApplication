import { ApiDataType } from "./types";
import axios, { AxiosResponse } from "axios";

const baseUrl: String = "http://localhost:8080";

export const deleteBasketItem = async (
  basketId: String,
  itemId: String
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedBasketItem: AxiosResponse<ApiDataType> = await axios.delete(
      baseUrl + `/basket/basket/${basketId}/item/${itemId}`
    );
    return deletedBasketItem;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getBasket = async (
  _id: String
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const basket: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + `/basket/basket/${_id}`
    );
    return basket;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const updateBasketItemQuantity = async (
  basketId: String,
  itemId: String,
  quantity: Number
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const url = `${baseUrl}/basket/basket/${basketId}/item/${itemId}`;

    // Make the PUT request with the new quantity in the request body
    const response = await axios.put(url, {
      quantity, // This assumes your server expects a request body with a "quantity" field
    });
    return response;

    console.log("Update successful:", response.data);
  } catch (error: any) {
    throw new Error(error);
  }
};
