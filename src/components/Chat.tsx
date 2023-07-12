'use client'

import React from 'react'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useChat } from 'ai/react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from './ui/scroll-area'
import EmptyChat from './EmptyChat'

const Chat = () => {

  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <Card className='w-[448px]'>
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>Usando a Vercel SDK para a criação de um chat.</CardDescription>
      </CardHeader>

      <CardContent>
        {messages.length === 0 ? (
          <EmptyChat />
        ) : (
          <ScrollArea className='h-[648px] w-full pr-3 flex gap-3 items-center justify-center'>
            {messages.map(message => {
              return (
                <div key={message.id} className={`flex gap-3 text-slate-600 text-sm mb-8 ${message.role === 'assistant' && 'justify-end'}`}>
                  {
                    message.role === 'user' && (
                      <Avatar>
                        <AvatarFallback>Matheus</AvatarFallback>
                        <AvatarImage src='https://github.com/MatheusMottaGit.png' />
                      </Avatar>
                    )
                  }

                  <p className='leading-relaxed text-justify text-xs bg-slate-200 rounded-lg p-2 max-w-md'>
                    {message.content}
                  </p>

                  {
                    message.role === 'assistant' && (
                      <Avatar>
                        <AvatarFallback>Rocketseat</AvatarFallback>
                        <AvatarImage src='https://i.pinimg.com/originals/80/02/d9/8002d966e210185ff9388178841dc5b7.png' />
                      </Avatar>
                    )
                  }

                </div>
              )
            })}
          </ScrollArea>
        )}
      </CardContent>

      <CardFooter>
        <form className='w-full flex gap-2' onSubmit={handleSubmit}>
          <Input placeholder='Como posso ajudá-lo(a)?' value={input} onChange={handleInputChange} />
          <Button type='submit'>Enviar</Button>
        </form>
      </CardFooter>
    </Card>
  )
}

export default Chat