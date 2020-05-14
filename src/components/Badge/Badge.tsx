import * as React from "react";
import * as Styled from "./styled";
import { Theme } from "../../themes";
import { useTheme } from "../../themes/useTheme";

export type BadgeColor =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"

const getColor = (key: BadgeColor, theme: Theme) => {
  switch (key) {
    case "primary":
      return theme.palette.primary.main;
    case "secondary":
      return theme.palette.gray.dark;
    case "success":
      return theme.palette.success.main;
    case "warning":
      return theme.palette.warning.main;
    case "danger":
      return theme.palette.danger.main;
  }
};

export type Props = React.ComponentPropsWithRef<"a"|"span"> & {
  color: BadgeColor;
  type?: Styled.BadgeType;
  component?: "span" | "a";
}

const Badge: React.FunctionComponent<Props> = ({
  color,
  type = "normal",
  component = "span",
  children,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <Styled.Container
      as={component}
      type={type}
      color={theme.palette.text.white}
      backgroundColor={getColor(color, theme)}
      {...rest}
    >
      {children}
    </Styled.Container>
  )
}

export default Badge;
