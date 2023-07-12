import Image from 'next/image'
import React from 'react'

import chat from '../assets/chat.svg'

const EmptyChat = () => {
  return (
    <div className='h-[648px] flex flex-col items-center justify-center text-center text-gray-400 font-semibold'>
      Chat vazio...

      <span className='text-sm'>Deixe uma mensagem e inicie sua conversa!</span>

      <Image
        src={chat}
        alt=''
        className='w-52 mt-12'
      />
    </div>
  )
}

export default EmptyChat