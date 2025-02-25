import React, {
  ButtonHTMLAttributes,
  MouseEvent,
  ReactNode,
  ReactElement,
} from "react";
import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
  useTheme,
} from "styled-components";
import { Spinner } from "../Spinner";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: "filled" | "outlined";
  loading?: boolean;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  children,
  onClick,
  ...props
}: ButtonProps): ReactElement => {
  const theme = useTheme();

  const { loading, disabled } = props;

  const onSafeClick = (event: MouseEvent<HTMLButtonElement>): void => {
    if (!disabled && onClick) {
      onClick(event);
    }
  };

  if (loading) {
    return (
      <StyledButton {...props} disabled>
        <Spinner color={theme.colors.icons.primary} />
      </StyledButton>
    );
  }

  return (
    <StyledButton onClick={onSafeClick} {...props}>
      {children}
    </StyledButton>
  );
};

const FILLED = (): FlattenInterpolation<ThemeProps<DefaultTheme>> => css`
  color: ${({ theme }) => theme.colors.button.filled.text};
  background-color: ${({ theme }) => theme.colors.button.filled.primary};
  font-weight: 700;

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.filled.variant};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.button.disabled.text};
    background-color: ${({ theme }) => theme.colors.button.disabled.primary};
    cursor: not-allowed;
  }
`;

const OUTLINED = (): FlattenInterpolation<ThemeProps<DefaultTheme>> => css`
  color: ${({ theme }) => theme.colors.button.outlined.text};
  background-color: transparent;
  font-weight: 400;
  border: 1px solid ${({ theme }) => theme.colors.button.outlined.text};
  box-sizing: border-box;

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.outlined.variant};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.button.disabled.text};
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.button.disabled.text};
    cursor: not-allowed;
  }
`;

const VARIANTS = {
  filled: FILLED,
  outlined: OUTLINED,
};

const StyledButton = styled.button`
  ${({ variant }: ButtonProps) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 220px;
    height: 40px;
    font-family: "Roboto", ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans",
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      "Noto Color Emoji";
    font-size: 16px;
    font-style: normal;
    font-weight: bold;
    line-height: 24px;
    border: 0;
    border-radius: 8px;
    padding: 8px 24px;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    transition-property: background-color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;

    ${VARIANTS[variant]}
  `}
`;
