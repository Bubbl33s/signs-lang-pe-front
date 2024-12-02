import { Header, Navbar } from './components';
import { Home } from './pages';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-green-100 py-3 px-4">
      <div className="mb-4">
        <Header />
      </div>
      <div className="mb-4">
        <Navbar />
      </div>
      <Home />
    </div>
  );
}

export default App;
