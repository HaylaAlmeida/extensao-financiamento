import React, {CSSProperties, useEffect, useState} from "react";
import Table from "../components/Table";
import { useCSVReader } from "react-papaparse";
import {Link} from "react-router-dom";
import {FilePlus, FilePlus2, Plug, Plus, Car as LucideCar} from "lucide-react";

const carsHeaders = [
    { key: 'id' },
    { key: 'modelo' },
    { key: 'ano' },
    { key: 'placa' },
    { key: 'cor' },
    { key: 'tipo' },
    { key: 'preço' }

]

const INITIAL_CARS = [
    {
        ano: "19/20",
        cor:"PRATA",
        id:"1",
        modelo:"ARGO DRIVE 1.0",
        placa:"QUP-7C32",
        preço:"R$ 64.900,00",
        tipo:"COMPLETO"
    },
    {
        ano: "19/20",
        cor:"BRANCO",
        id:"2",
        modelo:"ARGO DRIVE 1.0",
        placa:"QUP-7C32",
        preço:"R$ 64.900,00",
        tipo:"COMPLETO"
    },

]

export default function Car() {
    const { CSVReader } = useCSVReader();
    const [rawData, setRawData] = useState([]);
    const [data, setData] = useState(INITIAL_CARS);

    useEffect(() => {
        chrome.storage.local.get(null, (items) => {
            // setData(items);
        })
    }, []);

    function toObject(e) {
        e.preventDefault();
        rawToGood();

    }

    function rawToGood() {

        let array = [];
        for (let car of rawData) {
            const [id, model, year, color, type, plate, price] = car;

            let renameKey = (keysMap, object) =>
                Object.keys(object).reduce(
                    (acc, key) => ({
                        ...acc,
                        ...{ [keysMap[key] || key]: object[key] },
                    }),
                    {}
                );

            const object = {
                0: "id",
                1: "modelo",
                2: "ano",
                3: "cor",
                4: "tipo",
                5: "placa",
                6: "preço"
            }

            const newCar = renameKey(object, car);

            array.push(newCar);
        }

        setData(array);
    }

    return(
        <div className="flex flex-col">
            <div className="px-4 pt-2">
                <h2 className="text-gray-400 text-lg">Carros</h2>
                <hr className="h-px bg-gray-300 border-0" />
            </div>
            <div className="flex place-content-center gap-4 p-2">
                <Link to={"/new-car"} className="grid bg-red-100 text-red-800 py-1 px-2 rounded-md">
                    <div className="flex place-self-center items-center">
                        <Plus size={20} />
                        <LucideCar size={25} />
                    </div>
                    <span>Adicionar novo</span>
                </Link>
                <Link to={"/new-car-by-document"} className="grid bg-red-100 text-red-800 py-1 px-2 rounded-md">
                    <FilePlus2 size={20} className="place-self-center" />
                    <span>Adicionar por documento</span>
                </Link>
            </div>
            {/*<CSVReader*/}
            {/*    options={{header: true}}*/}
            {/*    onUploadAccepted={(results: any) => {*/}
            {/*        console.log('---------------------------');*/}
            {/*        console.log(results);*/}
            {/*        console.log('---------------------------');*/}

            {/*        setRawData(results.data);*/}
            {/*    }}*/}
            {/*>*/}
            {/*    {({*/}
            {/*          getRootProps,*/}
            {/*          acceptedFile,*/}
            {/*          ProgressBar,*/}
            {/*          getRemoveFileProps,*/}
            {/*      }: any) => (*/}
            {/*        <>*/}
            {/*            <div className="flex gap-2 flex-1  justify-between mb-4 px-3 ml-2 mt-4 text-sm text-red-800 font-medium rounded-md">*/}
            {/*                <button type='button' {...getRootProps()} className="rounded-md bg-red-500 p-2">*/}
            {/*                    Escolher arquivo*/}
            {/*                </button>*/}
            {/*                <div className="flex border pl-4 grow items-center rounded-md">*/}
            {/*                    {acceptedFile && acceptedFile.name}*/}
            {/*                </div>*/}
            {/*                <button {...getRemoveFileProps()} className="rounded-md bg-red-500 p-2">*/}
            {/*                    Remover*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*            <ProgressBar className="" />*/}
            {/*        </>*/}
            {/*    )}*/}
            {/*</CSVReader>*/}
            {/*{*/}
            {/*    rawData.length > 0 && <div className="ml-4 text-red-800">{`Total de carros: ${rawData.length}`}</div>*/}
            {/*}*/}
            {/*<button onClick={toObject} className="ml-4 rounded-md bg-red-500 text-red-800 px-2 py-1">Enviar</button>*/}
            <div className="grid w-full p-2 justify-center items-center font-mukta">
                <Table data={data} headers={carsHeaders}/>
            </div>
        </div>
    )
}