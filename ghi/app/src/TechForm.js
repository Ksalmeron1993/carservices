import { useState } from "react";

function TechForm () {
    const [techName, setTechName] = useState("");
    const [employeeId, setEmployeeId] = useState("");
    const [submitted, setSubmitted ] = useState(false);
    const[invalid, setInvalid] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = { name: techName, employee_id: employeeId};

        const techUrl = "http://localhost:8080/api/technicians/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch(techUrl, fetchConfig);
        if(response.ok) {
            event.target.reset();
            setTechName("");
            setEmployeeId("");
            setSubmitted(true);
            setInvalid(false);
        }else{
            console.log("Error: invalid technician information.")
            setInvalid(true);
        }
    };
    return(
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1 className="text-center">Register a New Technician</h1>
                    <form id="create-tech-form" onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input onChange={(e) => setTechName(e.target.value)} placeholder="name" required type ="text" id="name" className="form-control" />
                            <label htmlFor="name"> Technician Name </label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={(e) => setEmployeeId(e.target.value)} placeholder="id" required type ="text" id="id" className="form-control" />
                            <label htmlFor="id"> Technician Employee Number</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Create</button>
                    </form>
                    {invalid && (<div className='alert alert-danger mb-0 p-4 mt-4' id="success-message"> This is an invalid or already taken technician name, please try again. </div>)}
                    {submitted && (<div className='alert alert-success mb-0 p-4 mt-4' id="success-message"> Successfully created a new technician! </div>)}
                </div>
            </div>
        </div>
    );
};

export default TechForm;