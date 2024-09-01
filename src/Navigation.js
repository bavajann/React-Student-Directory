import React from 'react';

function Navigation() {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <button style={{ margin: '0 10px' }}>Dashboard</button>
            <button style={{ margin: '0 10px' }}>Settings</button>
        </div>
    );
}

export default Navigation;
