import React, { useState } from 'react';

const UpdateBlog = () => {
  // Define state variables for each form field
  const [email, setEmail] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [multiSelect, setMultiSelect] = useState([]);
  const [text, setText] = useState('');

  // Handle changes to each input field
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleSelectChange = (e) => setSelectedOption(e.target.value);
  const handleMultiSelectChange = (e) => setMultiSelect([...e.target.selectedOptions].map(option => option.value));
  const handleTextareaChange = (e) => setText(e.target.value);

  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="emailInput">Email address</label>
          <input 
            type="email" 
            className="form-control" 
            id="emailInput" 
            placeholder="name@example.com" 
            value={email} 
            onChange={handleEmailChange} 
          />
        </div>

        <div className="form-group">
          <label htmlFor="selectInput">Example select</label>
          <select 
            className="form-control" 
            id="selectInput" 
            value={selectedOption} 
            onChange={handleSelectChange}
          >
            <option value="">Choose an option</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="multiSelect">Example multiple select</label>
          <select 
            multiple 
            className="form-control" 
            id="multiSelect" 
            value={multiSelect} 
            onChange={handleMultiSelectChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="textarea">Example textarea</label>
          <textarea 
            className="form-control" 
            id="textarea" 
            rows="3" 
            value={text} 
            onChange={handleTextareaChange}
          />
        </div>
      </form>
    </>
  );
}

export default UpdateBlog;
