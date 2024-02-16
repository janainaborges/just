"use client";
import React, { useEffect, useState } from "react";

import {
  Form,
  Input,
  Subtitle,
  TicketsBoxDis,
  TicketsContainer,
  TicketsContent,
  Title,
} from "./styled";
import { useTickets } from "@/provider/TicketContext";
import CardBody from "@/components/cards/cadsBody";
import PaginationCustom from "@/components/pagination/pagination";
import Select from "@/components/inputs/select";
import { SelectOption } from "@/shared/types/components/select.types";
import { SlLocationPin } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import ButtonCustom from "@/components/buttons/buttonCustom";
import InputSearch from "@/components/inputs/InputSearch";

const Tickets: React.FC = () => {
  const {
    tickets,
    loading,
    totalItems,
    setCurrentPage,
    currentPage,
    itemsPerPage,
    capture,
    setSearchTerm,
  } = useTickets();
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValueTwo, setSelectedValueTwo] = useState("");

  const [inputValue, setInputValue] = useState("");
  const [inputValueText, setInputValueText] = useState("");

  const options: SelectOption[] = [
    { value: capture?.price?.discount.toLocaleString(), label: "Desconto" },
    { value: capture?.price?.full.toLocaleString(), label: "Total" },
  ];

  const optionsTwo: SelectOption[] = [
    { value: "value1", label: "Valor 1" },
    { value: "value2", label: "Valor 2" },
  ];

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log({
      selectedValue,
      selectedValueTwo,
      inputValueText,
    });
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchTerm(inputValue);
    }, 500);

    return () => clearTimeout(handler);
  }, [inputValue, setSearchTerm, tickets]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <TicketsContainer>
      <TicketsContent>
        <TicketsBoxDis>
          <InputSearch
            startIcon={<SlLocationPin style={{ color: "blue" }} />}
            endIcon={<CiSearch onClick={() => setSearchTerm("")} />}
            inputValue={inputValue}
            onChange={() => handleSearchChange}
            placeholder="Busque por atração"
          />
          {loading
            ? "Aguarde..."
            : tickets &&
              tickets.length > 0 && (
                <>
                  <CardBody data={tickets} />
                  <PaginationCustom
                    itemsPerPage={itemsPerPage}
                    totalItems={totalItems}
                    paginate={setCurrentPage}
                    currentPage={currentPage}
                  />
                </>
              )}
        </TicketsBoxDis>

        <TicketsBoxDis>
          <Form onSubmit={handleSubmit}>
            {capture.name ? (
              <>
                <Title>{capture.name}</Title>
                <Subtitle>{capture.location}</Subtitle>
              </>
            ) : (
              <Subtitle>
                Clique em &quot;Saber mais&quot; para pegar algumas informações
              </Subtitle>
            )}

            <Input
              type="text"
              value={inputValueText}
              onChange={(e: any) => setInputValueText(e.target.value)}
              placeholder="Digite algo aqui"
            />
            <Select
              options={options}
              value={selectedValue}
              onChange={setSelectedValue}
              placeholder="Selecione uma opção"
            />
            <Select
              options={optionsTwo}
              value={selectedValueTwo}
              onChange={setSelectedValueTwo}
              placeholder="Selecione uma opção"
            />

            <ButtonCustom
              backgroundColor="blue"
              text={"Enviar"}
              types={"submit"}
            />
          </Form>
        </TicketsBoxDis>
      </TicketsContent>
    </TicketsContainer>
  );
};

export default Tickets;
