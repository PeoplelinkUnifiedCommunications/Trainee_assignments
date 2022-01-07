import {useEffect, useState} from 'react'

import Header from './components/Header'
import HistoryItem from './components/HistoryItem'
import './App.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]



const App =()=>{
  const [historyList, setHistoryList] = useState([]);
  const isEmptyList = historyList.length === 0

  useEffect(()=>{
    setHistoryList(initialHistoryList)
  },[])

  const changeInput = value => {
    const updatedHistoryList = initialHistoryList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(value.toLowerCase()),
    )
    setHistoryList(updatedHistoryList)
  }

  const renderEmptyView = () => (
    <div className="empty-view-container">
      <p className="empty-view-description">There is no history to show</p>
    </div>
  )

  const deleteHistoryItem = id => {
    const filteredHistoryList = historyList.filter(
      eachHistory => eachHistory.id !== id,
    )
    setHistoryList(filteredHistoryList)
  }



  return (
    <div className="app-container">
      <Header changeInput={changeInput} />
      <div className="history-item-container">
        <div className="history-item-content">
          {isEmptyList ? (
            renderEmptyView()
          ) : (
            <ul className="list-container">
              {historyList.map(eachHistory => (
                <HistoryItem
                  historyItem={eachHistory}
                  key={eachHistory.id}
                  deleteHistoryItem={deleteHistoryItem}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default App