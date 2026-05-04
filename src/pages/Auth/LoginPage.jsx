// src/pages/LoginPage.jsx

import "../../styles/Auth.css";

function LoginPage() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        {/* Brand */}
        <a className="auth-brand" href="#">
          Skill<span>Barter</span>
        </a>

        {/* Heading */}
        <h1 className="auth-title">Welcome back</h1>
        <p className="auth-subtitle">Log in to your SkillBarter account</p>

        {/* ── Form ── */}
        <div>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <a className="forgot-link" href="#">
              Forgot password?
            </a>
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
            />
          </div>

          {/* Remember me */}
          <div className="form-check mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="rememberMe"
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember me for 30 days
            </label>
          </div>

          {/* Submit */}
          <button className="btn-auth">Log In</button>
        </div>

        {/* Divider */}
        <div className="auth-divider">
          <span>or continue with</span>
        </div>

        {/* Google button — UI only */}
        <button
          className="w-100 d-flex align-items-center justify-content-center gap-2"
          style={{
            backgroundColor: "transparent",
            border: "1px solid #2a2a2a",
            borderRadius: "8px",
            padding: "10px",
            color: "#888888",
            fontSize: "0.88rem",
            fontWeight: "500",
            cursor: "pointer",
            transition: "border-color 0.2s",
          }}
        >
          {/* Google SVG icon */}
          <svg width="16" height="16" viewBox="0 0 48 48">
            <path
              fill="#EA4335"
              d="M24 9.5c3.1 0 5.8 1.1 8 2.9l6-6C34.5 3.1 29.6 1 24 1 14.9 1 7.2 6.5 3.8 14.3l7 5.4C12.5 13.4 17.8 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.6 3-2.3 5.5-4.8 7.2l7.4 5.7c4.3-4 6.8-9.9 6.8-16.9z"
            />
            <path
              fill="#FBBC05"
              d="M10.8 28.3A14.6 14.6 0 0 1 9.5 24c0-1.5.3-2.9.7-4.3l-7-5.4A23.9 23.9 0 0 0 0 24c0 3.9.9 7.5 2.5 10.8l8.3-6.5z"
            />
            <path
              fill="#34A853"
              d="M24 47c5.8 0 10.7-1.9 14.3-5.2l-7.4-5.7c-2 1.3-4.4 2.1-6.9 2.1-6.2 0-11.5-4-13.4-9.5l-8.3 6.5C7.2 41.5 14.9 47 24 47z"
            />
          </svg>
          Continue with Google
        </button>

        {/* Switch to signup */}
        <p className="auth-switch">
          Don't have an account? <a href="#">Sign up free</a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
