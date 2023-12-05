import { NavBar,Hero,About,Events,Members,Contact } from "@/components"

export default function Home() {
  return (
   <main className="bg-slate-900 font-sans">
    <NavBar/>
    <Hero/>
    <About/>
    <Events/>
    <Members/>
    <Contact/>
    </main>

  )
}
