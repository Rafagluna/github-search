import NotFoundSearch from "../../../assets/images/NotFoundSearch.svg";

import { InformationProfileProps } from "../../../types/informationProfile";

import * as S from "./styles";

const CardInformationProfile = ({
  notFound,
  user,
}: InformationProfileProps) => {
  return (
    <>
      <S.CardInformationProfile>
        <S.ContentCardProfile>
          {notFound ? (
            <>
              <S.Avatar src={NotFoundSearch} alt="Avatar Usuário" />
              <S.TitleError>Oops!</S.TitleError>
              <S.SubTitleError>User not found</S.SubTitleError>
              <S.MessageError>
                The user you are searching was not found. Please try another
                username!
              </S.MessageError>
            </>
          ) : (
            <>
              <S.Avatar src={user?.avatar_url} alt="Avatar Usuário" />
              <S.UserName>{user?.name}</S.UserName>
              <S.UserEmail>{user?.email}</S.UserEmail>
              <S.BioProfile>{user?.bio}</S.BioProfile>
              <S.ContentCardStars>
                <S.ContentItem>
                  <S.TitleRepo>Repo</S.TitleRepo>
                  <S.RepositoryQuantity>
                    {user?.public_repos}
                  </S.RepositoryQuantity>
                </S.ContentItem>
                <S.ContentItem>
                  <S.TitleRepo>Followers</S.TitleRepo>
                  <S.RepositoryQuantity>{user?.followers}</S.RepositoryQuantity>
                </S.ContentItem>
                <S.ContentItem>
                  <S.TitleRepo>Following</S.TitleRepo>
                  <S.RepositoryQuantity>{user?.following}</S.RepositoryQuantity>
                </S.ContentItem>
              </S.ContentCardStars>
              <S.ButtonViewRepos to={`/repos/${user?.login}`}>
                View repositories
              </S.ButtonViewRepos>
            </>
          )}
        </S.ContentCardProfile>
      </S.CardInformationProfile>
    </>
  );
};

export default CardInformationProfile;
