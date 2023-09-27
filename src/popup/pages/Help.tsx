import React from "react";
import Accordion from "../components/Accordion";

const faqs = [
    {
        title: "Bancos",
        text: "Preencha as informações de login dos principais bancos " +
            "e obtenha-as automaticamente.",
    },
    {
        title: "Carros",
        text: "Preencha as informações de veículos ou carregue arquivos " +
            "Excel, CSV ou JSON para obter as informações dos veículos disponíveis em sua loja.",
    },
    {
        title: "Clientes",
        text: "Preencha as informações de cliente ou " +
            "vincule um link para o formulário e obtenha automaticamente as informações do seu cliente.",
    },
    {
        title: "Formulário",
        text: "Preencha as informações para a simulação de empréstimo " +
            "ou escolha das informações já salvas.",
    },
]

export default function Help() {
    return(
        <main className="h-screen">
            <div className="h-full flex flex-col bg-white overflow-y-auto">
                <h2 className="px-3 ml-4 mt-4 text-xl text-red-800 font-medium rounded-md">Como utilizar?</h2>
                <Accordion data={faqs} />
            </div>
        </main>
    )
}