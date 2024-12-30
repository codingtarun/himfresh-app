import { useCallback, useEffect, useState } from "react";
import "./user.scss";

export function User() {
  // Call the API and get data
  const [users, setUsers] = useState([]);
  const [url, setUrl] = useState(
    "http://127.0.0.1:8000/api/user/get-all-admin"
  );
  const fetchUsers = useCallback(async () => {
    const response = await fetch(url, {
      header: {
        "Content-Type": "application/vnd.api+json",
        Accept: "application/vnd.api+json",
      },
    });
    const data = await response.json();
    setUsers(data.data.users);
  }, [url]);

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
    </div>
  );
}
