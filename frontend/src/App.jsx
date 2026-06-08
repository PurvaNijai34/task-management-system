// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
// import AppRoutes from './routes/AppRoutes'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//   <>
//       <AppRoutes />
//   </>
//   )
// }

// export default App


// src/App.jsx
import AppRoutes from './routes/AppRoutes';
import { ToastContainer } from 'react-toastify';

// Import mandatory toast styles so they look sharp and custom
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      {/* Primary Application Core Engine Routing Wrapper */}
      <AppRoutes />

      {/* Modern Premium Toast Notification Configuration Engine */}
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastClassName={() => 
          "relative flex p-4 min-h-12 rounded-xl justify-between overflow-hidden cursor-pointer bg-[#0b0f19]/90 border border-slate-800/80 backdrop-blur-xl text-slate-200 text-sm font-sans shadow-xl mb-3"
        }
        bodyClassName={() => "flex p-0 text-sm font-medium items-center"}
        progressClassName="!bg-gradient-to-r !from-indigo-500 !via-purple-500 !to-pink-500 !h-[2px]"
      />
    </>
  );
}

export default App;