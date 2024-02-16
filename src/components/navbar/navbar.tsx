"use client";
import React from "react";
import { Division, End, Nav, Start } from "./navbar.styled";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { PiMetaLogo, PiShoppingCartSimpleFill } from "react-icons/pi";

import ButtonCart from "../buttons/buttonCart";
import colors from "@/shared/themes/colors";

const NavBar = () => {
  return (
    <Nav>
      <Start>
        <PiMetaLogo fontSize={30} /> SuaLogo
      </Start>
      <End>
        <span>Cotação dólar hoje: R$5,53</span>
        <ButtonCart
          text={""}
          icon={IoIosHelpCircleOutline}
          size={"28px"}
          filter={false}
          backgroundColor={"none"}
          color={colors.primary}
        />
        <Division />
        <ButtonCart
          text={"Entrar"}
          icon={FaRegUser}
          size={"medium"}
          filter={false}
          backgroundColor="none"
          color={colors.primary}
        />
        <ButtonCart
          text={0}
          icon={PiShoppingCartSimpleFill}
          size={"medium"}
          filter={true}
        />
      </End>
    </Nav>
  );
};

export default NavBar;
