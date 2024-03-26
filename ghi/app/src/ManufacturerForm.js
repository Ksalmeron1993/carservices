import {useState } from 'react';


function ManufacturerForm () {
    const [manufacturerName, setManufacturerName] = useState("");
    const [submitted, setSubmitted ] = useState(false);
    const[invalid, setInvalid] = useState(false);

    const handleSubmit = async(event) => {
        event.preventDefault();

        const data = { name: manufacturerName};

        const manufacturerUrl = "http://localhost:8100/api/manufacturers/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type" : "application/json",
            },
        };
        const response = await fetch(manufacturerUrl, fetchConfig);
        if(response.ok) {
            event.target.reset();
            setManufacturerName("");
            setSubmitted(true);
            setInvalid(false);
        }else{
          console.log("Error: invalid manufacturer name");
          setInvalid(true);
        }
            
            
        };
    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1 className='text-center'>Create a New Manufacturer</h1>
            <form id="create-manufacturer-form" onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input onChange={(e) => setManufacturerName(e.target.value)} placeholder="Name" required type="text" name="name" id="name" className="form-control"/>
                <label htmlFor="name"> Manufacturer Name</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
            {invalid && (<div className='alert alert-danger mb-0 p-4 mt-4' id="success-message"> This is an invalid or already taken manufacturer name, please try again. </div>)}
            {invalid && submitted && (<div className='alert alert-success mb-0 p-4 mt-4' id="success-message"> Successfully created a new manufacturer! </div>)}
          </div>
        </div>
      </div>    
      );
}

export default ManufacturerForm;