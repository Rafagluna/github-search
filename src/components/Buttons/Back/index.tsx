import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const BackBtn = () => {
  const navigate = useNavigate();

  return (
    <>
      <S.ContentButton>
        <S.ButtonBack onClick={() => navigate(-1)}>{"< Back"}</S.ButtonBack>
      </S.ContentButton>
    </>
  );
};

export default BackBtn;
