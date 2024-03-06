import { data, genenral } from "@/redux/slice/StoreSlice";
import { fieldRequire, optionsDiscount } from "./constants";

export function debounce(
  func: (...args: any[]) => void,
  delay?: number,
): (...args: any[]) => void {
  let timerId: NodeJS.Timeout;

  return function (...args: any[]) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func(...args);
    }, delay ?? 300);
  };
}

export const mapData = (data: data[]) => {
  return data.map((item) => {
    const discount = optionsDiscount.find((it) => {
      return it.value === item.Discount;
    });
    const amount = item.Amount
      ? item.Discount === "2"
        ? numberWithCommas(item.Amount) + "%"
        : numberWithCommas(item.Amount) + "$"
      : null;
    return [
      item.Title,
      discount?.label,
      numberWithCommas(item.Quantity),
      amount,
    ];
  });
};

export const numberWithCommas = (number: number | undefined | null) => {
  return number?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const isArray = (value: any) => {
  if (Array.isArray(value)) {
    if (value.length > 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export const checkValidate = (data: data[], general: genenral) => {
  const fieldErrors: { name: string; filedError: string }[] = [];
  if (!general?.Campaign) {
    fieldErrors.push({
      name: "General:",
      filedError: `Campaign is required`,
    });
  }
  data.forEach((element: any, index) => {
    const filedError: string[] = [];
    fieldRequire.forEach((el) => {
      if (!element?.[el]) {
        filedError.push(el);
      }
    });

    if (isArray(filedError)) {
      fieldErrors.push({
        name: `Option ${index + 1}:`,
        filedError: `${filedError.join(", ")} is required`,
      });
    }
  });
  return fieldErrors;
};

export const randomId = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};
