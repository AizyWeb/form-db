'use client'

import { Input } from "@/components/Input"
import { Button } from "@/components/Button"

export const Form = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const { email, name, message } = Object.fromEntries(formData.entries())
  }
  return(
      <form onSubmit={handleSubmit} className="p-8 space-y-8 border border-white/10">
              
      <Input 
        name="email"
        id="email"
        label="Tu email:"
        type="email"
        placeholder="example@midominio.com"  
      />
      <Input 
        name="name"
        id="name"
        label="Tu nombre:"
        type="text"
        placeholder="Goncy Pozzo"
      />
      <Input 
        name="message"
        id="message"
        label="Tu mensaje:"
        type="text"
        placeholder="Este es el mensaje que quiero enviar"
      />
      
      <Button>Enviar Mensaje</Button>
      
      </form>
  )  
}
