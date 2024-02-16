import colors from "@/shared/themes/colors";
import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
export const CardBodyContainer = styled.div`
  width: 700px;
  height: 180px;
  display: flex;
  flex-direction: row;
  color: black;
  padding: 0;
  align-items: center;
  gap: 3px;
  background-color: white;
`;

interface imagesI {
  bg: string;
}

export const Images = styled.div<imagesI>`
  background-image: url(${(props: imagesI) => props.bg});
  background-repeat: no-repeat;
  background-position: top;
  background-size: 100%;
  width: 170px;
  height: 100%;
`;
export const BoxTitle = styled.div``;

export const BoxCenter = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-around;
`;
export const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  color: ${colors.dark};
  padding-bottom: 8px;
`;
export const Subtitle = styled.h2`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 16px;
  color: ${colors.blueDark};
`;
export const BoxEnd = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 180px;
  height: 100%;
  border-left: 1px solid ${colors.gray};
  padding: 10px;
  justify-content: space-around;
  height: 80%;
`;

export const StyledPriceContainer = styled.div``;
export const StyledFullPrice = styled.div`
  color: ${colors.gray};
`;
export const StyledBy = styled.span`
  color: ${colors.dark};
`;
export const DiscountPrice = styled.div`
display: flex;
text-align: top;
`
export const StyledDiscountPrice = styled.span`
  color: ${colors.primary};
  font-size: 24px;
  font-weight: 500;
`;
