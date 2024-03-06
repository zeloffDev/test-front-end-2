import { data } from "@/redux/slice/StoreSlice";
import { randomId } from "./utils";

export const optionsDiscount: { label: string; value: string }[] = [
  { label: "None", value: "1" },
  { label: "% discount", value: "2" },
  { label: "Discount / each", value: "3" },
];

export const defaultValue: data[] = [
  {
    Title: "Single",
    Subtitle: "Standard price",
    Quantity: 1,
    Discount: "1",
    Amount: null,
    Id: randomId(),
  },
  {
    Title: "Duo",
    Subtitle: "Save 10%",
    Label: "Popular",
    Quantity: 2,
    Discount: "2",
    Amount: 10,
    Id: randomId(),
  },
];

export const fieldRequire: string[] = ["Title", "Quantity", "Amount"];
