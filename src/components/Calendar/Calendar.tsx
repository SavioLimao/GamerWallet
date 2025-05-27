import './Calendar.css'
export default function Calendar({times}) {
  return (
  <>{new Date(times).toLocaleDateString("pt-BR")}
  </>
)}
