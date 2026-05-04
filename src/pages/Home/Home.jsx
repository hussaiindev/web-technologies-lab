// src/pages/Home.jsx

import "./Home.css";

function Home() {
  return (
    <div className="page-dark">
      {/* ════════════════════════════
          HERO
      ════════════════════════════ */}
      <section className="hero-section">
        <div className="container">
          <p className="hero-badge">Free Skill Exchange Platform</p>

          <h1 className="hero-title">
            Trade Skills.
            <br />
            <span>Grow Together.</span>
          </h1>

          <p className="hero-subtitle">
            Teach what you know. Learn what you need. No money — just skills
            exchanged between real people.
          </p>

          <div className="d-flex gap-3 mt-4 flex-wrap">
            <button className="btn-primary-custom">Start Bartering</button>
            <button className="btn-outline-custom">Browse Skills</button>
          </div>

          {/* Stats */}
          <div className="hero-stats row g-4">
            <div className="col-auto">
              <p className="stat-number">1,200+</p>
              <p className="stat-label">Skills Listed</p>
            </div>
            <div className="col-auto ms-5">
              <p className="stat-number">840</p>
              <p className="stat-label">Active Members</p>
            </div>
            <div className="col-auto ms-5">
              <p className="stat-number">3,500+</p>
              <p className="stat-label">Exchanges Done</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          HOW IT WORKS
      ════════════════════════════ */}
      <section className="section-dark">
        <div className="container">
          <div className="mb-5">
            <p className="section-label">How It Works</p>
            <h2 className="section-title">Three steps to start learning</h2>
            <p className="section-subtitle">
              No payments. No complexity. Just skills.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="step-card">
                <p className="step-number">Step 01</p>
                <h5>List Your Skill</h5>
                <p>
                  Post what you can teach — design, coding, writing, music,
                  anything. Set your availability and skill level.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="step-card">
                <p className="step-number">Step 02</p>
                <h5>Find a Match</h5>
                <p>
                  Browse the community. Find someone who offers what you want.
                  Send an exchange request in one click.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="step-card">
                <p className="step-number">Step 03</p>
                <h5>Exchange &amp; Earn</h5>
                <p>
                  Teach your session, learn theirs. Earn SkillCredits you can
                  spend to learn from anyone on the platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════
           SKILL CATEGORIES
        ════════════════════════════ */}
      <section className="section-dark">
        <div className="container">
          <div className="mb-5">
            <p className="section-label">Explore</p>
            <h2 className="section-title">Browse by Category</h2>
            <p className="section-subtitle">
              Find skills across every area of life and work.
            </p>
          </div>

          <div className="row g-3">
            <div className="col-6 col-md-3">
              <div className="category-pill">
                <span className="cat-icon">💻</span>
                Technology
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="category-pill">
                <span className="cat-icon">🎨</span>
                Design
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="category-pill">
                <span className="cat-icon">🌍</span>
                Language
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="category-pill">
                <span className="cat-icon">🎵</span>
                Music
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="category-pill">
                <span className="cat-icon">📈</span>
                Business
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="category-pill">
                <span className="cat-icon">🍳</span>
                Cooking
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="category-pill">
                <span className="cat-icon">📷</span>
                Photography
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="category-pill">
                <span className="cat-icon">📣</span>
                Marketing
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ════════════════════════════
          FEATURED MEMBERS
      ════════════════════════════ */}
      <section className="section-dark">
        <div className="container">
          <div className="mb-5">
            <p className="section-label">Community</p>
            <h2 className="section-title">Featured Members</h2>
            <p className="section-subtitle">
              Real people ready to teach and learn.
            </p>
          </div>

          <div className="row g-4">
            {/* Card 1 — Sara Khan */}
            <div className="col-md-4">
              <div className="skill-card">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="avatar-circle">SK</div>
                  <div>
                    <p className="user-name">Sara Khan</p>
                    <p className="user-status">● Ready to Teach</p>
                  </div>
                </div>
                <div className="mb-3">
                  <p className="skill-label">Offering</p>
                  <p className="skill-value">Graphic Design</p>
                </div>
                <div className="mb-4">
                  <p className="skill-label">Looking For</p>
                  <p className="skill-value">Python</p>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <span className="rating-text">★ 4.8</span>
                  <span className="credits-badge">3 Credits</span>
                </div>
              </div>
            </div>

            {/* Card 2 — Ali Raza */}
            <div className="col-md-4">
              <div className="skill-card">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="avatar-circle">AR</div>
                  <div>
                    <p className="user-name">Ali Raza</p>
                    <p className="user-status" style={{ color: "#888888" }}>
                      ● Open to Learn
                    </p>
                  </div>
                </div>
                <div className="mb-3">
                  <p className="skill-label">Offering</p>
                  <p className="skill-value">Python</p>
                </div>
                <div className="mb-4">
                  <p className="skill-label">Looking For</p>
                  <p className="skill-value">Video Editing</p>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <span className="rating-text">★ 4.5</span>
                  <span className="credits-badge">1 Credit</span>
                </div>
              </div>
            </div>

            {/* Card 3 — Hina Malik */}
            <div className="col-md-4">
              <div className="skill-card">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="avatar-circle">HM</div>
                  <div>
                    <p className="user-name">Hina Malik</p>
                    <p className="user-status">● Ready to Teach</p>
                  </div>
                </div>
                <div className="mb-3">
                  <p className="skill-label">Offering</p>
                  <p className="skill-value">Web Dev</p>
                </div>
                <div className="mb-4">
                  <p className="skill-label">Looking For</p>
                  <p className="skill-value">English Writing</p>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <span className="rating-text">★ 4.9</span>
                  <span className="credits-badge">5 Credits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          BARTER BOARD PREVIEW
      ════════════════════════════ */}
      <section className="section-dark">
        <div className="container">
          <div className="mb-5">
            <p className="section-label">Barter Board</p>
            <h2 className="section-title">Live Exchange Posts</h2>
            <p className="section-subtitle">
              Browse what the community is offering right now.
            </p>
          </div>

          <div className="d-flex flex-column gap-3">
            {/* Post 1 */}
            <div className="barter-card">
              <div className="avatar-circle">SK</div>
              <span className="barter-user">Sara Khan</span>
              <span className="barter-pill pill-offers">
                Offers: Graphic Design
              </span>
              <span className="barter-arrow">→</span>
              <span className="barter-pill pill-wants">
                Wants: Python Basics
              </span>
              <span className="barter-credits">2 Credits</span>
              <button className="btn-respond">Respond</button>
            </div>

            {/* Post 2 */}
            <div className="barter-card">
              <div className="avatar-circle">AR</div>
              <span className="barter-user">Ali Raza</span>
              <span className="barter-pill pill-offers">Offers: Python</span>
              <span className="barter-arrow">→</span>
              <span className="barter-pill pill-wants">Wants: Logo Design</span>
              <span className="barter-credits">1 Credit</span>
              <button className="btn-respond">Respond</button>
            </div>

            {/* Post 3 */}
            <div className="barter-card">
              <div className="avatar-circle">HM</div>
              <span className="barter-user">Hina Malik</span>
              <span className="barter-pill pill-offers">Offers: Web Dev</span>
              <span className="barter-arrow">→</span>
              <span className="barter-pill pill-wants">
                Wants: English Writing
              </span>
              <span className="barter-credits">3 Credits</span>
              <button className="btn-respond">Respond</button>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════
             TESTIMONIALS
        ════════════════════════════ */}
      <section className="section-dark">
        <div className="container">
          <div className="mb-5">
            <p className="section-label">Testimonials</p>
            <h2 className="section-title">What members say</h2>
            <p className="section-subtitle">
              From people who've already made exchanges.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="testimonial-card">
                <p className="testimonial-quote">
                  I taught Sara graphic design basics and she walked me through
                  Python fundamentals. Best learning experience I've had — zero
                  cost, real value.
                </p>
                <p className="testimonial-author">Ali Raza</p>
                <p className="testimonial-role">
                  Python Instructor · SkillBarter Member
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="testimonial-card">
                <p className="testimonial-quote">
                  I had no budget for courses. SkillBarter let me trade my video
                  editing skills for graphic design lessons. Genuinely changed
                  how I grow.
                </p>
                <p className="testimonial-author">Maria Yousuf</p>
                <p className="testimonial-role">
                  Video Editor · SkillBarter Member
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="testimonial-card">
                <p className="testimonial-quote">
                  As a web developer I always wanted to improve my writing.
                  Found Usman on the Barter Board and we've done three sessions
                  already.
                </p>
                <p className="testimonial-author">Hina Malik</p>
                <p className="testimonial-role">
                  Web Developer · SkillBarter Member
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ════════════════════════════
           CTA BANNER
       ════════════════════════════ */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-divider"></div>
          <h2>
            Ready to <span>start bartering?</span>
          </h2>
          <p>
            Join hundreds of people already exchanging skills every week. It's
            free, it's simple, and it works.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <button className="btn-primary-custom">Create Free Account</button>
            <button className="btn-outline-custom">See All Skills</button>
          </div>
        </div>
      </section>
      {/* ════════════════════════════
          FOOTER
      ════════════════════════════ */}
      <footer className="footer-dark">
        <div className="container">
          <div className="row g-4">
            {/* Brand col */}
            <div className="col-md-4">
              <p className="footer-brand">
                Skill<span>Barter</span>
              </p>
              <p className="footer-tagline">
                Exchange skills. Grow without limits.
              </p>
            </div>

            {/* Links col 1 */}
            <div className="col-md-2 offset-md-2">
              <p className="footer-heading">Platform</p>
              <a className="footer-link" href="#">
                Browse Skills
              </a>
              <a className="footer-link" href="#">
                Barter Board
              </a>
              <a className="footer-link" href="#">
                How It Works
              </a>
            </div>

            {/* Links col 2 */}
            <div className="col-md-2">
              <p className="footer-heading">Account</p>
              <a className="footer-link" href="#">
                Sign Up
              </a>
              <a className="footer-link" href="#">
                Log In
              </a>
              <a className="footer-link" href="#">
                Dashboard
              </a>
            </div>

            {/* Links col 3 */}
            <div className="col-md-2">
              <p className="footer-heading">Company</p>
              <a className="footer-link" href="#">
                About
              </a>
              <a className="footer-link" href="#">
                Contact
              </a>
              <a className="footer-link" href="#">
                Privacy
              </a>
            </div>
          </div>

          <div className="footer-bottom d-flex justify-content-between flex-wrap gap-2">
            <span>© 2025 SkillBarter. All rights reserved.</span>
            <span>Built for learners, by learners.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
