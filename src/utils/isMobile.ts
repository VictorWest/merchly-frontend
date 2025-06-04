
// import { useState, useEffect } from 'react';

// function useIsMobile(window: Window & typeof globalThis) {
//   const [isMobile, setIsMobile] = useState<string>();

//   useEffect(() => {
//     const checkIfMobile = () => {
//       switch (window.innerWidth) {
//         case 320:
//             setIsMobile("mobile")
//             break;
//         case 768:
//             setIsMobile("tablet")
//             break
//         default:
//             break;
//       }
      
//     };
    
//     checkIfMobile();
    
//     window.addEventListener('resize', checkIfMobile);
    
//     return () => window.removeEventListener('resize', checkIfMobile);
//   }, []);

//   return isMobile;
// }