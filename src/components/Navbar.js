import React from "react";

function Navbar(){
    const [menuSlide, setMenuSlide] = React.useState(false)
    function handleMenu(){
        setMenuSlide(old => !old);
        console.log(menuSlide);
    }

    const linkClass = "px-5 py-5 hover:bg-blue-300 rounded hover:border-b-2 border-b-2 hover:border-gray-600 border-gray-100 transition ease-in duration-500";
    const slideClass = "py-3 hover:bg-blue-300 rounded w-full transition ease-in duration-300";

    const links = (clase) => [
        <li key="1"><a href="#!" ><button className={clase}>Docs</button></a></li>,
        <li key="2"><a href="#!" ><button className={clase}>Examples</button></a></li>,
        <li key="3"><a href="#!" ><button className={clase}>Blogs</button></a></li>
    ]

    return(
        <div className="static">
            <div className="flex align-center justify-between shadow-xl bg-gray-100">
                <div className="mx-5 my-5 font-bold ">
                    Mateo
                </div>

                <button className={`${linkClass} lg:hidden transition ease-in duration-500`} onClick={handleMenu}>
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>    
                </button>

                <ul className="mx-5 hidden lg:block lg:flex">
                    {links(linkClass)}
                </ul>

                <div className="hidden lg:block">
                    <button className={linkClass}>Download</button>
                </div>

            </div>

            {
                menuSlide && 
                <ul className="absolute bg-blue-200 w-full shadow-xl text-center lg:hidden">
                    {links(slideClass)}
                    <li><button className={slideClass}>Download</button></li>
                </ul>
            }
        </div>
    )
    
}

export default Navbar;