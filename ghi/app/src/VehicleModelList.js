import {useEffect, useState } from "react";

const VehicleModelList = () => {
    const [models, setModels] = useState ([]);

    useEffect(() => {
        const fetchVehicleModels = async () => {
            const url = "http://localhost:8100/api/models/";
            const response = await fetch(url);

            if(response.ok){
                const data = await response.json();
                setModels(data.models);
            }
        };
        fetchVehicleModels();
    }, []);
    
    return (
    <div className="container mt-3">
        <div className="row row-cols-1 row-cols-md-2 g-4">
            {models.map((model) => (
                    <div key={model.id} className="col-lg-4 d-flex align-items-stretch">
                        <div className="model-list card-body mb-3 shadow">
                            <h5 className="card-header">{model.manufacturer.name}</h5>
                            <img src={model.picture_url} className="card-img-top" alt={model.name}/>
                        </div>
                    </div>
            ))}
        </div>
    </div>
);
};

export default VehicleModelList;