import React, { useState, useEffect } from 'react';

function DoctorsDetails() {
  const [searchTerm, setSearchTerm] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Example of fetching data
    const fetchDoctors = async () => {
      try {
        const response = await fetch(`http://localhost:8080/search`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        setError(error.message);
      }
    };

    if (searchTerm) {
      fetchDoctors();
    }
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {doctors.length > 0 && (
        <div>
          <h2>Doctor Details:</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Experience</th>
                <th>Specialization</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor) => (
                <tr key={doctor.id}>
                  <td>{doctor.id}</td>
                  <td>{doctor.name}</td>
                  <td>{doctor.no_of_years_of_experience} years</td>
                  <td>{doctor.specialization}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default DoctorsDetails;
