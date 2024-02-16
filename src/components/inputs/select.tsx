import { SelectProps } from "@/shared/types/components/select.types";
import React from "react";
import styled from "styled-components";

const SelectStyled = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  &:focus {
    border-color: blue;
  }
`;

const OptionStyled = styled.option``;

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <SelectStyled value={value} onChange={(e) => onChange(e.target.value)}>
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((option) => (
        <OptionStyled key={option.value} value={option.value}>
          {option.label}
        </OptionStyled>
      ))}
    </SelectStyled>
  );
};

export default Select;
