import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { data, setData } from "@/redux/slice/StoreSlice";
import { randomId } from "@/utils/utils";
import { Bleed, Box, Button, Card, Text } from "@shopify/polaris";
import { PlusIcon } from "@shopify/polaris-icons";
import React from "react";
import Option from "./option";
import style from "./volumeDiscountRole.module.css";

const VolumeDiscountRole: React.FC = () => {
  const dispatch = useAppDispatch();

  const data = useAppSelector((state) => state.Store.data);
  const handleAddData = () => {
    const newData: data[] = [...data];
    newData.push({ Id: randomId() });
    dispatch(setData(newData));
  };

  return (
    <Box className={style.card}>
      <Card>
        <Box className={style.text}>
          <Text as="h1" variant="headingSm">
            Volume discount role
          </Text>
        </Box>
        <Bleed marginInline="400">
          {data.map((item: data, index: number) => {
            return <Option key={item.Id} index={index} item={item} />;
          })}
        </Bleed>
        <Box className={style.button}>
          <Button
            onClick={handleAddData}
            variant="primary"
            tone="critical"
            icon={PlusIcon}
            fullWidth
          >
            Add customer
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default VolumeDiscountRole;
