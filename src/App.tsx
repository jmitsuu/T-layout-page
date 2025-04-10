import { BrowserRouter } from 'react-router';
import Router from './router/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main >
        <Router />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
