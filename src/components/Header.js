import React from "react";
import {Link} from "react-router-dom"

function Header(){

    return(
        <header>
            {/* <div className = "header-container"> */}
            <h4 className = "header-title">Trailme Locator</h4>
            <Link className = "home-image" to ="/"><i class="ri-home-fill"></i></Link>
            
            {/* <Link to ="/trailresults"><i class="ri-search-line"></i></Link> */}

            {/* </div> */}
            
        </header>
    )
}
export default Header;