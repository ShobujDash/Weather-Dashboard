import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./comonents/headers/Header";
import WeatherBoard from "./comonents/weather/WeatherBoard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid place-items-center h-screen">
      <Header />
      <main>
        <section>
          <WeatherBoard />
        </section>
      </main>
    </div>
  );
}

export default App;
