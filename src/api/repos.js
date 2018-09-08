import fetch from "./fetch";

export const getPublicRepos = () => fetch("/repositories");
