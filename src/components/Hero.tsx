import Image from 'next/image'
import logo from '../assets/nlw-logo.svg'

export function Hero() {
  return (
    <div className="space-y-5">
      <Image src={logo} alt="Logo" />
      <div className="max-w[420px] space-y-1 ">
        <h1 className="mt-5 text-5xl font-bold leading-tight text-gray-50 ">
          Sua Capsula do Tempo
        </h1>
        <p className="text-lg leading-relaxed">
          Guarde todos os momentos os importantes da sua vida!{' '}
        </p>
      </div>
      <a
        href=""
        className="inline-block rounded-full bg-green-600 px-5 py-3 font-alt text-sm uppercase leading-none text-gray-50 transition-colors hover:bg-green-800 "
      >
        Guarde Uma Lembrança
      </a>
    </div>
  )
}
