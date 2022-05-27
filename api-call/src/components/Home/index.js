import { useEffect, useState } from "react"
import VaccinationByGender from '../VaccinationByGender'
import Loader from "react-js-loader";

import './index.css'


function Home() {
  const [status, setStatus] = useState("initial")
  const [vaccinationData, setData] = useState([])

  useEffect(() => {
    setStatus("in_progress")
    const url = "https://apis.ccbp.in/covid-vaccination-data"

    const asyncFunction = async () => {
      const response = await fetch(url)
      if (response.ok === true) {
        const fetchedData = await response.json()
        const updatedData = {
          last7DaysVaccination: fetchedData.last_7_days_vaccination.map(
            eachDayData => ({
              vaccineDate: eachDayData.vaccine_date,
              dose1: eachDayData.dose_1,
              dose2: eachDayData.dose_2,
            }),
          ),
          vaccinationByAge: fetchedData.vaccination_by_age.map(range => ({
            age: range.age,
            count: range.count,
          })),
          vaccinationByGender: fetchedData.vaccination_by_gender.map(
            genderType => ({
              gender: genderType.gender,
              count: genderType.count,
            }),
          ),
        }

        setStatus("success")
        setData(updatedData)
      } else {
        setStatus("fail")
      }


    }
    asyncFunction()

  }, [])

  console.log(vaccinationData)

  const getDetails = () => {
    if (status === "fail") {
      return <h1>failed to fetch data</h1>
    } else if (status === "in_progress") {
      return <Loader type="box-rotate-x" bgColor={"#FFFFFF"} title={"box-rotate-x"} color={'#FFFFFF'} size={100} />
    } else if (status === "success") {
      return <VaccinationByGender byGenderDetails={vaccinationData.vaccinationByGender} />
    } else {
      return null
    }
  }


  return (
    <div className="bg-container">
      <div className="chart-container">
        {getDetails()}
      </div>
    </div>
  )
}
export default Home