
# GitHub Dashboard

GitHub Dashboard is a web application that provides detailed statistics about a GitHub user's profile and repositories. Users can log in using their GitHub username, search for specific repositories, and view a variety of statistics, including the languages used, number of issues, stars, watchers, forks, and commits for each repository.

## Features

- **Login Page**: Users can input a GitHub username to access the profile data of the corresponding user.
- **Home Page**: Displays GitHub user profile statistics such as:
  - Username
  - Profile picture
  - Number of public repositories
  - Number of public gists
  - Number of followers
  - Number of users followed
- **Sidebar Navigation**: Easily navigate through different sections of the app using the sidebar, including:
  - Home Page
  - Repositories Page (detailed table)
- **Search Bar**: Allows users to quickly find specific repositories from the list of their repositories.
- **Repository Statistics**: Displays comprehensive statistics for each repository, including:
  - Languages used
  - Number of issues
  - Number of stars
  - Watchers count
  - Forks count
  - Commit history

## Tech Stack

- **Front-end**: 
  - React (Vite) for efficient and modern UI development
  - Chart.js for data visualization
  - React Icons for iconography
  - Axios for API requests
  - React Router DOM for seamless navigation
- **Back-end**: Developed and maintained by Idriss Rhadbane (to be implemented)

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/ismailchiba/github-dashboard.git
   ```

2. Navigate to the project directory:
   ```bash
   cd github-dashboard
   ```

3. Install the project dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:{port}` to access the application.

## Developers

- **Ismail Chiba** - Front-end Developer
- **Idriss Rhadbane** - Back-end Developer

This project was developed as part of the **ALX Software Engineering Program**.

## Future Enhancements

- **GitHub OAuth**: Implement user authentication via GitHub OAuth for a more personalized experience.
- **Visual Statistics**: Add more visual representations for repository data, such as commit history and contributor statistics.
- **UI/UX Improvements**: Enhance the user interface for better usability and add more detailed analytics.

## Related Projects

- **GitHub Contributions Tracker**: A tool for tracking user contributions over time, including pull requests, issues, and commits.
- **GitHub Repository Insights**: A project focused on generating visual insights about repositories, including stars, forks, and issues trend analysis.
- **GitHub Profile Summary**: A minimal app that displays a brief summary of any GitHub user's profile, including top repositories and activity.

## Licensing

This project is licensed under the **MIT License**. You are free to use, modify, and distribute this software, provided that you include the original license and attribution.
