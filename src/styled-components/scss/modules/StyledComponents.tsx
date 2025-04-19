// StyledComponents.tsx
import styled from "styled-components";

interface ToggleSwitchProps {
  $enabled: boolean;
}

interface StyledButtonProps {
  disabled?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  align-self: center;
  padding: 10px 20px;
  background-color: ${(props) => (props.disabled ? "#cccccc" : "#4CAF50")};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 16px;
  margin: 20px 0;
  transition: background-color 0.3s ease;

  &:hover:not(:disabled) {
    background-color: ${(props) => !props.disabled && "#45a049"};
  }
`;

export const SwitchContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-right: 10px;
`;

export const Slider = styled.span<ToggleSwitchProps>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => (props.$enabled ? "#4CAF50" : "#ccc")};
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    content: "";
    position: absolute;
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
    transform: ${(props) => (props.$enabled ? "translateX(26px)" : "none")};
  }
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  width: 0;
  height: 0;
`;

interface CatImageProps {
  isLoading?: boolean;
}

export const CatImage = styled.img<CatImageProps>`
  max-width: 30vh;
  max-height: 70vh;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  opacity: ${(props) => (props.isLoading ? 0.5 : 1)};
  transition: opacity 0.3s ease;
`;

export const LoadingText = styled.div`
  font-family: Arial, sans-serif;
  color: #666;
  font-size: 18px;
  padding: 20px;
`;
