'use client'
import IonIcon from '@/components/IonIcon';
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Hello  
      <IonIcon name="home-outline" size="32px" color="blue" />
      <IonIcon name="heart" size="40px" color="red" />
    </div>
  );
}
