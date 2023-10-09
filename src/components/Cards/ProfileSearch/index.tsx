import { UserProps } from "../../../types/user";

import { useState, useEffect } from "react";

import { handleUser } from "../../../services/Users";

import Search from "../../Search";
import ContainerDefault from "../../ContainerDefault";
import CardInformationProfile from "../../Cards/InformationProfile";
import * as S from "./styles";

const CardProfileSearch = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState("");

  const getProfile = (username?: string) => {
    handleUser(username)
      .then((res) => {
        setUser(null);
        setIsLoading(true);

        setIsLoading(false);
        console.log("ressss", res);
        // if (res.status === 404) {
        //   setNotFound(true);
        //   return;
        // }

        const {
          avatar_url,
          name,
          login,
          location,
          followers,
          following,
          public_repos,
          bio,
          email,
        } = res.data;

        const userData: UserProps = {
          avatar_url,
          name,
          login,
          location,
          followers,
          following,
          public_repos,
          bio,
          email,
        };

        setUser(userData);
        setNotFound(false);
      })
      .catch(() => {
        setNotFound(true);
        return;
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  const resetSearch = () => {
    setUserName("");
    getProfile("");
  };

  return (
    <ContainerDefault isProfileSearch={true}>
      <S.SearchProfile>
        <S.Title>Profile Finder</S.Title>
        <S.Divider></S.Divider>
        <Search
          valueSearch={userName}
          setValueSearch={setUserName}
          resetSearch={resetSearch}
          handleSearch={getProfile}
        />
      </S.SearchProfile>
      <CardInformationProfile notFound={notFound} user={user} />
    </ContainerDefault>
  );
};

export default CardProfileSearch;
