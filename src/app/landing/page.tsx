// app/page.tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-white">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">AVS Careers</div>
          <div className="space-x-4">
            <button className="px-4 py-2 text-blue-600">Login</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Welcome to <span className="text-blue-600">AVS Careers</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Your next career opportunity awaits. Connect with top employers and
          find your perfect match.
        </p>
        <div className="space-x-4">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg text-lg">
            Browse Jobs
          </button>
          <button className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg text-lg">
            Learn More
          </button>
        </div>
      </main>

      <footer className="text-center py-8 text-gray-500">
        <p>© 2024 AVS Careers. All rights reserved.</p>
      </footer>
    </div>
  );
}
