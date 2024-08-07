import Display from "./Display";
import { useState,useEffect,useRef } from "react";
import axios from "axios"
import apiURL from "../apiUrl"
import headers from "../utils/headers"
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
  
async function signout(event) {
    event.preventDefault()
    try {
        await axios.post(
            apiURL+'/auth/signout',
            null,
            headers()
        )
        } catch (error) {
            console.log(error)
    }
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    window.location.replace('/')
}

function catch_token(setOptions) {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setOptions([
        { to: "/", title: "Home" },
        { to: "/bio", title: "Bio" },
        { to: "/state", title: "Statement" },
        { to: "/works", title: "Works" },
        { to: "/contact", title: "Contact" }
    ])
}

export default function NavBar() {

    const number = useSelector(store=> store.chapters.number)
    const title = useSelector(store=> store.chapters.title)
    const location = useLocation()
    //console.log(location);
    const [options,setOptions] = useState([
        { to: "/", title: "Home" }
    ])
    const [photo,setPhoto] = useState()
    const [email,setEmail] = useState()
    useEffect(() => {
        let token = localStorage.getItem('token')
        //console.log(token);
        if (token) {
            axios.post(apiURL+'/auth/token',null,headers())
                .then(res=> {
                    if (res.data.response.user.role===0) {
                        setOptions([
                            { to: "/", title: "Home" },
                            { to: "/mangas/1", title: "Mangas"},
                            { to: "/author-form", title: "Create Author"},
                            { to: "/cia-form", title: "Create Company"},
                            { to: "/", title: "Sign Out" }
                        ])
                    } else if (res.data.response.user.role===1 || res.data.response.user.role===2) {
                        setOptions([
                            { to: "/", title: "Home" },
                            { to: "/mangas/1", title: "Mangas"},
                            { to: "/manga-form", title: "Create Manga" },
                            { to: "/me", title: "Profile" },
                            { to: "/", title: "Sign Out" }
                        ])
                    } else if (res.data.response.user.role===3) {
                        setOptions([
                            { to: "/", title: "Home" },
                            { to: "/mangas/1", title: "Mangas"},
                            { to: "/", title: "Sign Out" }
                        ])
                    }
                    setPhoto(res.data.response.user.photo)
                    setEmail(res.data.response.user.email)
                })
                .catch(()=> catch_token(setOptions))
        } else {
            catch_token(setOptions)
        }
    },[])
    const [show, setShow] = useState(false)
    const menuIcon = useRef(null)
    useEffect(() => {
        document.addEventListener('click', handleCloseMenu)        
        return () => document.removeEventListener('click', handleCloseMenu)
    }, [])

    const handleCloseMenu = (event) => {
        const isClickInside = menuIcon.current.contains(event.target)
        if(menuIcon.current !== event.target && !isClickInside) {
            setShow(false)
        }        
    }
    
    return (
        <>
            {show && <Display photo={photo} email={email} signout={signout} options={options} show={show} setShow={setShow} />}
            <nav className='flex w-full justify-between items-center px-5 h-24 absolute top-0 z-10 md:w-11/12 2xl:w-[1280px]'>
                <svg ref={menuIcon} onClick={()=>setShow(!show)} className="h-14 p-1 text-[#F472B6] hover:text-white  bg-[#EBEBEB] hover:bg-[#F472B6] rounded-lg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                {location.pathname.includes('chapter/') && <span>#{number} - {title}</span>}
                <img className='h-14 p-1' src="/img/logo.png"/>
            </nav>
        </>
    )

}
