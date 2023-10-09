import api from "../api";
import endpoint from "../endpoint";

export const handleUser = async function (userName?: string) {
  const res = await api.get(
    `${endpoint.users}/${userName ? userName : "Rafagluna"}`
  );

  return res;
};

export const getRepos = async function (username: string) {
  const { data } = await api.get(`${endpoint.users}/${username}/repos`);

  return data;
};
