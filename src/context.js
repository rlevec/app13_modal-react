import React, { useState, useContext } from 'react'


const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const[isSideBarOpen, setIsSideBarOpen] = useState(false)
    const[isModalOpen, setIsModalOpen] = useState(false)

    const openSidebar = () => {
        setIsSideBarOpen(true)
    }

    const closedSidebar = () => {
        setIsSideBarOpen(false)
    }

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closedModal = () => {
        setIsModalOpen(false)
    }


    return (
        <AppContext.Provider value={
            {isModalOpen, isSideBarOpen, openModal, openSidebar, closedModal, closedSidebar}
        }>{children}</AppContext.Provider>
    )
}



export {AppContext, AppProvider}