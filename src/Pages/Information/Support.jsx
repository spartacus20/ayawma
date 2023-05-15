import React, { useState } from 'react'
import axios from "../../Services/axios"
import { toast } from 'react-toastify';

function Support() {
    document.title = "Contacto - Ayawma"
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); 
        axios.post("/support", {
            name,
            email,
            subject,
            message
        }).then((res) => {
            toast.success("Message sent successfully"); 
            console.log(res);

        }).catch(err => console.error(err))

        document.getElementById("name").value = " "
        document.getElementById("email").value = " "
        document.getElementById("subject").value = " "
        document.getElementById("message").value = " "

    }

    return (
        <div className='mt-[150px] xl:w-[50%] sm:w-[90%] mx-auto  shadow-xl mb-[150px] '>
            <section className="bg-white  rounded-xl">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">Contacto</h2>
                    <p className="mb-8 lg:mb-16 font-light font-serif text-center text-gray-500  sm:text-xl">Precisa de detalhes sobre nosso plano de negócios?</p>
                    <form className="space-y-8" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Nome:</label>
                            <input type="text" id="name" className="shadow-sm bg-gray-50 border text-gray-800  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  " placeholder="Jonh" onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email:</label>
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border text-gray-800  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  " placeholder="nome@gmail.com" onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Assunto: </label>
                            <input type="text" id="subject" className="shadow-sm bg-gray-50 border text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  " placeholder="Deixa-nos saber como podemos ajudar-te" onChange={(e) => setSubject(e.target.value)} required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Mensagem</label>
                            <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="..." onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>
                        <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#1D4ED8] sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600">Enviar </button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Support