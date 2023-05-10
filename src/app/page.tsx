import { Inter } from "next/font/google"
import { Form } from "@/components/Form"


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${inter.className} flex flex-col  min-h-screen p-24`}>
      <h2 className=" text-4xl font-bold tracking-tight text-center mb-4">Contacta conmigo</h2>
      <Form />
    </main>
  )
}

// items-center justify-center PA EL MAIN