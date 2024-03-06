import { request } from "@/config/request";
import { data } from "@/redux/slice/StoreSlice";

export const services = {
  submit: (payload: data[]) => {
    return request.post("/test", {
      payload,
    });
  },
};
