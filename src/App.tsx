import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { Header, Navbar } from './components';
import { Home, Upload, Login, Profile, Signup } from './pages';
import useSigns from './hooks/useSigns';
import { useEffect } from 'react';
import { LabelService } from './services/labelService';
import { CategoryService } from './services/categoryService';

function App() {
  const { dispatch } = useSigns();

  useEffect(() => {
    (async () => {
      const labels = await LabelService.getSigns();
      dispatch({ type: 'set-signs-list', payload: labels });

      const categories = await CategoryService.getCategories();

      dispatch({ type: 'set-categories', payload: categories });
    })();
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-green-100 py-3 px-4 flex flex-col">
      <Router>
        <div className="mb-4">
          <Header />
        </div>
        <div className="mb-5">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
