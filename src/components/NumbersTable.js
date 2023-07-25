const NumbersTable = (props) => {

    const { limit } = props

    const numArray = Array.from({ length: limit }, (_, index) => index + 1);

  return (
    <div className="numbers-table p-5 w-[450px] mx-auto">
      <table className="w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">Number</th>
          </tr>
        </thead>
        <tbody>
          <tr className="flex flex-wrap">
            {numArray.map((number) => (
              <td key={number} className={`border px-4 py-2 w-1/5 ${number % 2 === 0 ? "bg-red-600" : ''}`}>
                {number}
              </td> 
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NumbersTable;
