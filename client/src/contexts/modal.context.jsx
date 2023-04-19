import { createContext, useState } from "react";

const modalContext = createContext()

function ModalProviderWrapper(props) {

    const [showModal, setShowModal] = useState(false)
    const [selectedConcert, setSelectedConcert] = useState('')

    const openModal = (id) => {
        setShowModal(true)
        setSelectedConcert(id)
    }

    return (
        <modalContext.Provider value={{ showModal, openModal, selectedConcert, setShowModal }}>
            {props.children}
        </modalContext.Provider>
    )

}

export { modalContext, ModalProviderWrapper }