import React from "react";


export default function Table({data, headers}) {
    console.log(data);
    return(
        <table className="border-collapse shadow-md
                          shadow-gray-300 bg-white text-left overflow-hidden">
            <thead className="shadow-md shadow-gray-300">
                <tr className="">
                    {
                        headers?.map((header) => (
                            <th key={header.key} className="font-black px-2 text-xs py-1.5 uppercase tracking-widest">
                                {header.key}
                            </th>
                        ))
                    }
                    <th colSpan={2} className="font-black text-center px-2 text-xs py-1.5 uppercase tracking-widest">AÇÃO</th>
                </tr>
            </thead>
            <tbody>
            {
                data?.map((item, rowIndex) => (
                    <tr className="even:bg-gray-100">
                        {
                            headers?.map((header) => (
                                <td key={header.key} className={`py-1 px-2
                                ${header.key === 'preço' ? "text-right" : ""}
                                `} >
                                    {item[header.key]}
                                </td>
                            ))
                        }
                        <td className="py-1 px-2">Editar</td>
                        <td className="py-1 px-2">Deletar</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}
