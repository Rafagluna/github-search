import { SearchProps } from "../../types/search";
import * as S from "./styles";

const Search = ({
  valueSearch,
  setValueSearch,
  resetSearch,
  handleSearch,
}: SearchProps) => {
  return (
    <>
      <S.ContentSearch>
        <S.ContentItemSearch>
          <S.IconSearch />
        </S.ContentItemSearch>
        <S.SearchField
          type="text"
          placeholder="Search GitHub profile"
          value={valueSearch}
          onChange={(e: any) => setValueSearch(e.target.value)}
          name="search-name"
          id="search-name"
          autoComplete="false"
        />
        <S.ContentIconClose isValueSearch={!!valueSearch}>
          <S.IconClose onClick={resetSearch} />
        </S.ContentIconClose>
        {window.innerWidth >= 325 && (
          <S.ContentButtonSearch>
            <S.BtnSeach onClick={() => handleSearch(valueSearch)}>
              Search
            </S.BtnSeach>
          </S.ContentButtonSearch>
        )}
      </S.ContentSearch>
      {window.innerWidth < 325 && (
        <S.ContentButtonSearch>
          <S.BtnSeach onClick={() => handleSearch(valueSearch)}>
            Search
          </S.BtnSeach>
        </S.ContentButtonSearch>
      )}
    </>
  );
};

export default Search;
