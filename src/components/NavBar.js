import React from "react"
import { BsMoon } from "react-icons/bs"

const NavBar = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-[#111517] md:text-2xl text-sm font-extrabold">Where in the world?</p>
        <div className="flex gap-2">
            <BsMoon size={18} className="text-[#111517]"/>
            <p className="text-[#111517] md:text-base text-xs font-semibold">Dark Mode</p>
        </div>
      </div>
    </div>
  )
}

export default NavBar