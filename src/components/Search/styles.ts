import styled from "styled-components";
import * as I from "../Icons";
interface IValueSearch {
  isValueSearch: boolean;
}

export const ContentSearch = styled.div`
  width: 100%;
  border-radius: 12px;
  border: 1px solid #fff1f1;
  height: 50px;
  /* display: grid;
  grid-template-columns: 60px 1fr 25px 90px; */
  display: flex;
  align-items: center;

  @media (max-width: 700px) {
    max-width: 100%;
  }

  @media (max-width: 505px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 325px) {
    border-radius: 12px 12px 0 0;
  }
`;

export const ContentItemSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;

  @media (max-width: 505px) {
    margin-left: 5px;
  }

  @media (max-width: 325px) {
    margin-left: 0;
  }
`;

export const IconSearch = styled(I.Search)`
  background-color: transparent;
  color: white;
  width: 24px;
  height: 24px;
`;

export const SearchField = styled.input`
  border: none;
  background-color: #1f2a48;
  height: 100%;
  width: 100%;

  &::placeholder {
    color: #bba1a1;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media (max-width: 505px) {
      font-size: 12px;
    }
  }

  @media (max-width: 825px) {
    width: 100%;
    padding-left: 10px;
  }

  @media (max-width: 325px) {
    border-radius: 12px;
  }
`;

export const ContentIconClose = styled.span<IValueSearch>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  visibility: ${({ isValueSearch }) => (isValueSearch ? "visible" : "hidden")};
`;

export const IconClose = styled(I.Close)`
  cursor: pointer;
  width: 20px;
  height: 20px;

  @media (max-width: 325px) {
    padding-right: 5px;
  }
`;

export const ContentButtonSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;

  @media (max-width: 505px) and (min-width: 326px) {
    margin-left: 5px;
  }

  @media (max-width: 325px) {
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }
`;

export const BtnSeach = styled.button`
  width: 76px;
  height: 34px;
  max-width: 100%;
  border-radius: 7px;
  background: #027afd;
  border: none;
  cursor: pointer;

  color: #fff;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 825px) {
    margin-right: 10px;
  }

  @media (max-width: 350px) {
    margin-left: 5px;
    width: 56px;
    height: 30px;

    font-size: 10px;
  }

  @media (max-width: 325px) {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    border-radius: 0 0 12px 12px;
  }
`;
