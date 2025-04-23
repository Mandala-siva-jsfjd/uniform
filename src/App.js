// import { Route, Routes } from "react-router-dom";
// import "./App.css";
// //import { UserContextProvider } from "./context/UserContext";
// import { ThemeProvider } from "@mui/material";
// import appTheme from "./utils/theme";
// import { SnackbarProvider } from "notistack";
// import {
//   Dashboard,
//   Schedule,
//   FscSupport, 
// } from "./pages";
// import { ProtectedRoute } from "./components";

// function App() {
//   return (
//     <SnackbarProvider
//       maxSnack={5}
//       anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
//       preventDuplicate
//     >
//       <UserContextProvider>
//         <ThemeProvider theme={appTheme}>
//           <Routes>
//             {/* <Route path="/" element={<Login />} /> */}
//             <Route
//               path="/dashboard"
//               element={
//                 <ProtectedRoute>
//                   <Dashboard />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/schedule"
//               element={
//                 <ProtectedRoute>
//                   <Schedule />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/support"
//               element={
//                 <ProtectedRoute>
//                   <FscSupport />
//                 </ProtectedRoute>
//               }
//             />
//             {/* <Route
//               path="/observation"
//               element={
//                 <ProtectedRoute>
//                   <Observation />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/contact-us"
//               element={
//                 <ProtectedRoute>
//                   <ContactUs />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/disclaimer"
//               element={
//                 <ProtectedRoute>
//                   <Disclaimer />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/privacy-policy"
//               element={
//                 <ProtectedRoute>
//                   <PrivacyPolicy />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/faq"
//               element={
//                 <ProtectedRoute>
//                   <FAQ />
//                 </ProtectedRoute>
//               }
//             /> */}
//           </Routes>
//         </ThemeProvider>
//       </UserContextProvider>
//     </SnackbarProvider>
//   );
// }

// export default App;
import React from 'react'
import Login from './Login/login'
const App = () => {
  return (
    <div>

        <Login/>
    </div>
  )
}

export default App