import { DefaultPage } from '@/layouts/defaultPage';
import { ErrorPage } from '@/layouts/errorPage';
import About from '@/pages/about/about';
import Contact from '@/pages/contact/contact';
import Home from '@/pages/home-landing-page/home';
import { Route, Routes } from 'react-router';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultPage />} errorElement={<ErrorPage />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
