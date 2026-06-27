import { useState } from 'react';
import './SearchBar.css';

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
      setInput(''); // clear input after search
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Enter city name (e.g., Tokyo, New York)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="search-btn">🔍 Search</button>
    </form>
  );
}
