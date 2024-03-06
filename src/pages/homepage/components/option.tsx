import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { data, setData } from "@/redux/slice/StoreSlice";
import { optionsDiscount } from "@/utils/constants";
import { debounce } from "@/utils/utils";
import { Box, InlineGrid, Select, TextField } from "@shopify/polaris";
import { DeleteIcon } from "@shopify/polaris-icons";
import React, { memo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import style from "./option.module.css";

interface OptionProps {
  index: number;
  item: data;
}

const Option: React.FC<OptionProps> = ({ index, item }) => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.Store.data);
  const [discount, setDiscount] = useState<string>(item.Discount ?? "1");
  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm({
    defaultValues: item,
  });

  const onSubmit = debounce(() => {
    handleSubmit((values) => {
      const newData: data[] = [...data];
      newData[index] = values;
      dispatch(setData(newData));
    })();
  }, 500);

  const handleChangeDiscount = (value: string) => {
    setValue("Discount", value);
    if (value === "1") setValue("Amount", null);
    onSubmit();
    setDiscount(value);
  };

  const handleDelete = () => {
    const newData: data[] = [...data];
    newData.splice(index, 1);
    dispatch(setData(newData));
  };

  return (
    <Box className={style.box}>
      <Box className={style.flex}>
        <Box className={style.banner}>Option {index + 1}</Box>
        <Box className={style.DeleteIcon}>
          <DeleteIcon onClick={handleDelete} />
        </Box>
      </Box>
      <Box className={style.inlineGrid}>
        <InlineGrid gap="400" alignItems="center" columns={3}>
          <Box height="320px">
            <Controller
              name="Title"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  label="Title"
                  value={field.value}
                  onChange={(value) => {
                    field.onChange(value);
                    onSubmit();
                  }}
                  error={errors?.Title && "Title is required"}
                  autoComplete="off"
                />
              )}
            />
          </Box>
          <Box height="320px">
            <Controller
              name="Subtitle"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Subtitle"
                  value={field.value}
                  onChange={(value) => {
                    field.onChange(value);
                    onSubmit();
                  }}
                  autoComplete="off"
                />
              )}
            />
          </Box>
          <Box height="320px">
            <Controller
              name="Label"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Label (optional)"
                  value={field.value}
                  onChange={(value) => {
                    field.onChange(value);
                    onSubmit();
                  }}
                  autoComplete="off"
                />
              )}
            />
          </Box>
          <Box height="320px">
            <Controller
              name="Quantity"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  label="Quantity"
                  type="number"
                  value={field.value}
                  onChange={(value) => {
                    field.onChange(value);
                    onSubmit();
                  }}
                  error={errors?.Quantity && "Quantity is required"}
                  autoComplete="off"
                />
              )}
            />
          </Box>
          <Box height="320px">
            <Controller
              name="Discount"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  label="Discount type"
                  value={field.value}
                  onChange={(value) => {
                    field.onChange(value);
                    handleChangeDiscount(value);
                  }}
                  options={optionsDiscount}
                />
              )}
            />
          </Box>
          <Box height="320px">
            {discount !== "1" ? (
              <Controller
                name="Amount"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Amount"
                    type="number"
                    prefix={discount === "2" ? "%" : "$"}
                    value={field.value}
                    onChange={(value) => {
                      field.onChange(value);
                      onSubmit();
                    }}
                    error={errors?.Amount && "Amount is required"}
                    autoComplete="off"
                  />
                )}
              />
            ) : null}
          </Box>
        </InlineGrid>
      </Box>
    </Box>
  );
};

export default memo(Option);
