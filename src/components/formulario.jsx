import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import '../style/formulario.css'
import validator from 'validator'

export function Formulario() {
  const { 
    register, 
    handleSubmit,
    formState: { errors },
   } = useForm();

  console.log({errors}) 

  const onSubmit = data => {
    alert(JSON.stringify(data));

        // Formate a mensagem para o WhatsApp com os dados do formulário
        const message = `Nome: ${data.nome}\nSobrenome: ${data.sobrenome}\nE-mail: ${data.email}\nTelefone: ${data.telefone}\nMensagem: ${data.message || ''}`;
        
        // Codifique a mensagem para a URL
        const encodedMessage = encodeURIComponent(message);
        
        // Defina o número para enviar o WhatsApp
        const whatsappNumber = '5555984273497'; // Altere para o número desejado no formato internacional (ex: 5511999999999 para Brasil)
    
        // Crie a URL do WhatsApp
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        // Abra o WhatsApp em uma nova aba
        window.open(whatsappUrl, '_blank');



  };

  return (
    <div className='app-container '>

      <div className='form-group'>
        <label>Nome</label>
        <input
        className={errors?.nome && "input-error"}
        type='text'
        {...register("nome", {
          required: true
        })} 
        />
        {errors?.nome?.type === "required" && 
        <p className='error-message'>Nome é obrigatório</p>}
        
      </div>

      <div className='form-group'>
        <label>Sobrenome</label>
        <input 
        className={errors?.sobrenome && "input-error"}
        type='text'
        {...register("sobrenome", {required: true})}
        />
        {errors?.sobrenome?.type === "required" && 
        <p className='error-message'>Sobrenome é obrigatório</p>}
      </div>

      <div className='form-group'>
        <label>E-mail</label>
        <input 
        className={errors?.email && "input-error"}
        type='email'
        {...register("email", {required: true, 
          validate: (value) => validator.isEmail(value),
        })} 
        />
        {errors?.email?.type === "required" && 
        <p className='error-message'>E-mail é obrigatório</p>}
        {errors?.email?.type === "validate" && 
        <p className='error-message'>E-mail é inválido</p>}
      </div>
      
      <div className='form-group'>
        <label>Telefone</label>
        <input 
        className={errors?.telefone && "input-error"}
        type='number'
        {...register("telefone", {required: true})} 
        />
        {errors?.telefone?.type === "required" && 
        <p className='error-message'>Telefone é obrigatório</p>}
      </div>

      <div className='form-group message'>
        <label>Mensagem</label>
        <input {...register("message")}
        type='text'/>
      </div>    

      <div className='form-group'>  
        <button type="submit" onClick={() => handleSubmit(onSubmit)()}>Enviar</button>
      </div>

    </div>
  );
}