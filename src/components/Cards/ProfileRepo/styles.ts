import styled from "styled-components";
import * as I from "../../Icons";

interface ISelectFilter {
  selectFilter: Boolean;
}

export const ContentTitleSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: start;
    width: 100%;
    gap: 1rem;
  }
`;

export const Title = styled.span`
  color: #fff;
  font-family: "Poppins";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ContentSearchRepository = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 700px) {
    width: 100%;
  }

  @media (max-width: 325px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const IconSearch = styled(I.Search)`
  background-color: transparent;
  color: white;
  width: 24px;
  height: 24px;
`;

export const ContentFilter = styled.div`
  position: relative;
  display: inline-block;

  @media (max-width: 700px) {
    width: 100%;
    padding: 0;
  }
`;

export const BtnSearch = styled.button`
  width: 76px;
  height: 34px;
  max-width: 100%;
  border-radius: 7px;
  background: #027afd;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  padding: 1rem;

  color: #fff;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:disabled {
    background: #2f649e;
  }

  @media (max-width: 700px) {
    width: 100%;
    padding: 0;
  }
`;

export const IconFilter = styled(I.Filter)`
  width: 16px;
  height: 16px;
`;

export const DropdownContent = styled.div`
  margin-top: 5px;
  position: absolute;
  top: 100%;
  right: 0;
  width: 100px;
  z-index: 2;
  border-radius: 7px;
  border: 1px solid #fff1f1;
  background-color: #1f2a48;
  box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 700px) {
    width: 100%;
    justify-content: start;
    align-items: start;
  }
`;

export const DropdownItem = styled.div<ISelectFilter>`
  color: ${({ selectFilter }) => (selectFilter ? "#1f2a48" : "#fff1f1")};
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  padding: 0.5rem;
  background-color: ${({ selectFilter }) =>
    selectFilter ? "#fff1f1" : "#1f2a48"};
  width: 100%;
`;

export const ContentCardRepo = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 380px;
  height: 85%;
  overflow-y: auto;
  gap: 22px;

  @media (max-width: 865px) {
    justify-content: center;
    align-items: center;
  }
`;

export const CardRepo = styled.div`
  width: 100%;
  max-width: 374px;
  height: auto;
  flex-shrink: 0;
  border-radius: 16px;
  background: #0d1631;
  padding: 3rem;

  @media (max-width: 865px) {
    max-width: 90%;
  }

  @media (max-width: 505px) {
    padding: 1.3rem;
  }
`;

export const ContentTitleRepo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  @media (max-width: 505px) {
    flex-direction: column-reverse;
    align-items: start;
    gap: 0.3rem;
  }
`;

export const TitleRepo = styled.span`
  color: #027afd;
  text-align: start;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-right: 12px;
`;

export const PrivacyRepo = styled.span`
  border-radius: 13px;
  border: 0.5px solid #fff;
  padding-left: 5px;
  padding-right: 5px;
  color: #fff;
  text-align: start;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const InformationRepo = styled.span`
  width: 100%;
  color: #bba1a1;
  font-family: "Poppins";
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const ButtonViewRepository = styled.button`
  width: 100%;
  height: 34px;
  padding: 0.6rem;
  border-radius: 7px;
  background: #027afd;
  border: none;
  margin-top: 16px;
  cursor: pointer;

  color: #fff;
  font-family: "Poppins";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ContentLanguageRepo = styled.div`
  display: flex;
  align-items: center;
  padding-top: 19px;
`;

export const TitleLanguage = styled.span`
  color: #bba1a1;
  font-family: "Poppins";
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  padding-right: 1rem;
`;

export const ContentNumberStar = styled.div`
  display: flex;
  align-items: center;
`;

export const IconStar = styled(I.Star)`
  width: 12px;
  height: 12px;
`;

export const NumberStars = styled.span`
  color: #bba1a1;
  font-family: "Poppins";
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  padding-left: 0.3rem;
`;

export const ContentNotFoundRepo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
  width: 100%;
`;

export const TitleNotFound = styled.span`
  color: #fff;
  text-align: center;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
