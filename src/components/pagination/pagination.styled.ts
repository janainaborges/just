import colors from "@/shared/themes/colors";
import styled from "styled-components";

export const Nav = styled.nav`
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  > span {
    color: ${colors.gray};
  }
`;

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const Li = styled.li<{ isActive?: boolean }>`
  cursor: pointer;
  color: ${colors.primary};
  ${(props) =>
    props.isActive &&
    `
    font-weight: bold;
  `}
`;

export const A = styled.a`
  text-decoration: none;
  color: ${colors.primary};

  &:hover {
    text-decoration: underline;
  }
`;

export const Select = styled.select`
  margin-left: 1.5rem;
  padding: 4px 10px;
  border: 1px solid ${colors.gray};
  border-radius: 8px;
  width: 80px;

  color: ${colors.gray};
`;
