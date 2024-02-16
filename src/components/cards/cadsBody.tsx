import React from "react";
import {
  BoxCenter,
  BoxEnd,
  BoxTitle,
  CardBodyContainer,
  Container,
  DiscountPrice,
  Images,
  StyledBy,
  StyledDiscountPrice,
  StyledFullPrice,
  StyledPriceContainer,
  Subtitle,
  Title,
} from "./cardBody.styled";
import { SlLocationPin } from "react-icons/sl";
import ButtonCuston from "../buttons/buttonCustom";
import ButtonScore from "../buttons/buttonScore";
import { IoArrowForward } from "react-icons/io5";
import { useTickets } from "@/provider/TicketContext";
import { DestinationData } from "@/shared/types/product/Ticket.type";


const CardBody= ({ data }: DestinationData) => {
  const { setCapture } = useTickets();
  return (
    <Container>
      {data.map((item) => (
        <CardBodyContainer key={item.id}>
          <Images bg={item.image} />
          <BoxCenter>
            <BoxTitle>
              <Title>{item.name}</Title>
              <Subtitle>
                <SlLocationPin style={{ fontSize: "24px", color: "blue" }} />
                <h1>{item.location}</h1>
              </Subtitle>
            </BoxTitle>

            <ButtonScore
              number={item.rating.value}
              review={item.rating.reviewsCount}
              score="Excellent"
            />
          </BoxCenter>

          <BoxEnd>
            <StyledPriceContainer>
              <StyledFullPrice>
                de
                {Number(item.price.full).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
                por
              </StyledFullPrice>
              <DiscountPrice>
                <StyledBy>R$</StyledBy>
                <StyledDiscountPrice>
                  {Number(item.price.discount).toLocaleString()}
                </StyledDiscountPrice>
              </DiscountPrice>
            </StyledPriceContainer>
            <ButtonCuston
              types="button"
              text={"Saber mais"}
              size="medium"
              icon={IoArrowForward}
              onClick={() => setCapture(item)}
            />
          </BoxEnd>
        </CardBodyContainer>
      ))}
    </Container>
  );
};

export default CardBody;
