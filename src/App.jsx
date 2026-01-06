import { ToastContainer } from 'react-toastify';
import './App.css'
import Input from './components/Input'
import OutPut from './components/OutPut'
import { useSumeriser } from './hooks/useSummriser';

function App() {
  const { url, setUrl, summary, loading, error, summaryData,setSummary,setError } = useSumeriser();
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <ToastContainer/>

      <header className="sticky top-0 z-10 border-b border-white/10 bg-black/40 backdrop-blur">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold tracking-wide">
            ✨ INT AI Assistant
          </h1>
          <span className="text-sm text-gray-300 animate-bounce">
            Powered by AI
          </span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10 space-y-8">
        <section>
          <Input url={url} setUrl={setUrl} onSubmit={summaryData}  hasSummary={setSummary} setError={setError} />
        </section>
        <section>
          <OutPut summary={summary} isLoading={loading} isError={error} />
        </section>
      </main>

      <footer className="text-center text-gray-500 text-sm py-6">
        Built with ❤️ by Supriya Chatterjee
      </footer>
    </div>
  );
}

export default App
