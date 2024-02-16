import colors from "@/shared/themes/colors";
import styled from "styled-components";

interface ButtonProps {
  backgroundColor: string;
  color: string;
}

export const ButtonScores = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  gap: 11px;
  align-items: center;
`;
export const ButtonScoreBox = styled.button<ButtonProps>`
  width: 40px;
  height: 38px;
  border-radius: 2px;
  background-color: ${(props) => props.backgroundColor};
  border: none;
  color: ${(props) => props.color};
  
`;
export const ButtonScoreTitle = styled.span`
  width: auto;
  font-weight: 500;
`;

export const ButtonScoreReview = styled.span`
  width: auto;
  font-weight: 500;
  color: ${colors.gray};
`;