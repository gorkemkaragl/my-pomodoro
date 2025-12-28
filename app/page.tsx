import Header from "@/components/layout/Header";
import Timer from "@/components/timer/Timer";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center ">
      <Header></Header>

      <Card className="w-full border border-border bg-card/90 backdrop-blur">
        <CardContent className="pt-8 pb-18">
          <Timer />
        </CardContent>
      </Card>

      {/*buraya footer olucak bir replik olsun diziden */}
    </main>
  );
}
