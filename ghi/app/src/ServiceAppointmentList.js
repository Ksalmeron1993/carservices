import React , {useEffect, useState} from "react";

const AppointmentsList = () => {
    const [appointments , setAppointments] = useState ([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            const url = "http://localhost:8080/api/appointments/";
            const response = await fetch(url);

            if(response.ok) {
                const data = await response.json();
                setAppointments(data);
            }
        };
        fetchAppointments();
    }, []);
return(
    <>
     <table className="table table-striped align-middle mt-5">
        <thead>
            <tr>
                <th>Service Appointments List</th>
            </tr>
        </thead>
        <tbody>
            {appointments.map((appointment) => {
                return (
                    <tr key={appointment.id}>
                        <td>{appointment.date}</td>
                        <td>{appointment.time}</td>
                    </tr>
                );
            })}
        </tbody>
    </table>
    </>

);

}

export default AppointmentsList;