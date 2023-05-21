import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import '../src/asset/global.css'
import { AuthProvider } from './context/AuthContext';


function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
