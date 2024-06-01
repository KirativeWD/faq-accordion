import Faq from "./components/Faq"
import faqs from "./data/faqs.json";

function App() {

  return (
    <main>
      <Faq faqs={faqs} />
    </main>
  )

}

export default App
