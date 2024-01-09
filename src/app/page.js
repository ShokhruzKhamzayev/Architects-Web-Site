import Main from "@/components/main";
import Header from "@/components/shared/header";

export default function Home() {
  return (
    <div className="custom-container">
      <div className="page-one max-h-[100svh] overflow-y-hidden flex flex-col justify-between">
        <Header />
        <Main />
      </div>
    </div>
  )
}
