import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import Weather from "./components/Weather";
import Background from "./components/BackGound";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlQ9m2kBhVJ8bGHmluT-TGfGt6MNqRCz8",
  authDomain: "weather-app-3964c.firebaseapp.com",
  projectId: "weather-app-3964c",
  storageBucket: "weather-app-3964c.appspot.com",
  messagingSenderId: "766016932778",
  appId: "1:766016932778:web:906be06fefcaabb61ab9d3",
  measurementId: "G-CZE500S90V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App ">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <Weather></Weather>
      <Background></Background>
    </div>
  );
}

export default App;
