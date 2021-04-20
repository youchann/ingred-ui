import * as React from "react";
import { IndicatorProps, components } from "react-select";
import Icon from "../../../Icon";
import { useTheme } from "../../../../themes/useTheme";

const MultiValueRemove = (props: IndicatorProps<any>) => {
  const theme = useTheme();
  return (
    <components.MultiValueRemove {...props}>
      <Icon name="close_circle" color={theme.palette.black} />
    </components.MultiValueRemove>
  );
};
export { MultiValueRemove };
