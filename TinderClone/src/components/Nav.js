import tinderLogo from "../images/tinderLogo.png"
import tinderWhiteLogo from "../images/tinderWhiteLogo.png"

const Nav = ({minimal,setShowModel,showModel,setSignUp})=>
{
    const handleClick=()=>
    {
        setShowModel(true)
        setSignUp(false)
    }
    const authToken=false
    return(
        <nav>
            <div className="logo-container">
                <img src={minimal?tinderLogo:tinderWhiteLogo} alt="" className="logo" />
            </div>
            {!authToken && !minimal && <button className="nav-button" onClick={handleClick} disabled={showModel}>Log In</button>}
        </nav>
    )
}
export default Nav