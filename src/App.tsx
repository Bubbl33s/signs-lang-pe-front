import { Routes, Route } from 'react-router';
import { Header, Navbar, Footer } from './components';
import {
  Home,
  Contribute,
  Upload,
  Moderate,
  ModeratePick,
  ModerateLabel,
  Login,
  Profile,
  Signup,
  SearchSigns,
  SignDetail,
  ProtectedRoute,
  NotFound,
} from './pages';
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
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-green-100 flex flex-col">
      <div>
        <Header />
      </div>
      <div className="mb-2 px-4">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<SearchSigns />} />
          <Route path="search/:id" element={<SignDetail />} />
        </Route>
        <Route
          path="/contribute"
          element={
            <ProtectedRoute>
              <Contribute />
            </ProtectedRoute>
          }
        >
          <Route path="upload" element={<Upload />} />
          <Route path="moderate" element={<Moderate />}>
            <Route path="pick" element={<ModeratePick />} />
            <Route path="label/:id" element={<ModerateLabel />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <div className="mt-2">
        <Footer />
      </div>
    </div>
  );
}

export default App;
