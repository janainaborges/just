import colors from "@/shared/themes/colors";
import styled from "styled-components";

export const TicketsContainer = styled.main`
  background-color: ${colors.light};
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TicketsContent = styled.section`
  margin: 2rem;
  display: flex;
  gap: 2rem;
  flex-direction: row;
`;

export const TicketsBoxDis = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: white;
  padding: 30px;

`;

export const BoxTitle = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;
`;
export const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  color: ${colors.dark};
  padding-bottom: 8px;
`;
export const Subtitle = styled.h2`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 14px;
  color: ${colors.blueDark};
`;
export const Container = styled.main`
  padding: 30px;
  background-color: ${colors.light};
`;

export const Column = styled.section`
  display: flex;
  gap: 2rem;
`;
export const ColumLeft = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  gap: 2rem;
`;
export const ColumRight = styled.section`
  display: flex;
  align-items: flex-start;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;
