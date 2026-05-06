import { useState } from "react";
import "./SignupForm.css";
import { validateEmail, validatePw } from "../utils/validators";

export default function SignupForm() {
  const [form, setForm] = useState({
    id: "", email: "", pw: "", pwc: "",
    gender: "", region: "", agree: false,
  });
  const [errors, setErrors] = useState({});

  const set = (k) => (e) => {
  const value = e.target.value;
  setForm((f) => {
    const updated = { ...f, [k]: value };
    const e2 = {};
    if (!validateEmail(updated.email)) e2.email  = "올바른 이메일 형식이 아닙니다.";
    if (!validatePw(updated.pw))       e2.pw     = "비밀번호는 8자 이상이어야 합니다.";
    if (updated.pw !== updated.pwc)    e2.pwc    = "비밀번호가 일치하지 않습니다.";
    if (!updated.agree)                e2.agree  = "약관에 동의해주세요.";
    setErrors(e2);
    return updated;
  });
};

  const validate = () => {
    const e = {};
    if (!validateEmail(form.email)) e.email  = "올바른 이메일 형식이 아닙니다.";
    if (!validatePw(form.pw))       e.pw     = "비밀번호는 8자 이상이어야 합니다.";
    if (form.pw !== form.pwc)       e.pwc    = "비밀번호가 일치하지 않습니다.";
    if (!form.agree)                e.agree  = "약관에 동의해주세요.";
    setErrors(e);
  };

  const genders = [
    { val: "male",   label: "남성" },
    { val: "female", label: "여성" },
    { val: "other",  label: "기타" },
  ];

  const regions = [
    "서울", "부산", "인천", "대구", "대전",
    "광주", "울산", "세종", "경기", "기타",
  ];

  return (
    <>
      <h2 className="card-title">회원가입</h2>
      <p className="card-sub">정보를 입력하고 계정을 만들어보세요.</p>

      <div className="field-group">
        <div>
          <label className="field-label">아이디</label>
          <input className={`field-input ${errors.id ? "error" : ""}`}
            placeholder="사용할 아이디" value={form.id} onChange={set("id")} />
          {errors.id && <span className="error-msg">{errors.id}</span>}
        </div>

        <div>
          <label className="field-label">이메일</label>
          <input className={`field-input ${errors.email ? "error" : ""}`}
            type="email" placeholder="example@email.com"
            value={form.email} onChange={set("email")} />
          {errors.email && <span className="error-msg">{errors.email}</span>}
        </div>

        <div>
          <label className="field-label">비밀번호</label>
          <input className={`field-input ${errors.pw ? "error" : ""}`}
            type="password" placeholder="8자 이상 입력"
            value={form.pw} onChange={set("pw")} />
          {errors.pw && <span className="error-msg">{errors.pw}</span>}
        </div>

        <div>
          <label className="field-label">비밀번호 확인</label>
          <input className={`field-input ${errors.pwc ? "error" : ""}`}
            type="password" placeholder="비밀번호 재입력"
            value={form.pwc} onChange={set("pwc")} />
          {errors.pwc && <span className="error-msg">{errors.pwc}</span>}
        </div>

        <div>
          <label className="field-label">성별</label>
          <div className="radio-group">
            {genders.map((g) => (
              <label
                key={g.val}
                className={`radio-label ${form.gender === g.val ? "selected" : ""}`}
                onClick={() => setForm((f) => ({ ...f, gender: g.val }))}
              >
                <input type="radio" name="gender" value={g.val} readOnly />
                <span className="radio-dot" />
                {g.label}
              </label>
            ))}
          </div>
          {errors.gender && <span className="error-msg">{errors.gender}</span>}
        </div>

        <div>
          <label className="field-label">지역</label>
          <select className="field-select" value={form.region} onChange={set("region")}>
            <option value="" disabled>지역 선택</option>
            {regions.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
          {errors.region && <span className="error-msg">{errors.region}</span>}
        </div>
      </div>

      <hr className="divider" />

      <label
        className={`checkbox-label ${form.agree ? "checked" : ""}`}
        onClick={(e) => {
          e.preventDefault();
          setForm((f) => ({ ...f, agree: !f.agree }));
        }}
      >
        <input type="checkbox" readOnly />
        <span className="checkbox-box"><span className="checkmark">✓</span></span>
        이용약관 및 개인정보 처리방침에 동의합니다.
      </label>
      {errors.agree && <span className="error-msg" style={{ marginTop: 6 }}>{errors.agree}</span>}

      <button className="submit-btn" onClick={validate}>회원가입</button>
    </>
  );
}
