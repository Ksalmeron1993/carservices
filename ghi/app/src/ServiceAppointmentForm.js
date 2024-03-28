import {useEffect, useState} from "react";

function ServiceForm () {
    const[date, setDate] = useState("");
    const[time, setTime] = useState("");
    const[customerName, setCustomerName] = useState("");
    const[customerPhoneNumber, setCustomerPhoneNumber] = useState("");
    const[customerEmail, setCustomerEmail] = useState("");
    const[technicians, setTechnicians] = useState([]);
    const [vin, setVin] = useState("");
    const [reasonForVisit, setReasonForVisit] = useState("");
    const [submitted, setSubmitted ] = useState(false);
    const[invalid, setInvalid] = useState(false);


    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            date:date,
            time:time,
            customer: customerName,
            phone: customerPhoneNumber,
            email: customerEmail,
            tech: technicians,
            vin: vin,
            reason: reasonForVisit
        };

        const serviceUrl = "http://localhost:8100/api/appointments/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type" : "application/json",
            },
        };
        const response = await fetch(serviceUrl, fetchConfig);
        if(response.ok) {
            event.target.reset();
            setDate("");
            setTime("");
            setCustomerName("");
            setCustomerPhoneNumber("");
            setCustomerEmail("");
            setTechnicians("");
            setVin("");
            setReasonForVisit("");
            setSubmitted(true);
            setInvalid(false);
        }else{
            console.log("Error: unable to set up appointment, plese try again.")
            setInvalid(true);
        }
    };

    useEffect(() => {
        const fetchTechnicians = async () => {
            const url = "https://localhost:8100/api/technicians/";
            const response = await fetch(url);

            if (response.ok) {
                const data = await response.json();
                setTechnicians(data.technician);
            }
        };
        fetchTechnicians();
    }, []);
    return(
        <div className="row">
			<div className="offset-3 col-6">
				<div className="shadow p-4 mt-4">
					<h1 className="text-center">Create a New Appointment</h1>
					<form id="create-appointment-form" onSubmit={handleSubmit}>
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
						<div className="form-floating mb-3">
							<input
								onChange={(e) => setCustomerName(e.target.value)}
								placeholder="customer"
								required
								type="text"
								name="customer"
								id="customer_name"
								className="form-control"
							/>
							<label htmlFor="customer_name">Vehicle Owner</label>
						</div>
						<div className="form-floating mb-3">
							<input
								onChange={(e) => setDate(e.target.value)}
								placeholder="Date"
								type="date-local"
								name="date"
								id="date"
								className="form-control"
							/>
							<label htmlFor="Date">Date</label>
						</div>
                        <div className="form-floating mb-3">
							<input
								onChange={(e) => setTime(e.target.value)}
								placeholder="time"
								type="time-local"
								name="time"
								id="time"
								className="form-control"
							/>
							<label htmlFor="Time">Time</label>
						</div>
                        <div className="form-floating mb-3">
                            <input
                                onChange={(e) => setCustomerEmail(e.target.value)}
                                placeholder="email"
                                type="text"
                                name="email"
                                id="email"
                                className="form-control"
                                />
                                <label htmlFor="Email">Email</label>
                        </div>
						<div className="form-floating mb-3">
							<select
								onChange={(e) => setTechnicians(e.target.value)}
								required
								name="technician"
								id="technician"
								className="form-select">
								<option value="">Select a Technician</option>
								{technicians.map((technician) => {
									return (
										<option key={technician.id} value={technician.id}>
											{technician.name}
										</option>
									);
								})}
							</select>
						</div>
						<div className="mb-3">
							<label htmlFor="reason">Reason</label>
							<textarea
								onChange={(e) => setReasonForVisit(e.target.value)}
								id="reason"
								rows="1"
								name="reason"
								className="form-control"></textarea>
						</div>
						<div className="col text-center">
							<button className="btn btn-primary">Create</button>
						</div>
					</form>
                    {invalid && (<div className='alert alert-danger mb-0 p-4 mt-4' id="success-message"> Unable to create your appointment, please try again. </div>)}
					{submitted && (
						<div
							className="alert alert-success mb-0 p-4 mt-4"
							id="success-message">
							Your appointment has been created!
						</div>
					)}
				</div>
			</div>
		</div>
	);
};


export default ServiceForm;