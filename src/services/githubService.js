import axios from "axios";

const BASE_URL = "https://api.github.com/users";
const REPO_URL ="https://api.github.com/repos";

export const getUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`);
    return response.data;
    
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const getRepoData = async (username, reponame) => {
  try {
    // Fetch repository data
    const repoResponse = await axios.get(`${REPO_URL}/${username}/${reponame}`);
    console.log(repoResponse.data);
    const repoData = repoResponse.data;

    // Fetch pull request data
    const pullsResponse = await axios.get(
      `${REPO_URL}/${username}/${reponame}/pulls?state=all`
    );
    const pullRequestsCount = pullsResponse.data.length;

    const commitsResponse = await axios.get(
      `${REPO_URL}/${username}/${reponame}/commits`
    );
    const commitsCount = commitsResponse.data.length;

    // Add pull request count to the repo data
    return {
      ...repoData,
      pull_requests_count: pullRequestsCount,
      commits_count: commitsCount,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchRepos = async (username, page = 1, perPage = 10) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/${username}/repos`,
      {
        params: { page, per_page: perPage },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching repositories:", error);
    return [];
  }
};

export const fetchLanguages = async (username , reponame) => {
  try {
    const response = await axios.get(
      `${REPO_URL}/${username}/${reponame}/languages`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching repositories languages:", error);
    return [];
  }

};

export const getRepoContributors = async (username, reponame) => {
  try {
    // Fetch contributor data
    const contributorsResponse = await axios.get(
      `${REPO_URL}/${username}/${reponame}/contributors`
    );
    return contributorsResponse.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
