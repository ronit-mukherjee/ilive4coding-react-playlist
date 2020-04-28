import React, { useRef, useState, useEffect } from "react";

const AddData = ({ onAddData = () => null }) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const [dataAddSuccess, setDataAddSuccess] = useState(false);

  useEffect(() => {
    console.log("AddData Mounted");
  }, []);
  useEffect(() => {
    console.log("AddData Re-Rendered/Updated");
  });

  const onFormSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;

    if (name && email && phone) {
      const data = { name, email, phone };

      onAddData(data);

      setDataAddSuccess(true);

      nameRef.current.value = "";
      emailRef.current.value = "";
      phoneRef.current.value = "";
      nameRef.current.focus();

      setTimeout(() => {
        setDataAddSuccess(false);
      }, 3000);
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title text-center">Add Data</h2>
        <div className="row justify-content-center">
          <div className="col-8">
            {dataAddSuccess && (
              <div className="alert alert-success" role="alert">
                Data Added Successfully
              </div>
            )}
            <form onSubmit={onFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  ref={nameRef}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  ref={emailRef}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  ref={phoneRef}
                  required
                />
              </div>
              <div className="row justify-content-center">
                <div className="col-6">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block text-center"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddData;
