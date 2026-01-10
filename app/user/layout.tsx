'use client';

import LiquidEther from "@/components/LiquidEther";



 



export default  function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
     <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black p-8 overflow-y-auto ">
         <div className="absolute min-h-screen min-w-screen inset-0 z-0">
        <LiquidEther
          colors={["#FFFFFF", "#A5B4FC", "#1F2937"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
          {children}

         
    
     </div>
  );
}
