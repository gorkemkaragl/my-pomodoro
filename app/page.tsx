import Timer from '@/components/layout/timer/Timer'
import TimerHeader from '@/components/layout/timer/TimerHeader'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

export default function Home() {
  return (
    
    <main className="flex flex-col min-h-screen items-center justify-center ">
          <TimerHeader></TimerHeader>

      <Card className="w-full border border-border bg-card/90 backdrop-blur">
        <CardContent className="pt-8 pb-12">
          <Timer/>
        </CardContent>
      </Card>
    </main>
    
  )
}
