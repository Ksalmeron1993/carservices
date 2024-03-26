import React, { useEffect, useState } from "react";

const ManufacturersList = () => {
    const [manufacturers, setManufacturerName] = useState ([]);

    useEffect(() => {
        const fetchManufacturer = async () => {
            const url = "http://localhost:8100/api/manufacturers/";
            const response = await fetch(url);

            if(response.ok) {
                const data = await response.json();
                setManufacturerName(data.manufacturers);
            }

            };
            fetchManufacturer();
        }, []); 

return(
    <>
    <table className="table table-striped align-middle mt-5">
        <thead>
            <tr>
                <th>Manufacturer</th>
            </tr>
        </thead>
        <tbody>
            {manufacturers.map((manufacturer) => {
                return (
                    <tr key={manufacturer.id}>
                        <td>{manufacturer.name}</td>
                    </tr>
                );
            })}
        </tbody>
    </table>
    </>
);
        }

export default ManufacturersList;