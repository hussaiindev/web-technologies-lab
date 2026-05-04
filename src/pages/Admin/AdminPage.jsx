// src/pages/AdminPage.jsx

import '../../styles/AdminPage.css'

function AdminPage() {
  return (
    <div className="admin-page">

      {/* ════════════════════════════
          TOP BAR
      ════════════════════════════ */}
      <div className="admin-topbar">

        {/* Left — brand + role */}
        <div className="d-flex align-items-center">
          <a className="admin-topbar-brand" href="#">
            Skill<span>Barter</span>
          </a>
          <span className="admin-badge">Admin Panel</span>
        </div>

        {/* Right — admin identity */}
        <div className="admin-topbar-right">
          <span className="admin-name">Logged in as Admin</span>
          <div className="admin-avatar">AD</div>
        </div>

      </div>


      {/* ════════════════════════════
          MAIN CONTENT
      ════════════════════════════ */}
      <div className="admin-content">

        {/* Page heading */}
        <h1 className="admin-page-title">Dashboard Overview</h1>
        <p className="admin-page-subtitle">
          Monitor platform activity, manage users, and handle reported content.
        </p>


        {/* ════════════════════════════
            STAT CARDS
        ════════════════════════════ */}
        <div className="row g-4">

          <div className="col-6 col-md-3">
            <div className="stat-card">
              <span className="stat-card-icon">👥</span>
              <p className="stat-card-label">Total Users</p>
              <p className="stat-card-number">840</p>
              <p className="stat-card-sub">+12 this week</p>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="stat-card">
              <span className="stat-card-icon">🔄</span>
              <p className="stat-card-label">Total Exchanges</p>
              <p className="stat-card-number">3,500</p>
              <p className="stat-card-sub">+84 this week</p>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="stat-card">
              <span className="stat-card-icon">📋</span>
              <p className="stat-card-label">Active Listings</p>
              <p className="stat-card-number">1,200</p>
              <p className="stat-card-sub">Across 8 categories</p>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="stat-card">
              <span className="stat-card-icon">🚩</span>
              <p className="stat-card-label">Open Reports</p>
              <p className="stat-card-number">3</p>
              <p className="stat-card-sub">Needs attention</p>
            </div>
          </div>

        </div>


        {/* ════════════════════════════
            USERS TABLE
        ════════════════════════════ */}
        <div className="admin-section">

          <div className="admin-section-header">
            <p className="admin-section-title">Registered Users</p>
            <span className="admin-section-count">5 users total</span>
          </div>

          <div className="admin-table-wrapper">
            <table className="table admin-table">

              <thead>
                <tr>
                  <th>User</th>
                  <th>Skill Offered</th>
                  <th>Skill Wanted</th>
                  <th>Credits</th>
                  <th>Rating</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>

                {/* Sara Khan */}
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="table-avatar">SK</div>
                      <div>
                        <p className="table-name mb-0">Sara Khan</p>
                        <p className="table-email mb-0">sara@example.com</p>
                      </div>
                    </div>
                  </td>
                  <td>Graphic Design</td>
                  <td>Python</td>
                  <td>3</td>
                  <td>★ 4.8</td>
                  <td><span className="status-pill status-active">Active</span></td>
                  <td>
                    <button className="btn-table-action warn">Block</button>
                    <button className="btn-table-action danger">Remove</button>
                  </td>
                </tr>

                {/* Ali Raza */}
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="table-avatar">AR</div>
                      <div>
                        <p className="table-name mb-0">Ali Raza</p>
                        <p className="table-email mb-0">ali@example.com</p>
                      </div>
                    </div>
                  </td>
                  <td>Python</td>
                  <td>Video Editing</td>
                  <td>1</td>
                  <td>★ 4.5</td>
                  <td><span className="status-pill status-active">Active</span></td>
                  <td>
                    <button className="btn-table-action warn">Block</button>
                    <button className="btn-table-action danger">Remove</button>
                  </td>
                </tr>

                {/* Maria Yousuf */}
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="table-avatar">MY</div>
                      <div>
                        <p className="table-name mb-0">Maria Yousuf</p>
                        <p className="table-email mb-0">maria@example.com</p>
                      </div>
                    </div>
                  </td>
                  <td>Video Editing</td>
                  <td>Graphic Design</td>
                  <td>2</td>
                  <td>★ 4.2</td>
                  <td><span className="status-pill status-blocked">Blocked</span></td>
                  <td>
                    <button className="btn-table-action">Unblock</button>
                    <button className="btn-table-action danger">Remove</button>
                  </td>
                </tr>

                {/* Usman Tariq */}
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="table-avatar">UT</div>
                      <div>
                        <p className="table-name mb-0">Usman Tariq</p>
                        <p className="table-email mb-0">usman@example.com</p>
                      </div>
                    </div>
                  </td>
                  <td>English Writing</td>
                  <td>Web Dev</td>
                  <td>0</td>
                  <td>★ 4.6</td>
                  <td><span className="status-pill status-active">Active</span></td>
                  <td>
                    <button className="btn-table-action warn">Block</button>
                    <button className="btn-table-action danger">Remove</button>
                  </td>
                </tr>

                {/* Hina Malik */}
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="table-avatar">HM</div>
                      <div>
                        <p className="table-name mb-0">Hina Malik</p>
                        <p className="table-email mb-0">hina@example.com</p>
                      </div>
                    </div>
                  </td>
                  <td>Web Dev</td>
                  <td>English Writing</td>
                  <td>5</td>
                  <td>★ 4.9</td>
                  <td><span className="status-pill status-active">Active</span></td>
                  <td>
                    <button className="btn-table-action warn">Block</button>
                    <button className="btn-table-action danger">Remove</button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

        </div>


        {/* ════════════════════════════
            ACTIVE LISTINGS TABLE
        ════════════════════════════ */}
        <div className="admin-section">

          <div className="admin-section-header">
            <p className="admin-section-title">Active Skill Listings</p>
            <span className="admin-section-count">3 listings shown</span>
          </div>

          <div className="admin-table-wrapper">
            <table className="table admin-table">

              <thead>
                <tr>
                  <th>Listing</th>
                  <th>Posted By</th>
                  <th>Category</th>
                  <th>Level</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td className="table-name">Graphic Design Fundamentals</td>
                  <td>Sara Khan</td>
                  <td>Design</td>
                  <td>Beginner</td>
                  <td><span className="status-pill status-active">Active</span></td>
                  <td>
                    <button className="btn-table-action">Review</button>
                    <button className="btn-table-action danger">Remove</button>
                  </td>
                </tr>

                <tr>
                  <td className="table-name">Python for Beginners</td>
                  <td>Ali Raza</td>
                  <td>Technology</td>
                  <td>Beginner</td>
                  <td><span className="status-pill status-active">Active</span></td>
                  <td>
                    <button className="btn-table-action">Review</button>
                    <button className="btn-table-action danger">Remove</button>
                  </td>
                </tr>

                <tr>
                  <td className="table-name">Full Stack Web Development</td>
                  <td>Hina Malik</td>
                  <td>Technology</td>
                  <td>Intermediate</td>
                  <td><span className="status-pill status-active">Active</span></td>
                  <td>
                    <button className="btn-table-action">Review</button>
                    <button className="btn-table-action danger">Remove</button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

        </div>


        {/* ════════════════════════════
            REPORTED CONTENT TABLE
        ════════════════════════════ */}
        <div className="admin-section" style={{marginBottom: '60px'}}>

          <div className="admin-section-header">
            <p className="admin-section-title">Reported Content</p>
            <span className="admin-section-count">3 open reports</span>
          </div>

          <div className="admin-table-wrapper">
            <table className="table admin-table">

              <thead>
                <tr>
                  <th>Reported User</th>
                  <th>Reported By</th>
                  <th>Reason</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="table-avatar">MY</div>
                      <span className="table-name">Maria Yousuf</span>
                    </div>
                  </td>
                  <td>Ali Raza</td>
                  <td>Did not show up to session</td>
                  <td>2 May 2025</td>
                  <td><span className="status-pill status-pending">Pending</span></td>
                  <td>
                    <button className="btn-table-action warn">Warn User</button>
                    <button className="btn-table-action">Resolve</button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="table-avatar">UT</div>
                      <span className="table-name">Usman Tariq</span>
                    </div>
                  </td>
                  <td>Hina Malik</td>
                  <td>Misleading skill description</td>
                  <td>30 Apr 2025</td>
                  <td><span className="status-pill status-pending">Pending</span></td>
                  <td>
                    <button className="btn-table-action warn">Warn User</button>
                    <button className="btn-table-action">Resolve</button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="table-avatar">AR</div>
                      <span className="table-name">Ali Raza</span>
                    </div>
                  </td>
                  <td>Sara Khan</td>
                  <td>Inappropriate message sent</td>
                  <td>28 Apr 2025</td>
                  <td><span className="status-pill status-resolved">Resolved</span></td>
                  <td>
                    <button className="btn-table-action">View</button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

        </div>

      </div>
    </div>
  )
}

export default AdminPage