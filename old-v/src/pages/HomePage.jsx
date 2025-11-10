import React from 'react';
import ContentHeader from '../components/Header';
import Sidebar from '../components/Sidebar';
import { useLocation } from "react-router-dom";
import '../styles/Home.css'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components with Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

const HomePage = () => {
    const location = useLocation();
    const { username, userData } = location.state || {};


    const followersFollowingData = {
      labels: ['Followers', 'Following'],
      datasets: [
          {
              label: 'Followers vs. Following',
              data: [userData.followers, userData.following],
              backgroundColor: ['#36A2EB', '#FF6384'],
              borderColor: ['#36A2EB', '#FF6384'],
              borderWidth: 1,
          },
      ],
  };

  const followersFollowingOptions = {
      responsive: true,
      plugins: {
          legend: {
              position: 'top',
              labels: {
                font: {
                    family: 'Poppins',
                    size: 16,
                    weight: 'bold'
                },
                color: 'rgba(250, 250, 250, 0.9)'
              }
          },
          title: {
              display: false,
              text: 'Followers vs. Following',
              font: {
                family: 'Poppins',
                size: 20,
                weight: 'bold',
            },
            color: 'rgba(250, 250, 250, 0.9)',
          },
      },
      scales: {
        x: {
            ticks: {
                font: {
                    family: 'Poppins',
                    size: 13,
                    weight: 'bold',
                },
                color: 'rgba(250, 250, 250, 0.9)',
            },
        },
        y: {
            ticks: {
                font: {
                    family: 'Poppins',
                    size: 11,
                    weight: 'bold',
                },
                color: 'rgba(250, 250, 250, 0.9)',
            },
        },
    },
  };



const reposData = {
    labels: ['Public Repos', 'Private Repos'],
    datasets: [
        {
            label: 'Repositories',
            data: [userData.public_repos, userData.total_private_repos || 0], // Assuming private repos is part of userData
            backgroundColor: ['#FF6384', '#36A2EB'],
            borderColor: ['#FF6384', '#36A2EB'],
            borderWidth: 1,
        },
    ],
};

const reposOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
            labels: {
                font: {
                    family: 'Poppins',
                    size: 16,
                    weight: 'bold'
                },
                color: 'rgba(250, 250, 250, 0.9)'
              }
        },
        title: {
            display: false,
            text: 'Repository Statistics',
        },
    },
    scales: {
        x: {
            ticks: {
                font: {
                    family: 'Poppins',
                    size: 13,
                    weight: 'bold',
                },
                color: 'rgba(250, 250, 250, 0.9)',
            },
        },
        y: {
            ticks: {
                font: {
                    family: 'Poppins',
                    size: 11,
                    weight: 'bold',
                },
                color: 'rgba(250, 250, 250, 0.9)',
            },
        },
    },
};

// Data for Contributions Line Chart (Hypothetical Data)
const contributionsData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Contributions Over Time',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: '#FF6384',
            borderColor: '#FF6384',
        },
    ],
};

const contributionsOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
            labels: {
                font: {
                    family: 'Poppins',
                    size: 16,
                    weight: 'bold'
                },
                color: 'rgba(250, 250, 250, 0.9)'
              }
        },
        title: {
            display: false,
            text: 'Contributions Over Time',
        },
    },
    scales: {
        x: {
            ticks: {
                font: {
                    family: 'Poppins',
                    size: 11,
                    weight: 'bold',
                },
                color: 'rgba(250, 250, 250, 0.9)',
            },
        },
        y: {
            ticks: {
                font: {
                    family: 'Poppins',
                    size: 11,
                    weight: 'bold',
                },
                color: 'rgba(250, 250, 250, 0.9)',
            },
        },
    },
};

    return (
      <>
        <Sidebar userData={userData} username={username}></Sidebar>
             <ContentHeader username={username}/>
          {userData ? (
              <div className="content">
                <div className="charts-container">
                  <div className="chart-container" >
                        <Bar data={followersFollowingData} options={followersFollowingOptions} />
                  </div>
                  <div className="chart-container" >
                        <Bar data={reposData} options={reposOptions} />
                  </div>
                  {/* <div className="chart-container" >
                        <Bar data={contributionsData} options={contributionsOptions} />
                  </div> */}
                </div>
                <div className="user-profil">
                  
                  <img className='user--logo' 
                      src={userData.avatar_url} 
                      alt={`${userData.name}'s avatar`}  
                  />
                  <a href={userData.html_url} className='user--name'>{userData.name}</a>
                  <p className='Bio'><strong>Bio:</strong> {userData.bio}</p>
                  <ul>
                  <li><strong>Created at  :</strong> {formatDate(userData.created_at)}</li>
                  <li><strong>Location  :</strong> {userData.location}</li>
                  <li><strong>Company  :</strong> {userData.company}</li>
                  <li><strong>Repositories  :</strong> {userData.public_repos}</li>
                  <li><strong>Gists  :</strong> {userData.public_gists}</li>
                  <li><strong>Followers  :</strong> {userData.followers}</li>
                  <li><strong>Following  :</strong> {userData.following}</li>
                  </ul>
                </div>
                {/* Chart for visualizing GitHub stats */}
                
              </div>
          ) : (
              <p>No user data available.</p>
          )}
      </>
  );
};

export default HomePage;