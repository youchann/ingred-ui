import * as React from "react";
import * as Styled from "./styled";

type GroupButtonSize = "small" | "medium";

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
  const childProps = disabled
    ? {
        disabled: true,
        size: size,
        color: "secondary",
      }
    : {
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
    >
      {childrenWithProps}
    </Styled.ButtonGroupContainer>
  );
};
export default ButtonGroup;
