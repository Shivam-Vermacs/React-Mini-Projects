const Table = ({ studentData, onDelete }) => {
  return (
    <>
      <h2>Student Enrollment Data</h2>
      {studentData.length === 0 ? (
        <p>No Student Data Available yet</p>
      ) : (
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.email}</td>
                <td>
                  <button onClick={() => onDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Table;
