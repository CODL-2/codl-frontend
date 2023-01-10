import React from "react";
import { usersDummyData } from "../../constants/dummy-data";
import TableRow from "./table/TableRow";

export default function LeaderBoard() {
  const ejectTableRows = () => {
    return usersDummyData.map((data, index) => {
      return <TableRow key={index} rowData={data} position={index} />;
    });
  };
  return (
    <div className="w-full h-full flex px-[20px] flex-col pb-[20px]">
      <div className="w-full h-[50px] flex justify-start items-center mb-[20px]">
        <span className="text-3xl  text-blue-900">Leader Board</span>
      </div>
      <div className="w-full h-full bg-[#F8FAFF] overflow-auto px-3">
        <div className="w-full h-full">
          <table className="w-full ">{ejectTableRows()}</table>
        </div>
      </div>
    </div>
  );
}
