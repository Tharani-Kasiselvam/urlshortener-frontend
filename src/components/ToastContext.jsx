import { createContext, useContext, useState } from 'react'
import { Toast, ToastContainer } from 'react-bootstrap'

const ToastContext = createContext()

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([])

    const addToast = (message, variant) => {
        //  const variant = 'danger'
        console.log("Inside addToast: ",message)
        setToasts([...toasts, {message,variant, id: new Date()}])
    }

    const removeToast = (id) => {
        setToasts(toasts.filter(toast => toast.id != id))
    }

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {children}
            <ToastContainer position="top-center" className="p-3 text-align-center">
                {
                    toasts.map(({ id, message, variant}) => (
                        <Toast key={id}
                            onClose={() => removeToast(id)}
                            delay={3000}
                            autohide 
                            bg= {variant}
                            className = 'd-inline-block m-1 text-white text-align-center'

                        >
                            <Toast.Body>
                                <b>{message}</b>
                            </Toast.Body>
                        </Toast>
                    ))
                }
        </ToastContainer>
        </ToastContext.Provider>
    )
}
export const useToast = () => useContext(ToastContext)