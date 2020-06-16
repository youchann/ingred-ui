import * as React from "react";
import * as Styled from "./styled";
import { ButtonSize } from "../Button/Button";
import { useTheme } from "../../themes";

type GroupButtonSize = Exclude<ButtonSize, "large">;

type Props = {
  size?: GroupButtonSize;
  disabled?: boolean;
};

const buttonSize: Record<
  GroupButtonSize,
  { minWidth: string; height: string }
> = {
  small: {
    minWidth: "63px",
    height: "32px",
  },
  medium: {
    minWidth: "71px",
    height: "42px",
  },
};

const ButtonGroup: React.FunctionComponent<Props> = ({
  size = "medium",
  disabled = false,
  children,
}) => {
  const theme = useTheme();
  const horizontalPadding =
    size === "small" ? `${theme.spacing}px` : `${theme.spacing * 2}px`;

  const childProps = disabled
    ? {
        disabled: true,
        size: size,
        color: "secondary",
      }
    : {
        // 各子要素のdisabledが使えなくなるので disabled:false は指定しない
        size: size,
        color: "secondary",
      };

  const childrenWithProps = React.Children.map(
    children,
    (child: React.ReactElement) => {
      return React.cloneElement(child, childProps);
    },
  );
  return (
    <Styled.ButtonGroupContainer
      height={buttonSize[size].height}
      minWidth={buttonSize[size].minWidth}
      horizontalPadding={horizontalPadding}
    >
      {childrenWithProps}
    </Styled.ButtonGroupContainer>
  );
};
export default ButtonGroup;