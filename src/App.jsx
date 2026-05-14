import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24 px-4">
        {/* Page content here */}
        <h1 className="text-4xl font-bold">Welcome to Servex</h1>
      </main>
    </div>
  );
}