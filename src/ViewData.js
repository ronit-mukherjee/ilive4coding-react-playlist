import React, { useEffect } from "react";

const ViewData = ({ data }) => {
  useEffect(() => {
    console.log("ViewData Mounted");
  }, []);
  useEffect(() => {
    console.log("ViewData Re-Rendered/Updated");
  });

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title text-center">View Data</h2>
        <div className="row">
          <div className="col">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                </tr>
              </thead>
              <tbody>
                {data.map((d, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{d.name}</td>
                      <td>{d.email}</td>
                      <td>{d.phone}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewData;
