import Characters from "./Components/Characters/Characters"
import Footer from "./Components/Footer/Footer"
import GameInsights from "./Components/GameInsights/GameInsights"
import Highlights from "./Components/Highlights/Highlights"
import Homepage from "./Components/Homepage/Homepage"
import { NavigationBar } from "./Components/NavigationBar/NavigationBar"
import Platforms from "./Components/Platforms/Platforms"

function App() {

  return (
    <div className="App">
      <NavigationBar />
      <Homepage />
      <Highlights />
      <Characters />
      <GameInsights />
      <Platforms />
      <Footer />
    </div>
  )
}

export default App
