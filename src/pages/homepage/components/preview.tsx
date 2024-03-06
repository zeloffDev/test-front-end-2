import { useAppSelector } from "@/hooks/store";
import { services } from "@/services";
import { checkValidate, isArray, mapData } from "@/utils/utils";
import {
  Box,
  Button,
  DataTable,
  FormLayout,
  LegacyCard,
  Text,
} from "@shopify/polaris";

const Preview = () => {
  const { data, genenral } = useAppSelector((state) => state.Store);
  const fieldErrors = checkValidate(data, genenral);
  const isDisabled = isArray(fieldErrors);

  const handleSubmit = () => {
    console.log(data);
    services.submit(data);
  };

  return (
    <LegacyCard title="Preview" sectioned>
      <Text variant="heading3xl" alignment="center" as="h2">
        {genenral.Title}
      </Text>
      <Text variant="headingXs" as="h6">
        {genenral.Description}
      </Text>
      <FormLayout>
        <DataTable
          columnContentTypes={["text", "text", "text", "text"]}
          headings={["Title", "Discount type", "Quantity", "Amount"]}
          rows={mapData(data)}
        />
      </FormLayout>
      <Box>
        <Button disabled={isDisabled} onClick={handleSubmit}>
          Submit
        </Button>
        {fieldErrors.map((item, index) => (
          <Box key={index} style={{ color: "red" }}>
            {item.name} {item.filedError}
          </Box>
        ))}
      </Box>
    </LegacyCard>
  );
};

export default Preview;
