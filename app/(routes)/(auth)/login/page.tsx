import Link from 'next/link'

import { Checkbox } from "@/components/ui/checkbox"

import { Terms } from './Terms'
import { LoginForm } from './LoginForm'

export default function page() {
  return (
    <div>
      <p className='text-3xl font-bold text-left mb-7'>Iniciar sesión</p>
      <LoginForm />

      <div className='mt-5 text-center'>
        <Link href='/' className='hover:underline hover:opacity-70'>
          ¿Has olvidado tu contraseña?
        </Link>
      </div>
      <div className='flex iterm-center space-x-2 mt-4'>
        <Checkbox id='terms' className='border-white mt-1' />
        <label className='peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
          Recuerdame
        </label>
      </div>
      <div className='mt-4 flex gap-1'>
        <p className='text-white opacity-70'>¿Todavía sin Netflix?</p>
        <Link href='/register' className='opacity-1 text-white'>
          Suscribete ya
        </Link>
      </div>
      <Terms/>
    </div>
  )
}
