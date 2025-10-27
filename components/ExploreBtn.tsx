"use client"

import Image from "next/image"

function ExploreBtn() {
  return (
    <button  id="explore-btn" type="button" className="mt-7 mx-auto">
        <a href="#events">
            Explore Events 
            <Image src="/icons/arrow-down.svg" alt="arrow-dwon" width={24} height={24} />
        </a>
    </button>
  )
}

export default ExploreBtn