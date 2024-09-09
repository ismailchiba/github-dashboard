import React, { useEffect, useState } from "react";
import ContentHeader from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useLocation } from "react-router-dom";
import { getRepoData, fetchLanguages } from "../services/githubService";
import RepoStatsChart from "../components/RepoStatsChart";
import ChartPie from "../components/ChartPie";
import "../styles/RepositoryStats.css";

const Repostats = () => {
  const location = useLocation();
  const { userData, repoName, username } = location.state || {};
  const [loading, setLoading] = useState(true);
  const [repoStats, setRepoStats] = useState(null);
  const [languages, setLanguages] = useState({});

  useEffect(() => {
    const fetchLanguage = async () => {
      try {
        const languagesData = await fetchLanguages(username , repoName);
        setLanguages(languagesData);
      } catch (error) {
        console.error("Error fetching repository languages:", error);
      }
    };

    fetchLanguage();
  }, [username, repoName]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const stats = await getRepoData(username, repoName);
        console.log(stats);
        setRepoStats(stats);
      } catch (error) {
        console.error("Error fetching repo stats:", error);
      } finally {
        setLoading(false); // End loading
      }
    };
    if (username && repoName) {
      fetchData();
    }
  }, [username, repoName]);




  if (loading) {
    return <div>Loading repository data...</div>;
  }

  if (!repoStats) {
    return (
      <>
        <Sidebar userData={userData} username={username}></Sidebar>
        <ContentHeader username={username} />

        <h1> REPO NOT FOUND</h1>
      </>
    );
  }

  return (
    <>
      <Sidebar userData={userData} username={username}></Sidebar>
      <ContentHeader username={username} />
      
      <div className="chart--stats">
      <RepoStatsChart repoStats={repoStats}></RepoStatsChart>
      <ChartPie languages={languages} />
      </div>
    </>
    
  );
};

export default Repostats;
