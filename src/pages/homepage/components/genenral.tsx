import { useAppDispatch } from "@/hooks/store";
import { setGenenral } from "@/redux/slice/StoreSlice";
import { debounce } from "@/utils/utils";
import { FormLayout, LegacyCard, TextField } from "@shopify/polaris";
import { Controller, useForm } from "react-hook-form";

interface FormValues {
  Campaign: string;
  Title: string;
  Description: string;
}

function General() {
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormValues>();

  const onSubmit = debounce(() => {
    handleSubmit((data) => {
      dispatch(setGenenral(data));
    })();
  }, 300);

  return (
    <LegacyCard title="General" sectioned>
      <FormLayout>
        <Controller
          name="Campaign"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              label="Campaign"
              value={field.value}
              onChange={(value) => {
                field.onChange(value);
                onSubmit();
              }}
              error={errors?.Campaign && "Campaign is required"}
              autoComplete="off"
            />
          )}
        />
        <Controller
          name="Title"
          control={control}
          render={({ field }) => (
            <TextField
              label="Title"
              value={field.value}
              onChange={(value) => {
                field.onChange(value);
                onSubmit();
              }}
              autoComplete="off"
            />
          )}
        />
        <Controller
          name="Description"
          control={control}
          render={({ field }) => (
            <TextField
              label="Description"
              value={field.value}
              onChange={(value) => {
                field.onChange(value);
                onSubmit();
              }}
              autoComplete="off"
            />
          )}
        />
      </FormLayout>
    </LegacyCard>
  );
}

export default General;
