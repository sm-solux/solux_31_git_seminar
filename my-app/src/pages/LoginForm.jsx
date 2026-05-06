import { useState } from "react";
import "./LoginForm.css";
import { validatePw } from "../utils/validators";

export default function LoginForm() {
  const [form, setForm] = useState({ id: "", pw: "" });
  const [errors, setErrors] = useState({});
  const [remember, setRemember] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.id.trim())      e.id = "아이디를 입력해주세요.";
    if (!validatePw(form.pw)) e.pw = "비밀번호는 8자 이상이어야 합니다.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    alert(`${form.id}님, 로그인 성공!`);
  };

  return (
    <>
      <h2 className="card-title">로그인</h2>
      <p className="card-sub">계정 정보를 입력해주세요.</p>

      <div className="field-group">
        <div>
          <label className="field-label">아이디</label>
          <input
            className={`field-input ${errors.id ? "error" : ""}`}
            placeholder="아이디 입력"
            value={form.id}
            onChange={set("id")}
          />
          {errors.id && <span className="error-msg">{errors.id}</span>}
        </div>

        <div>
          <label className="field-label">비밀번호</label>
          <input
            className={`field-input ${errors.pw ? "error" : ""}`}
            type="password"
            placeholder="8자 이상"
            value={form.pw}
            onChange={set("pw")}
          />
          {errors.pw && <span className="error-msg">{errors.pw}</span>}
        </div>
      </div>

      <label
        className={`checkbox-label ${remember ? "checked" : ""}`}
        onClick={(e) => {
          e.preventDefault();
          setRemember(!remember);
        }}
      >
        <input type="checkbox" readOnly />
        <span className="checkbox-box"><span className="checkmark">✓</span></span>
        로그인 상태 유지
      </label>

      <button className="submit-btn" onClick={handleSubmit}>로그인</button>
    </>
  );
}