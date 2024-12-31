import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./user.scss";

export function User() {
  // loading hooks
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [url, setUrl] = useState("http://127.0.0.1:8000/api/user/get-all");
  const [pageNumber, setPageNumber] = useState(1);
  /**
   *
   * Since we are storing user info & token in local storage , before loading a protected views/components
   * we'll check if user is set or not.
   *
   * Getting data from the local storage.
   *
   */
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user?.token;

  /**
   *
   * useCallback : A react hook used to memorize a function, i.e it returns a cached version of a function
   * that doesn't change unless its dependencies changes.
   *
   * Why use 'useCallback' hook ?
   * 1. When we pass a function as a prop to a child component, React creates a new instance of the function
   * everytime the parent component rerenders.
   * This can cause unnecessary re-renders of the child component if child depends on that function.
   * useCallback prevents the creation of a new function instance on every render by caching the function until its dependencies are updated.
   *
   * SYNTEX :
   *
   * const callBackFunction () =useCallback(
   *  () => {
   *        // Our functions
   *    },
   *    [dependencies]
   *  );
   *
   */

  // Using a callback hook to cache the function to get the user list.
  const fetchUsers = useCallback(async () => {
    // A async function to fecth data
    const response = await fetch(`${url}?page=${pageNumber}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/vnd.api+json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        Referer: "http://localhost:3000",
      },
    });
    // Wait for response and store data in data after converting it into JSON.
    const data = await response.json();

    //Update the users list using.
    setUsers(data.data.users);
    // Dependencies list
  }, [url, pageNumber]);

  /**
   * Pagination functions
   */
  function previousPage() {
    let currentPage = pageNumber;
    setPageNumber(currentPage > 1 ? currentPage - 1 : 1);
  }
  function nextPage() {
    let currentPage = pageNumber;
    setPageNumber(4 < currentPage < 1 ? currentPage + 1 : 1);
  }

  /**
   *
   * useEffect : A react hook that helps is to run some code after the component is rendered.
   * Use case :
   * 1. Fetching data from API.
   * 2. Setting up event listeners.
   * 3. Updating document title.
   * 4. Performing cleanup tasks.
   *
   * Think useEffect as a way to run side effect in your React components.
   *
   * Key points :
   * 1. Runs after the component rendring is complete.
   * 2. We can control when useEffect should run i.e dependencies [].
   *
   */
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  return (
    <div id="user" className="container pt-4">
      <h1 className="text-center">USER LIST</h1>
      <div className="btn-group">
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => setUrl(" http://127.0.0.1:8000/api/user/get-all")}
        >
          All Users
        </button>
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() =>
            setUrl(" http://127.0.0.1:8000/api/user/get-all-admin")
          }
        >
          Admin
        </button>
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() =>
            setUrl(" http://127.0.0.1:8000/api/user/get-all-huboperator")
          }
        >
          Hub Operators
        </button>
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() =>
            setUrl(" http://127.0.0.1:8000/api/user/get-all-gatekeeper")
          }
        >
          Gate Keepers
        </button>
      </div>
      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone No</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.user}</td>
              <td>{user.email}</td>
              <td>{user.phone_no}</td>
              <td>
                <div className="btn-group">
                  <button className="btn btn-outline-secondary btn-sm">
                    <i class="fa-regular fa-pen-to-square"></i>
                  </button>
                  <button className="btn btn-outline-danger btn-sm">
                    <i class="fa-regular fa-trash-can"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-center align-items-ceter">
        <div className="btn-group">
          <button
            className="btn btn-outline-primary"
            onClick={() => previousPage()}
          >
            <i class="fa-solid fa-backward"></i>
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => nextPage()}
          >
            <i class="fa-solid fa-forward"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
