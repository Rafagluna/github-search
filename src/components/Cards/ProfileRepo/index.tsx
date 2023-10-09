import { RepoProps } from "../../../types/repo";

import { useLocation } from "react-router-dom";

import { useState, useEffect } from "react";
import ContainerDefault from "../../ContainerDefault";
import ButtonBack from "../../Buttons/Back";
import Search from "../../Search";
import Loader from "../../../components/Loader";
import * as S from "./styles";

const CardProfileRepo = ({
  repos,
}: {
  repos: RepoProps[] | null;
}): JSX.Element => {
  if (repos === null) return <Loader />;
  let defaultRepo = [...repos!];

  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [selectFilter, setSelectFilter] = useState("");
  const [repoFilter, setRepoFilter] = useState<RepoProps[] | null>(defaultRepo);
  const [showDropdown, setShowDropdown] = useState(false);

  const location = useLocation();
  const userNamePath = location.pathname.split("/")[2];

  const getRepoNameFilter = (repo: string) => {
    setIsLoading(true);
    const repoItemFilter: RepoProps[] = [];
    defaultRepo?.filter((repoItem: RepoProps) => {
      const isDataFilter = repoItem.name
        .toLowerCase()
        .includes(repo.toLowerCase());

      if (isDataFilter) {
        repoItemFilter.push({
          ...repoItem,
        });
      }
      setRepoFilter(repoItemFilter);

      setIsLoading(false);
    });
  };

  const getRepoStarsFilter = () => {
    setSelectFilter("star");
    setShowDropdown(false);
    setIsLoading(true);
    let orderedRepos = defaultRepo?.sort(
      (a: RepoProps, b: RepoProps) => b.stargazers_count - a.stargazers_count
    ) as RepoProps[];

    orderedRepos = orderedRepos.slice(0, 5);

    setRepoFilter(orderedRepos);
    setIsLoading(false);
  };

  const resetSearch = () => {
    setUserName("");
    setRepoFilter(repos);
  };

  const resetFilter = () => {
    setSelectFilter("");
    setShowDropdown(false);
    setRepoFilter(repos);
  };

  useEffect(() => {
    console.log("repo", repos);
    console.log("repoFilter", repoFilter);
  }, [selectFilter]);

  return (
    <ContainerDefault isProfileSearch={false}>
      <ButtonBack />
      <S.ContentTitleSearch>
        <S.Title>{userNamePath}</S.Title>
        <S.ContentSearchRepository>
          <Search
            valueSearch={userName}
            setValueSearch={setUserName}
            resetSearch={resetSearch}
            handleSearch={getRepoNameFilter}
          />

          {window.innerWidth > 700 && (
            <>
              <S.ContentFilter>
                <S.BtnSearch
                  onClick={() => setShowDropdown(!showDropdown)}
                  disabled={repoFilter?.length === 0}
                >
                  <S.IconFilter />
                  Filter
                </S.BtnSearch>
                {showDropdown && (
                  <S.DropdownContent>
                    <S.DropdownItem
                      onClick={resetFilter}
                      selectFilter={selectFilter === ""}
                    >
                      Ordenar Por:{" "}
                    </S.DropdownItem>
                    <S.DropdownItem
                      onClick={getRepoStarsFilter}
                      selectFilter={selectFilter === "star"}
                    >
                      More Stars
                    </S.DropdownItem>
                  </S.DropdownContent>
                )}
              </S.ContentFilter>
            </>
          )}
        </S.ContentSearchRepository>
        {window.innerWidth <= 700 && (
          <>
            <S.ContentFilter>
              <S.BtnSearch
                onClick={() => setShowDropdown(!showDropdown)}
                disabled={repoFilter?.length === 0}
              >
                <S.IconFilter />
                Filter
              </S.BtnSearch>
              {showDropdown && (
                <S.DropdownContent>
                  <S.DropdownItem
                    onClick={resetFilter}
                    selectFilter={selectFilter === ""}
                  >
                    Ordenar Por:{" "}
                  </S.DropdownItem>
                  <S.DropdownItem
                    onClick={getRepoStarsFilter}
                    selectFilter={selectFilter === "star"}
                  >
                    More Stars
                  </S.DropdownItem>
                </S.DropdownContent>
              )}
            </S.ContentFilter>
          </>
        )}
      </S.ContentTitleSearch>
      <S.ContentCardRepo>
        {isLoading && (
          <>
            <Loader />
          </>
        )}
        {!isLoading && (
          <>
            {repoFilter?.length !== 0 ? (
              <>
                {repoFilter?.map(
                  ({
                    name,
                    description,
                    language,
                    stargazers_count,
                    visibility,
                    html_url,
                  }) => (
                    <>
                      <S.CardRepo>
                        <S.ContentTitleRepo>
                          <S.TitleRepo>{name}</S.TitleRepo>
                          <S.PrivacyRepo>
                            {visibility![0].toUpperCase() +
                              visibility!.substring(1)}
                          </S.PrivacyRepo>
                        </S.ContentTitleRepo>
                        <S.InformationRepo>{description}</S.InformationRepo>
                        <S.ContentLanguageRepo>
                          {language && (
                            <S.TitleLanguage>{language}</S.TitleLanguage>
                          )}
                          <S.ContentNumberStar>
                            <S.IconStar />
                            <S.NumberStars>
                              {stargazers_count} stars
                            </S.NumberStars>
                          </S.ContentNumberStar>
                        </S.ContentLanguageRepo>
                        <S.ButtonViewRepository
                          onClick={() => window.open(html_url, "_blank")}
                        >
                          View repository
                        </S.ButtonViewRepository>
                      </S.CardRepo>
                    </>
                  )
                )}
              </>
            ) : (
              <>
                <S.ContentNotFoundRepo>
                  <S.TitleNotFound>No repositories found!</S.TitleNotFound>
                </S.ContentNotFoundRepo>
              </>
            )}
          </>
        )}
      </S.ContentCardRepo>
    </ContainerDefault>
  );
};

export default CardProfileRepo;
