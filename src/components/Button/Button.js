import React from 'react';

import './styles.css';

const Button = ({ children, loading, ...click }) => (
    <button className="button" disabled={loading} {...click}>
        {loading ? 'Loading...' : children}
    </button>
);

export default Button;
