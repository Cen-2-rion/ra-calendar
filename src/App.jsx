import Calendar from "./components/Calendar.jsx"

function App() {
  const now = new Date(2017, 2, 8);

  return (
    <Calendar date={now} />
  )
}

export default App