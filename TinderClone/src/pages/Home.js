import Nav from "../components/Nav"
import AuthModel from "../components/AuthModel"
import{useState} from 'react'


const Home = () =>
{
    const[showModel,setShowModel]=useState(false)
    const[signUp,setSignUp]=useState(true)

    const authToken=false


    const handleClick =()=>
    {
        setShowModel(true)
        setSignUp(true)
    }

    return(
        <>
        <div className="overlay">
        <Nav minimal={false} setSignUp={setSignUp} setShowModel={setShowModel} showModel={showModel}/>
        <div className="home">
            <h1 className="primary-title">Swipe Right™</h1>
            <button className="primary-button" onClick={handleClick}>
                {authToken?"Signout":"Create Account"}
            </button>
            {showModel && (<AuthModel signUp={signUp} setShowModel={setShowModel}/>)}
        </div>
        </div>
        
        </>
        
)
}

export default Home