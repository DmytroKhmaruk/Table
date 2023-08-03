import React, { useState, useEffect } from 'react';
import Table from 'components/Table/LargeTable';
import SmallTable from 'components/Table/SmallTable';

function App() {
  const adaptiveSize = 767;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth >= adaptiveSize ? <Table /> : <SmallTable />}
    </>
  );
}

export default App;