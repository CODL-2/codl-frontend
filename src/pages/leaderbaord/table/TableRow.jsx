import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import React from "react";

export default function TableRow({ rowData, position }) {
  const dataFields = Object.keys(rowData);
  return (
    <>
      <tr className="w-full h-[60px]">
        <td>
          <div className="flex font-extrabold text-blue-900 bg-blue-100 w-[44px] h-[44px] justify-center items-center rounded-full">
            {rowData?.name?.charAt(0)}
          </div>
        </td>
        <td>
          <div className="flex">{rowData?.name}</div>
        </td>
        <td>
          <div className="flex w-[60px] hexagon relative items-center  border-b-4 border-t-4 border-yellow-600 justify-center">
            5 kyu
            {/* <ArrowBackIos /> */}
            {/* <div className="w-[60px] h-[30px]  border-b-4 border-t-4 border-yellow-600 "></div> */}
            {/* <ArrowForwardIos style={{ fontSize: 40 }} /> */}
          </div>
        </td>
        <td>
          <div className="flex">{rowData?.clan}</div>
        </td>
        <td>
          <div className="flex"></div>
        </td>
        <td>
          <div className="flex">{rowData.honor}</div>
        </td>
        <td>
          <div className="flex"></div>
        </td>
        <td>
          <div className="flex"></div>
        </td>
      </tr>
      <tr className="w-full  ">
        <td colSpan={"100%"} className="w-full">
          <div className="w-full h-[70px] bg-white flex justify-end">ss</div>
        </td>
      </tr>
    </>
  );
}
