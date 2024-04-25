import { useEffect, useState } from "react";


function AutomobileForm () {
    const[color, setColor] = useState("");
    const[year, setYear] = useState("");
    const[models, setModels] = useState([]);
    const[selectedModel, setSelectedModel] =useState("");
    const[vin, setVin] = useState("");
    const[sold, setSold] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const[invalid, setInvalid] = useState(false);

    useEffect (() => {
        const fetchModels = async () => {
            const url = "http://localhost:8100/api/models/";
            const response = await fetch(url);

            if (response.ok) {
                const data = await response.json();
                setModels(data.models);
            }
        };
        fetchModels();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const model_id = selectedModel;
        const data ={
            color:color,
            year:parseInt(year),
            model_id,            
            vin:vin,
            sold:sold
        };

        const automobileUrl = "http://localhost:8100/api/automobiles/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch(automobileUrl, fetchConfig);
        console.log("RESPONSE:" , response)
        if(response.ok) {
            event.target.reset();
            setColor("");
            setYear("");
            setSelectedModel("");
            setVin("");
            setSold("");
            setSubmitted(true);
            setInvalid(false);
        }else{
            console.log("Error: invalid automobile.")
            setInvalid(true);
        }
    };

    return(
        <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1 className="text-center">Register a New Automobile</h1>
                <form id="create-auto-form" onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input onChange={(e) => setColor(e.target.value)} placeholder="color" required type="text" name="color" id="color" className="form-control" autoComplete="off"/>
                        <label htmlFor="color">Color</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={(e) => setYear(e.target.value)} placeholder="year" required type="text" name="year" id="year" className="form-control" autoComplete="off"/>
                        <label htmlFor="year">Year</label>
                    </div>
                    <div className="mb-3">
                        <select onChange={(e) => setSelectedModel(e.target.value)} required name="model" id="model" className="form-select" autoComplete="off">
                            <option value="">Select a model</option>
                            {models?.map((model) => {
                                return (
                                    <option key={model.id} value={model.id}>
                                        {model.name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="form-floating mb-3">
							<input
								onChange={(e) => setVin(e.target.value)}
								placeholder="Vin"
								required
								type="text"
								name="vin"
								id="vin"
								className="form-control"
							/>
							<label htmlFor="vin">Vin Number</label>
					</div>
                    <div className="form-floatin mb-3">
                        <select onChange={(e) => setSold(e.target.value)} required name="sold" id="sold" className="form-select" autoComplete="off">
                            <option value="">Availability</option>
                            <option value="available">Available</option>
                            <option value="sold">Sold</option>
                        </select>
                    </div>
                    <div className="col text-center">
                        <button className="btn btn-primary">Create</button>
                    </div>
                </form>
                {invalid && (<div className='alert alert-danger mb-0 p-4 mt-4' id="success-message"> This is an invalid or already taken automobile, please try again. </div>)}
        {submitted && (<div className='alert alert-success mb-0 p-4 mt-4' id="success-message"> Successfully created a new automobile into the inventory lot! </div>)}
            </div>
        </div>
    </div>
    )
}

export default AutomobileForm;