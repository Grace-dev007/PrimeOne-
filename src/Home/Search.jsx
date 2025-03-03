import React from 'react';
import './search.css'; // Import the CSS file

function SearchForm() {
  return (
    <div className="search-container">
      <div className="search-form">
        <div className="tab-buttons">
          <button className="tab-button">FIND JOB</button>
          <button className="tab-button">FIND TALENT</button>
        </div>
        <input type="text" placeholder="Job Title or Keywords *" className="input-field" />
        <select className="select-field">
          <option value="">Salary</option>
          <option value="10000">₹10,000</option>
          <option value="20000">₹20,000</option>
          {/* Add more salary options here */}
        </select>
        <button className="search-button">SEARCH</button>
      </div>
      <div className="right-section">
        <p className="right-text">THE RIGHT PEOPLE FOR EVERY POSITION</p>
        <button className="upload-button">UPLOAD CV</button>
      </div>
    </div>
  );
}

export default SearchForm;