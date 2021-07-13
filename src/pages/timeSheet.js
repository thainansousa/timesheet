import React, { useEffect, useState } from 'react'
import {RiLogoutBoxLine} from 'react-icons/ri'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {BsStopwatch} from 'react-icons/bs'
import {IoRestaurantOutline} from 'react-icons/io5'
import {MdRestore} from 'react-icons/md'

import Router from 'next/router'

import {format, parseISO} from 'date-fns'

export default function TimeSheet(){

    const [isActive, setIsActive] = useState(false)
    const [admin, setAdmin] = useState(false)
    const [hour , setHour] = useState('carregando...')
    const [date, setDate] = useState('carregando...')

    
    setTimeout(() => {
        const getHour = format(new Date, 'HH:mm:ss')
        setHour(getHour)
    }, 1000)

    useEffect(() =>{
        const getDate = format(new Date, 'yyyy-MM-dd')
        setDate(format(parseISO(getDate), 'dd/MM/yyyy'))
    }, [])

    
    return(
       <div>
           <div className="bg-purple-500 p-4 flex justify-between text-white text-xl">
            <span className="font-semibold">Olá, Usuário</span>
            {admin &&
                <div className="flex gap-12">
                    <a href="#" className="lg:hover:text-gray-200">Página Principal</a>
                    <a href="#" className="lg:hover:text-gray-200">Dashboard</a>
                    <a href="#" className="lg:hover:text-gray-200">Relatorios</a>
                </div>
            }
                <button className="font-semibold flex items-center gap-1 borde-0 outline-none" onClick={() => Router.push("/")}>Sair <RiLogoutBoxLine/></button>
           </div>

            <div className="w-10/12 my-4 mx-auto bg-gray-300 p-2 flex flex-col rounded lg:w-3/6">
                <table>
                    <thead className="text-left p-4 text-gray-500">
                        <tr>
                            <th>Data</th>
                            <th className="text-right">Hora</th>
                        </tr>
                    </thead>
                    <tbody className="font-semibold">
                        <tr>
                            <td>{date}</td>
                            <td className="text-right">{hour}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="flex flex-wrap gap-6 w-10/12 my-8 mx-auto justify-between lg:w-11/12 lg:flex-nowrap lg:my-16">
                {!isActive ? (
                     <button 
                     className="w-2/5 flex flex-col items-center bg-green-500 text-white p-2 rounded gap-3 shadow border-2 border-green-700 outline-none lg:w-3/12
                     lg:border-transparent lg:shadow-md lg:hover:border-green-700 lg:hover:bg-green-600" 
                     onClick={()=> setIsActive(true)}>
                        <span><AiOutlineClockCircle className="text-4xl lg:text-6xl"/></span>
                        <strong className="text-sm lg:text-xl">Entrada</strong>
                    </button>
                ) : (
                    <button disabled 
                    className="w-2/5 flex flex-col items-center bg-gray-200 text-white p-2 rounded gap-3 shadow border-2 border-gray-00 outline-none cursor-not-allowed lg:w-3/12">
                        <span><AiOutlineClockCircle className="text-4xl lg:text-6xl"/></span>
                        <strong className="text-sm lg:text-xl">Entrada</strong>
                    </button>
                )}
                <button 
                className="w-2/5 flex flex-col items-center bg-yellow-500 text-white p-2 rounded gap-3 shadow border-2 border-yellow-600 outline-none lg:w-3/12
                lg:border-transparent lg:shadow-md lg:hover:border-yellow-700 lg:hover:bg-yellow-600">
                    <span><IoRestaurantOutline className="text-4xl lg:text-6xl"/></span>
                    <strong className="text-sm lg:text-xl">Almoço</strong>
                </button>
                <button 
                className="w-2/5 flex flex-col items-center bg-blue-500 text-white p-2 rounded gap-3 shadow border-2 border-blue-700 outline-none lg:w-3/12
                lg:border-transparent lg:shadow-md lg:hover:border-blue-700 lg:hover:bg-blue-600">
                    <span><MdRestore className="text-4xl lg:text-6xl"/></span>
                    <strong className="text-sm lg:text-xl">Volta do almoço</strong>
                </button>
                <button className="w-2/5 flex flex-col items-center bg-red-500 text-white p-2 rounded gap-3 shadow border-2 border-red-700 outline-none lg:w-3/12
                 lg:border-transparent lg:shadow-md lg:hover:border-red-700 lg:hover:bg-red-600">
                    <span><BsStopwatch className="text-4xl lg:text-6xl"/></span>
                    <strong className="text-sm lg:text-xl">Saida</strong>
                </button>
            </div>

            <div className="w-11/12 my-8 mx-auto lg:my-24">
                <h2 className="font-semibold text-xl text-gray-500 lg:text-2xl">Ultimos pontos</h2>
                <div className="flex flex-col gap-4 mt-4">
                <div className="flex justify-between bg-gray-500 p-2 rounded text-white lg:justify-around">
                    <strong>Data</strong>
                    <strong>Entrada</strong>
                    <strong>Almoço</strong>
                    <strong>Retorno</strong>
                    <strong>Saida</strong>
                </div>
                <div className="grid grid-cols-5 grid-rows-1 gap-3 text-center bg-gray-300 py-2 pl-1 rounded">
                    <span>02/07/21</span>
                    <span>08:00</span>
                    <span>12:00</span>
                    <span>14:00</span>
                    <span>18:00</span>
                </div>
                <div className="grid grid-cols-5 grid-rows-1 gap-3 text-center bg-gray-300 py-2 pl-1 rounded">
                    <span>02/07/21</span>
                    <span>08:00</span>
                    <span>12:00</span>
                    <span>14:00</span>
                    <span>18:00</span>
                </div>
                <div className="grid grid-cols-5 grid-rows-1 gap-3 text-center bg-gray-300 py-2 pl-1 rounded">
                    <span>02/07/21</span>
                    <span>08:00</span>
                    <span>12:00</span>
                    <span>14:00</span>
                    <span>18:00</span>
                </div>
                <div className="grid grid-cols-5 grid-rows-1 gap-3 text-center bg-gray-300 py-2 pl-1 rounded">
                    <span>02/07/21</span>
                    <span>08:00</span>
                    <span>12:00</span>
                    <span>14:00</span>
                    <span>18:00</span>
                </div>
                <div className="grid grid-cols-5 grid-rows-1 gap-3 text-center bg-gray-300 py-2 pl-1 rounded">
                    <span>02/07/21</span>
                    <span>08:00</span>
                    <span>12:00</span>
                    <span>14:00</span>
                    <span>18:00</span>
                </div>
                </div>
            </div>

            <footer className="bg-purple-700 p-2 text-white text-center absolute bottom-0 rigth-0 left-0 w-full flex flex-col">
                <span>&copy; 2021 - Sell Telecom</span>
                <span>Todos os direitos reservados</span>
            </footer>
       </div>
    )
}