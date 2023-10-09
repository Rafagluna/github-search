import styled from "styled-components";
import * as I from "../Icons";
import { Link } from "react-router-dom";

interface ICardUser {
  isProfileSearch: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const ContentCard = styled.div<ICardUser>`
  background: #1f2a48;
  width: 100%;
  height: 535px;
  max-width: 870px;
  max-height: auto;
  border-radius: 16px;
  padding: 1.5rem;
  display: ${({ isProfileSearch }) => isProfileSearch && "flex"};

  @media (max-width: 825px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;
    padding: 1.3rem;
  }

  @media (max-width: 505px) {
    padding: 1.3rem;
  }
`;
