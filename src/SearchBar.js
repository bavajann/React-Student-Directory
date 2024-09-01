import React from 'react';

function SearchBar() {
    return (
        <input 
            type="text" 
            placeholder="Search..." 
            style={{
                padding: '8px 12px',
                borderRadius: '20px',
                border: '1px solid #ccc',
                width: '60%'
                 }}
        />
    );
}

export default SearchBar;
