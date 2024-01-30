import { Rent, columns } from "./columns";
import { DataTable } from "./rent-history-table";
function getData() {
  // Fetch data from your API here.
  return Array.from({ length: 6 }, (_, index) => ({
    id: index.toString(),
    date: (new Date("01/04/2023")),
    name: "Bmw Séries 2 #102",
    country: index%2 ? "France" : "UAE",
    interestRate: "% 5",
    tx: "Solscan.io",
    commission: "USDT $115",
}
  ));
}

const HistoryTable = () => {
  const data = getData() as Rent[];
  return (
    <div className="p-5 bg-[#1D1E21] rounded-xl">
      <h2
      className="text-2xl font-bold text-white"
      >
      History of Rents
      </h2>
      <h5 className="mt-1 mb-6 text-gray-600 text-base">
      List of Rents receveid
      </h5>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default HistoryTable;
