import Table from "react-bootstrap/Table";
import { CSVLink } from "react-csv";

function Emails({ data }) {
  const tableItems = data.map((i, index) => {
    return (
      <tr key={index}>
        <td>{index}</td>
        <td>{i.email}</td>
      </tr>
    );
  });

  return (
    <div className="container mt-5">
      <h1>Incoming Emails</h1>
      <p>All Emails collected from Newsletter Form</p>
      <CSVLink
        className="mt-5"
        data={data}
        target="_blank"
        rel="noreferrer"
        filename={"pixelgoat-emails.csv"}
      >
        Export/Download Data as CSV file
      </CSVLink>
      <Table className="mt-4" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Emails ({data.length})</th>
          </tr>
        </thead>
        <tbody>{tableItems.reverse()}</tbody>
      </Table>
    </div>
  );
}

export default Emails;
