import React from "react";
import { ButtonScoreBox, ButtonScoreReview, ButtonScoreTitle, ButtonScores } from "./buttonScore.styled";
import colors from "@/shared/themes/colors";

interface ButtonScoreI {
  backgroundColor?: string;
  color?: string;
  number: number;
  score?: string;
  review?: number;
  onChange?: () => void;
}
const ButtonScore: React.FC<ButtonScoreI> = ({
  backgroundColor = colors.primary,
  color = "white",
  number,
  review,
  score,
  ...props
}) => {
  return (
    <ButtonScores>
      <ButtonScoreBox backgroundColor={backgroundColor} color={color} {...props}>
        <span>{number}</span>
      </ButtonScoreBox>
      <ButtonScoreTitle>{score}</ButtonScoreTitle>
      <ButtonScoreReview>({review} Reviews)</ButtonScoreReview>
    </ButtonScores>
  );
};

export default ButtonScore;
