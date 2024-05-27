import {useState} from "react";
    
export  const Formulario = () => {
   
    const [primeiroNome, setPrimeiroNome] = useState("");
    const [ultimoNome, setUltimoNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [mensagem, setMensagem] = useState("");

 
    const handleSubmit = (event) => {
        alert(`Um nome foi enviado: ${primeiroNome}\nEmail: ${email}`);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col pl-24 w-[32rem]">
                <div className="flex justify-between">
                    <div className="w-1/2">
                        <label>
                            Primeiro nome:
                            <br /> 
                            <input 
                            type="text"
                            name="Primeiro nome" 
                            value={primeiroNome} 
                            onChange={(e)=>setPrimeiroNome(e.target.value)} 
                            className="bg-gray-300 rounded-sm w-48"/>
                        </label>
                    </div>
                    <div className="w-1/2">
                        <label>
                            Ultimo nome:
                            <br /> 
                            <input 
                            type="text"
                            name="Ultimo nome" 
                            value={ultimoNome} 
                            onChange={(e)=>setUltimoNome(e.target.value)} 
                            className="bg-gray-300 rounded-sm w-full "/>
                        </label>
                    </div>
                </div>
                <br />
                <label>
                    Email:
                    <br /> 
                    <input 
                    type="email"
                    name="email" 
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)} 
                    className="bg-gray-300 rounded-sm w-full text-black"/>
                </label>
                <br />
                <label>
                    Telefone:
                    <br /> 
                    <input 
                    type="number"
                    name="telefone" 
                    value={telefone} 
                    onChange={(e)=>setTelefone(e.target.value)} 
                    className="bg-gray-300 rounded-sm w-full"/>
                </label>
                <br />
                <label>
                    Mensagem:
                    <br /> 
                    <input 
                    type="text"
                    name="mensagem" 
                    value={mensagem} 
                    onChange={(e)=>setMensagem(e.target.value)} 
                    className="bg-gray-300 rounded-sm w-full"/>
                </label>
                <br />       
                <input type="submit" value='Inscrever-se' className="bg-gray-500 w-48 rounded-xl"/>
            </form>
    )
}