import React from "react";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { A, Li, Nav, Select, Ul } from "./pagination.styled";

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const PaginationCustom: React.FC<PaginationProps> = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers: number[] = [];

  let startPage: number, endPage: number;
  if (totalPages <= 2) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (currentPage <= 3) {
      startPage = 1;
      endPage = 3;
    } else if (currentPage + 2 >= totalPages) {
      startPage = totalPages - 4;
      endPage = totalPages;
    } else {
      startPage = currentPage - 2;
      endPage = currentPage + 2;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <Nav>
      <span>{totalPages} Resultados</span>
      <div>
        Página:
        <Select
          onChange={(e) => paginate(Number(e.target.value))}
          value={currentPage}
        >
          {Array.from({ length: totalPages }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </Select>
      </div>
      <Ul>
        {currentPage > 1 && (
          <Li>
            <A onClick={() => paginate(currentPage - 1)} href="#!">
              <IoIosArrowBack />
            </A>
          </Li>
        )}
        {startPage > 1 && <Li>...</Li>}
        {pageNumbers.map((number) => (
          <Li key={number} isActive={currentPage === number}>
            <A onClick={() => paginate(number)} href="#!">
              {number}
            </A>
          </Li>
        ))}
        {endPage < totalPages && <Li>...</Li>}
        {currentPage < totalPages && (
          <Li>
            <A onClick={() => paginate(currentPage + 1)} href="#!">
              <IoIosArrowForward />
            </A>
          </Li>
        )}
      </Ul>
    </Nav>
  );
};

export default PaginationCustom;
