import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import urlServices from '../services/urlServices';
import { useToast } from "./ToastContext";
import '../App.css'
import { useState } from 'react';

const URLShortner = () => {

    const [shortUrl,setShortUrl] = useState("")
    const toast = useToast()

    const handleURLShortener = (e) => {
        e.preventDefault()
        const origUrl = e.target[0].value
        console.log("origUrl",origUrl)
        urlServices.createShortUrl(origUrl)
        .then(response => {
            setShortUrl(response.data.shortUrl)
            console.log(response.data.shortUrl)
        }).catch(error => {
            console.log(error)
            toast.addToast(`Failed: ${error.response.data.error}`,"danger")
        })
    }

  return (
    <div>
      <div className="short-div">Generate Short URL
        <form onSubmit={handleURLShortener}>
        <label htmlFor="url" style={{fontSize:"15px"}}>Enter URL</label>
        <input type="text" className="url_txt" style={{fontSize:"15px", marginLeft:"5px", marginBottom:"5px"}} placeholder="Enter URL" />
        <br />
        <button type="submit" className="btn btn-primary" style={{marginLeft:"5px", fontSize:"13px",marginBottom:"5px"}}><b>Short It</b></button>
        </form>
        <h4>{shortUrl}</h4>
      </div>
      <ToastContainer position="top-center" theme="colored" className="p-3 text-align-center"/>
    </div>
  )
}

export default URLShortner