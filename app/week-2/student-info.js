import React from 'react';
import Link from 'next/link';

const StudentInfo = () => {
  return (
    <div>
      <h1>Anmol Sandhu</h1>
      <p>
        Check out my GitHub repository: 
        <Link href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
          GitHub
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;
