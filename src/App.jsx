import React, { useEffect, useState } from 'react';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import AuthorPage from './components/AuthorPage';
import WorkPage from './components/WorkPage';

function App() {
  const [route, setRoute] = useState(() => (window.location.hash || '#/'));

  useEffect(() => {
    const handle = () => setRoute(window.location.hash || '#/');
    window.addEventListener('hashchange', handle);
    return () => window.removeEventListener('hashchange', handle);
  }, []);

  const renderRoute = () => {
    if (route.startsWith('#/author')) return <AuthorPage />;
    if (route.startsWith('#/work')) return <WorkPage />;
    return <HomePage />;
  };

  return (
    <Layout>
      {renderRoute()}
    </Layout>
  );
}

export default App;
