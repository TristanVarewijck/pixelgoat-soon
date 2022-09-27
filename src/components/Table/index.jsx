import Table from "react-bootstrap/Table";
import { CSVLink } from "react-csv";

function Emails({ data }) {
  const headers = [
    { email: "email", key: "email" },
    { date: "date", key: "date" },
  ];

  const tableItems = data.map((i, index) => {
    return (
      <tr key={index}>
        <td>{i.email}</td>
        <td>{i.date}</td>
      </tr>
    );
  });

  return (
    <div className="mt-5">
      <CSVLink
        className="mt-5"
        data={data}
        target="_blank"
        rel="noreferrer"
        filename={"pixelgoat-emails.csv"}
        header={headers}
      >
        Export/Download Data as CSV file
      </CSVLink>
      <Table className="mt-4" striped bordered hover>
        <thead>
          <tr>
            <th>Emails ({data.length})</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{tableItems}</tbody>
      </Table>
    </div>
  );
}

export default Emails;
