import { BiUpArrowCircle } from 'react-icons/bi'

import { BsCheck2Circle, BsArrowDownCircle } from 'react-icons/bs'

import Header from "../Header"
import { LineChart } from '../LineChart'
import PieCharts from '../PieCharts'
import './index.css'

function Home() {
  return (
    <div className="home-bg-container">
      <Header />
      <div className="home-page-content-part-bg-container">
        <div className="graph-uppr-part-bg-container">
          <div className='garph-upper-card-container'>
            <p className='order-details-text' > 5090  <BiUpArrowCircle /> <br /> Order recieved</p>
            <p className='tick-mark-in'><BsCheck2Circle /></p>
          </div>
          <div className='garph-upper-card-container'>
            <p className='order-details-text'> 2390  <BsArrowDownCircle /> <br /> Total charges</p>
            <p className='tick-mark-in'><BsCheck2Circle /></p>
          </div>
          <div className='garph-upper-card-container'>
            <p className='order-details-text'> $2947  <BiUpArrowCircle /> <br /> Total Earnings</p>
            <p className='tick-mark-in'><BsCheck2Circle /></p>
          </div>
        </div>
        <div className='charts-bg-container'>
          <div className='line-chart-bg-container'>
            <LineChart />
          </div>
          <div className='pie-chart-container'>
            <PieCharts />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home