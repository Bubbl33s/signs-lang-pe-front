import { Header, Navbar, SearchContainer } from './components';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-green-100 py-3 px-4">
      <div className="mb-4">
        <Header />
      </div>
      <div className="mb-4">
        <Navbar />
      </div>
      <SearchContainer />
    </div>
  );
}

export default App;
