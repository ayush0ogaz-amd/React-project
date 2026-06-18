import React from 'react';

export default function ProfileCard({ name, role, bio, avatar, posts, followers, following }) {
  return (
    <div className="card shadow-sm border-0 rounded-4 mx-auto" style={{ maxWidth: "360px" }}>
  
      <div className="bg-primary rounded-top-4" style={{ height: "90px" }}></div>
      
      <div className="card-body text-center pt-0">
       
        <div className="position-relative" style={{ marginTop: "-55px" }}>
          <img 
            src={avatar || "https://placeholder.com"} 
            alt={name} 
            className="rounded-circle border border-4 border-white shadow-sm object-fit-cover"
            style={{ width: "110px", height: "110px" }}
          />
        </div>

        {/* User Identity Details */}
        <h4 className="card-title fw-bold mt-3 mb-1">{name}</h4>
        <p className="text-primary fw-semibold small text-uppercase mb-3">{role}</p>
        <p className="card-text text-muted small px-2 mb-4">{bio}</p>

        {/* Triple Stat Row */}
        <div className="row g-0 bg-light rounded-3 py-2 mb-4 border-start border-end">
          <div className="col-4 border-end">
            <div className="fw-bold text-dark">{posts || 0}</div>
            <div className="text-muted small" style={{ fontSize: "0.75rem" }}>POSTS</div>
          </div>
          <div className="col-4 border-end">
            <div className="fw-bold text-dark">{followers || 0}</div>
            <div className="text-muted small" style={{ fontSize: "0.75rem" }}>FOLLOWERS</div>
          </div>
          <div className="col-4">
            <div className="fw-bold text-dark">{following || 0}</div>
            <div className="text-muted small" style={{ fontSize: "0.75rem" }}>FOLLOWING</div>
          </div>
        </div>

        {/* Functional Layout Actions */}
        <div className="d-flex gap-2 justify-content-center">
          <button className="btn btn-primary btn-sm px-4 rounded-pill fw-semibold shadow-sm">
            Follow
          </button>
          <button className="btn btn-outline-secondary btn-sm px-4 rounded-pill fw-semibold">
            Message
          </button>
        </div>
      </div>
    </div>
  );
}
