import React, { useContext } from "react"
import { BsMoon } from "react-icons/bs"
import { ContextTheme } from "../context/ThemeContext"
const NavBar = () => {
  const { darkTheme, themeHandler } = useContext(ContextTheme)
  return (
    <div>
      <div className={`${ 
        darkTheme ? "bg-[#2B3844]" : "bg-white" } 
        md:px-20 px-4 flex justify-between items-center h-[80px]`}>
        <p className={`${ 
          darkTheme ? "text-[#FFF]" : "text-[#111517]" } 
          md:text-2xl text-sm font-extrabold`}>
         Where in the world?
        </p>
        <div className="flex gap-2">
            <BsMoon 
             onClick={themeHandler}
             size={18} 
             className={`${ 
              darkTheme ? "text-[#FFF]" : "text-[#111517]" } 
             cursor-pointer`} 
            />
            <p className={`${ 
          darkTheme ? "text-[#FFF]" : "text-[#111517]" } 
          md:text-base text-xs font-semibold`}>
            Dark Mode
           </p>
        </div>
      </div>
    </div>
  )
}
export default NavBar