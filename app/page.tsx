import Banner from "./components/home/Banner";
import Category from "./components/home/Category";

export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center">
      <Category/>
      <Banner/>
    </div>
  )
}
