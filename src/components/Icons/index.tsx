import * as S from "./styles";

export const Search = (props: S.IconProps) => (
  <S.Icon
    height="21"
    viewBox="0 0 21 21"
    width="21"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      fill="none"
      fill-rule="evenodd"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="8.5" cy="8.5" r="5" />
      <path d="m17.571 17.5-5.571-5.5" />
    </g>
  </S.Icon>
);

export const Star = (props: S.IconProps) => (
  <S.Icon
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="11"
    viewBox="0 0 12 11"
    fill="none"
    {...props}
  >
    <path
      d="M6 0.809018L7.10932 4.22315L7.16545 4.3959H7.34708H10.9369L8.03268 6.50595L7.88573 6.61271L7.94186 6.78546L9.05118 10.1996L6.14695 8.08954L6 7.98278L5.85305 8.08954L2.94882 10.1996L4.05814 6.78546L4.11426 6.61271L3.96732 6.50595L1.06308 4.3959H4.65292H4.83455L4.89068 4.22315L6 0.809018Z"
      stroke="#BBA1A1"
      stroke-width="0.5"
    />
  </S.Icon>
);

export const Filter = (props: S.IconProps) => (
  <S.Icon
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    {...props}
  >
    <path
      d="M14.6663 2H1.33301L6.66634 8.30667V12.6667L9.33301 14V8.30667L14.6663 2Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </S.Icon>
);

export const Close = (props: S.IconProps) => (
  <S.Icon
    height="21"
    viewBox="0 0 21 21"
    width="21"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      fill="none"
      fill-rule="evenodd"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      transform="translate(5 5)"
    >
      <path d="m10.5 10.5-10-10z" />
      <path d="m10.5.5-10 10" />
    </g>
  </S.Icon>
);
