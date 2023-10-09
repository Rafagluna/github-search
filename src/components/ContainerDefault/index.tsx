import * as S from "./styles";

const ContainerDefault = ({
  children,
  isProfileSearch,
}: {
  children: React.ReactNode;
  isProfileSearch: boolean;
}) => {
  return (
    <S.Container>
      <S.ContentCard isProfileSearch={isProfileSearch}>
        {children}
      </S.ContentCard>
    </S.Container>
  );
};

export default ContainerDefault;
