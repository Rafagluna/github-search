import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const ContentCardProfileSearch = styled.div`
  display: block;
`;

export const SearchProfile = styled.div`
  width: 50%;
  margin-bottom: 42px;

  @media (max-width: 825px) {
    width: 100%;
    margin-bottom: 42px;
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
export const Divider = styled.div`
  width: 60px;
  height: 2px;
  background-color: #027afd;
  margin-bottom: 36px;
`;

export const CardInformationProfile = styled.div`
  width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 825px) {
    width: 100%;
  }
`;

export const ContentCardProfile = styled.div`
  width: 100%;
  height: 100%;
  max-width: 375px;
  max-height: 475px;
  border-radius: 16px;
  background: #0d1631;
  margin-left: 40px;
  padding: 55px 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 825px) {
    margin-left: 0;
  }

  @media (max-width: 505px) {
    border-radius: 12px;
    padding: 35px 25px;
  }

  @media (max-width: 325px) {
    max-height: 100%;
  }
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  flex-shrink: 0;
  border-radius: 50%;
`;

export const UserName = styled.span`
  color: #fff;
  text-align: center;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-top: 16px;
`;

export const UserEmail = styled.span`
  color: #027afd;
  text-align: center;
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 16px;
`;

export const BioProfile = styled.span`
  color: #bba1a1;
  text-align: center;
  font-family: "Poppins";
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  width: 100%;
  padding-bottom: 16px;
`;

export const ContentCardStars = styled.div`
  width: 100%;
  height: auto;
  border-radius: 8px;
  background: #0d1322;
  box-shadow: 0px 0px 35px 0px rgba(0, 0, 0, 0.2);
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 320px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ContentItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TitleRepo = styled.span`
  color: #fff;
  text-align: center;
  font-family: "Poppins";
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const RepositoryQuantity = styled.span`
  color: #fff;
  text-align: center;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const ButtonViewRepos = styled(Link)`
  width: 100%;
  height: 54px;
  border-radius: 7px;
  background: #027afd;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-top: 22px;

  color: #fff;
  font-family: "Poppins";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const TitleError = styled.span`
  color: #fff;
  font-family: "Poppins";
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const SubTitleError = styled.span`
  color: #fff;
  font-family: "Poppins";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const MessageError = styled.span`
  color: #fff;
  text-align: center;
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-top: 21px;
  width: 100%;
`;
