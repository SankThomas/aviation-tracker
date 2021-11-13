import { useState, useEffect } from "react"

export default function FetchFightData() {
  const [flights, setFlights] = useState([])

  const fetchFlights = async () => {
    const res = await fetch(
      `http://api.aviationstack.com/v1/flights?access_key=${process.env.REACT_APP_ACCESS_KEY}`
    )
    const data = await res.json()
    console.log(data.data)
    setFlights(data.data)
  }

  useEffect(() => {
    fetchFlights()
  }, [])

  return (
    <>
      <section>
        {flights.map(
          ({
            flight_date,
            flight_status,
            departure,
            arrival,
            airline: { name },
            flight: { number, iata },
          }) => (
            <div></div>
          )
        )}
      </section>
    </>
  )
}
