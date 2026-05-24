export default function JobsPage() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Jobs</h2>

      <div className="bg-white p-4 rounded-xl shadow">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b">
              <th>Title</th>
              <th>Type</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td>Java Developer</td>
              <td>Full Time</td>
              <td>Active</td>
              <td>Edit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}