import { Grid, Page } from "@shopify/polaris";
import General from "./components/genenral";
import Preview from "./components/preview";
import VolumeDiscountRole from "./components/volumeDiscountRole";
export const Homepage = () => {
  return (
    <Page>
      <Grid>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 7 }}>
          <General />
          <VolumeDiscountRole />
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 5 }}>
          <Preview />
        </Grid.Cell>
      </Grid>
    </Page>
  );
};
