import { useState } from "react";
import "./App.css";
import LoginForm from "./pages/LoginForm";
import SignupForm from "./pages/SignupForm";

export default function App() {
  const [tab, setTab] = useState("login");

  return (
    <div className="scene">
      <div className="card">
        <div className="tab-bar">
          <button
            className={`tab-btn ${tab === "login" ? "active" : ""}`}
            onClick={() => setTab("login")}
          >
            로그인
          </button>
          <button
            className={`tab-btn ${tab === "signup" ? "active" : ""}`}
            onClick={() => setTab("signup")}
          >
            회원가입
          </button>
        </div>

        {tab === "login"
          ? <LoginForm />
          : <SignupForm />}
      </div>
    </div>
  );
}