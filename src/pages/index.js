import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import Router from 'next/router'
import {FiLogIn} from 'react-icons/fi'
import {AiOutlineUser} from 'react-icons/ai'

export default function Home() {
  
  const id = 30062021

  const [idUser, setIdUser] = useState()
  const [err, setErr] = useState(false)

  const {register, handleSubmit} = useForm()

  function handleSignIn(data){
    if(data.id != 30062021){
      setErr(true)
    }else{
      Router.push("/timeSheet")
    }
  }


  return (
    <div className="bg-purple-500 w-full h-screen flex items-center justify-center">
      <div className="w-4/5 bg-white my-0 mx-auto p-4 rounded md:w-3/5 lg:w-1/4 shadow">
        <div>
          <h1 className="text-sm text-center font-semibold uppercase">Faça seu login para entrar!</h1>
        </div>
        <div className="flex flex-col items-center mt-4 mb-2">
          <h1 className="text-2xl">Logo</h1>
          <h2 className="text-lg text-blue-500 font-semibold">Time Sheet</h2>
        </div>
        <div>
          <form action="" className="flex flex-col" onSubmit={handleSubmit(handleSignIn)}>
            {err && (
              <small className="text-red-500 font-semibold text-sm">ID incorreto! Tente novamente</small>
            )}
            <label htmlFor="id" className="font-semibold">ID:</label>
                <input {...register('id')} type="text" name="id" id="id" className="border border-gray-500 h-8 outline-none pl-2 w-full rounded shadow" required/>
              <button type="submit" className="mt-4 bg-green-500 text-white h-8 rounded font-semibold flex items-center justify-center">Entrar <FiLogIn className="ml-2 mt-0.5"/></button>
          </form>
        </div>
      </div>
    </div>
  )
}
