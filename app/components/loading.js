// import { useEffect, useState } from 'react'

// const loading = ({duration = 2000, onComplete}) => {

//     const [isVisible, setIsvisible] = useState(true);
//     const [isFading, setIsFading] = useState(false);

//     useEffect(() => {
//       const timer = setTimeout(() =>{
//         setIsFading(true);
//         setTimeout(() => {
//             setIsvisible(false);
//             onComplete()
//         },500)
//       },duration)
//       return ()=>{
//         clearTimeout(timer)
//       }
//     }, [duration,onComplete])
//     if(!isVisible) return null

//   return (
//     <div className={`fixed inset-0 flex items-center justify-center z-50 text-white text-4xl font-semibold transition-opacity duration-500 ${
//         isFading ? "opacity-0" : "opacity-100"
//       }`} >
//         <h1 className='loadingheading' > Hii, I am Saksham Soni </h1>
//     </div>
//   )
// }

// export default loading

import { useEffect, useState } from "react";

const Loading = ({ duration = 2000, onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showInitialText, setShowInitialText] = useState(false);
  const [showFullText, setShowFullText] = useState(false);

  useEffect(() => {
    // Show "Hii" with a fade-in
    const initialTimer = setTimeout(() => {
      setShowInitialText(true);
    }, 100); // Slight delay for smoother animation

    // Show "I am Saksham Soni" with a delay
    const textTimer = setTimeout(() => {
      setShowFullText(true);
    }, 1000); // Delay before the full text fades in

    // Fade out the whole component
    const fadeOutTimer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, duration);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(textTimer);
      clearTimeout(fadeOutTimer);
    };
  }, [duration, onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 text-white text-4xl font-semibold transition-opacity duration-500 ${
        !isVisible ? "opacity-0" : "opacity-100"
      }`}
    >
      <h1 className="loadingheading">
        <span
          className={`transition-opacity duration-700 ease-in-out font-light text-[#f4e7d4] ${
            showInitialText ? "opacity-100" : "opacity-0"
          }`}
        >
          Hii,
        </span>{" "}
        <span
          className={`transition-opacity duration-700 ease-in-out font-light text-[#f4e7d4] ${
            showFullText ? "opacity-100" : "opacity-0"
          }`}
        >
          I am Saksham Soni
        </span>
      </h1>
    </div>
  );
};

export default Loading;
