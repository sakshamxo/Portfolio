import "../globals.css"
import { useEffect, useState } from "react";


const Customcursor = () => {

    const [postion, setPostion] = useState({x:0,y:0});
    const [style, setStyle] = useState({transform:"translate(0px,0px)"})

    useEffect(() => {
      const handleMouseMove = (event)=>{
        const {clientX, clientY} = event;
        setPostion({x:clientX, y:clientY});
      } ;
      window.addEventListener('mousemove', handleMouseMove)
    
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, [])
    useEffect(() =>{
const timeoutID = setTimeout(() =>{
    setStyle({transform: `translate(${postion.x}px, ${postion.y}px)`});
}) 
return () => clearTimeout(timeoutID)
    },[postion])

  return (
    <div className="custom-cursor fixed top-0 left-0 w-4 h-4 invisible lg:visible  rounded-full bg-black pointer-events-none z-50 transition-transform duration-600 ease-in-out"
    style={style}/>
  )
}

export default Customcursor