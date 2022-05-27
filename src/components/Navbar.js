import React from "react";

function Navbar(){
    return(
        <div className="flex align-center justify-between">
            <div className="mx-5 my-5 ">
                Mateo
            </div>
            <button className="mx-5 my-5 lg:hidden">Menu</button>
            <div className="mx-5 my-5 hidden lg:block">
                <a href="#!">Docs</a>
                <a href="#!">Examples</a>
                <a href="#!">Blogs</a>
            </div>
            <div className="mx-5 my-5 hidden lg:block">
                <button>Download</button>
            </div>
        </div>
    )
    
}

export default Navbar;