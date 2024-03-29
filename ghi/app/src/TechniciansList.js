import React, { useEffect, useState } from "react";

const TechniciansList = () => {
    const [technicians, setTechnicians] = useState ([]);
    
    useEffect(() => {
        const fetchTechnicians = async () => {
            const url = "http://localhost:8080/api/technicians/";
            const response = await fetch(url);
            
            if(response.ok) {
                const data = await response.json();
                setTechnicians(data);
            }
        };
            fetchTechnicians();
    }, []); 

return(
    <>
    <table className="table table-striped align-middle mt-5">
        
        <thead>
            <tr>
                <th>Technicians</th>
            </tr>
        </thead>
        <tbody>
            {technicians.map((technician) => {
                return (
                    <tr key={technician.employee_id}>
                        <td>{technician.name}</td>
                    </tr>
                );
            })}
        </tbody>
    </table>
    </>
);
        }

export default TechniciansList;