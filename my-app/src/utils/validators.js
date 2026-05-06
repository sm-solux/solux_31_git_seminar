export const validateEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
export const validatePw    = (v) => v.length >= 8;
