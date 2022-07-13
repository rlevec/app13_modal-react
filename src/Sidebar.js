import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { AppContext } from './context'

const Sidebar = () => {
  const {isSideBarOpen, closedSidebar} = useContext(AppContext)

  return (
    <aside className={`${isSideBarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='sidebar-header'>
        <img src='https://i.imgur.com/5TsXCFr.jpg' alt='logo' className='logo-pic'/>
        <button className='close-btn' onClick={closedSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {
          links.map((link) => {
            const {id, url, text, icon} = link
            return (
              <li key={id}>
                <a href={url}>{icon}{text}</a>
              </li>
            )
          })
        }
      </ul>
      <ul className='social-icons'>
        {
          social.map((link) => {
            const {id, url, icon} = link
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })
        }
      </ul>
    </aside>
  )
}

export default Sidebar