import React from "react";
import * as Styled from "./styled";
import { Property } from "csstype";
import Divider from "../Divider";
import { Theme, useTheme } from "../../themes";

export type ContentType = "default" | "warning" | "disabled";

export type ContentTypeStyle = {
  normal: {
    background: string;
    color: string;
  };
  hover: {
    background: string;
    color: string;
  };
  active: {
    background: string;
    color: string;
  };
};

export const getContentTypeStyles = (
  theme: Theme,
): { [P in ContentType]: ContentTypeStyle } => ({
  default: {
    normal: {
      background: theme.palette.background.default,
      color: theme.palette.black,
    },
    hover: {
      background: theme.palette.gray.light,
      color: theme.palette.black,
    },
    active: {
      background: theme.palette.gray.main,
      color: theme.palette.black,
    },
  },
  warning: {
    normal: {
      background: theme.palette.gray.highlight,
      color: theme.palette.danger.main,
    },
    hover: {
      background: theme.palette.danger.main,
      color: theme.palette.text.white,
    },
    active: {
      background: theme.palette.danger.dark,
      color: theme.palette.text.white,
    },
  },
  disabled: {
    normal: {
      background: "auto",
      color: "disabled",
    },
    hover: {
      background: "auto",
      color: "disabled",
    },
    active: {
      background: "auto",
      color: "disabled",
    },
  },
});

export type ContentProp = React.ComponentPropsWithRef<"div"> & {
  text: string;
  onClick: () => void;
  divideTop?: boolean;
  type: ContentType;
};

export type MenuListProps = React.ComponentPropsWithRef<"div"> & {
  inline?: boolean;
  contents: ContentProp[];
  maxHeight?: Property.MaxHeight;
};

const MenuList = React.forwardRef<HTMLDivElement, MenuListProps>(
  ({ inline = false, contents, maxHeight = "none", ...rest }, ref) => {
    const theme = useTheme();
    const contentTypeStyles = getContentTypeStyles(theme);

    const checkIsDisabled = (type: ContentType) => type === "disabled";
    const handleClick = (content: ContentProp) => (): void => {
      if (content.type === "disabled") {
        return;
      }
      content.onClick();
    };

    return (
      <Styled.Container
        inline={inline}
        maxHeight={maxHeight}
        {...rest}
        ref={ref}
      >
        {contents.map((content) => (
          <React.Fragment key={content.text}>
            {content.divideTop && (
              <Divider my={1} mx={2} color={theme.palette.gray.light} />
            )}
            <Styled.TextContainer
              disabled={checkIsDisabled(content.type)}
              normal={contentTypeStyles[content.type].normal}
              hover={contentTypeStyles[content.type].hover}
              active={contentTypeStyles[content.type].active}
              onClick={handleClick(content)}
            >
              <Styled.Text
                size="sm"
                color={contentTypeStyles[content.type]["normal"]["color"]}
              >
                {content.text}
              </Styled.Text>
            </Styled.TextContainer>
          </React.Fragment>
        ))}
      </Styled.Container>
    );
  },
);

export default MenuList;
