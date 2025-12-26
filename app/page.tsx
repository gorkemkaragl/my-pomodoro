import Timer from '@/components/layout/timer/Timer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted">
      <Card className="w-90">
        <CardContent className="pt-8">
          <Timer/>
        </CardContent>
      </Card>
    </main>
    
  )
}
