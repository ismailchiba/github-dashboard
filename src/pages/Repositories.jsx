import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { usePagination, useTable } from "react-table";
import { fetchRepos } from "../services/githubService"; // Import the API function
import Sidebar from "../components/Sidebar";
import ContentHeader from "../components/Header";
import '../styles/Repositories.css'

const Repositories = () => {
  const location = useLocation();
  console.log(location);
  const { userData } = location.state || {};
  const username = userData.login;
  const totalRepos = userData.public_repos || 0; // Assuming total number of repos is in public_repos

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const repos = await fetchRepos(username, currentPage, perPage);
        console.log(repos);
        setData(repos); // Assuming repos is an array of repositories
      } catch (error) {
        console.error("Failed to fetch repositories:", error);
      }
    };
    fetchData();
  }, [username, currentPage]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        Cell: ({ value, row }) => (
          // Marked change: Added click handler to navigate to GitHub repo
          <a 
            href={`https://github.com/${username}/${value}`}
            target="_blank"
            rel="noopener noreferrer"
            className="repo-link" 
          >
            {value}
          </a>
        ),
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Language",
        accessor: "language",
      },
      // Add other columns as needed
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { pageIndex },
    gotoPage,
    canPreviousPage,
    canNextPage,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: currentPage - 1 },
      manualPagination: true,
      pageCount: Math.ceil(totalRepos / perPage),
    },
    usePagination
  );

  const handlePageChange = (newPageIndex) => {
    setCurrentPage(newPageIndex + 1); // Sync with zero-based index of react-table
    gotoPage(newPageIndex);
  };

  return (
    <>
      <Sidebar userData={userData} username={username}></Sidebar>
      <ContentHeader username={username} />
      <div className="repos-content">
        <div className="content-table">
          <table className="repositories-table" {...getTableProps()}>
            <thead className="header-row">
              {headerGroups.map((headerGroup) => {
                const { key, ...rest } = headerGroup.getHeaderGroupProps();
                return (
                  <tr key={key} {...rest}>
                    {headerGroup.headers.map((column) => {
                      const { key, ...rest } = column.getHeaderProps();
                      return (
                        <th className="header-cell" key={key} {...rest}>
                          {column.render("Header")}
                        </th>
                      );
                    })}
                  </tr>
                );
              })}
            </thead>
            <tbody className="body-row" {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                const { key, ...rest } = row.getRowProps();
                return (
                  <tr className="body-cell" key={key} {...rest}>
                    {row.cells.map((cell) => {
                      const { key, ...rest } = cell.getCellProps();
                      return (
                        <td key={key} {...rest}>
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="pagination">
            <button className="pagination-button"
              onClick={() => handlePageChange(0)}
              disabled={!canPreviousPage}
            >
              {"<<"}
            </button>
            <button className="pagination-button"
              onClick={() => handlePageChange(pageIndex - 1)}
              disabled={!canPreviousPage}
            >
              {"<"}
            </button>
            <button className="pagination-button"
              onClick={() => handlePageChange(pageIndex + 1)}
              disabled={!canNextPage}
            >
              {">"}
            </button>
            <button className="pagination-button"
              onClick={() =>
                handlePageChange(Math.ceil(totalRepos / perPage) - 1)
              }
              disabled={!canNextPage}
            >
              {">>"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Repositories;
