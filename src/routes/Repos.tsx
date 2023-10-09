import { RepoProps } from "../types/repo";

import { getRepos } from "../services/Users";

import CardProfileRepo from "../components/Cards/ProfileRepo";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Loader from "../components/Loader";

const Repos = () => {
  const { username } = useParams();

  const [repos, setRepos] = useState<RepoProps[] | [] | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!username) return;
    getRepos(username).then((data: RepoProps[]) => {
      setIsLoading(true);
      setRepos(data);
      setIsLoading(false);
    });
  }, []);

  if (!repos && isLoading) return <Loader />;

  return (
    <>
      <CardProfileRepo repos={repos} />
    </>
  );
};

export default Repos;
