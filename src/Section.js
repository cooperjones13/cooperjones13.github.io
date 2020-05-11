import React from 'react';

function Section({props, children}) {
  return (
    <div className="section">
        {children}
    </div>
  );
}

export default Section;
