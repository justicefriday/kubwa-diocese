import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import PlaceholderPage from './pages/PlaceholderPage'
import Give from './pages/Give'
import Bishop from './pages/Bishop'
import History from './pages/History'
import MottoAnthem from './pages/MottoAnthem'
import VisionMission from './pages/VisionMission'
import Contact from './pages/Contact'
import Parishes from './pages/Parishes'
import NewsEvents from './pages/Events'
import Ministries from './pages/Ministries'


const page = (title) => <PlaceholderPage title={title} />

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about/history" element={<History />} />
        <Route path="about/motto-anthem" element={<MottoAnthem />} />
        <Route path="about/vision-mission" element={<VisionMission />} />
        <Route path="bishop" element={<Bishop />} />
        <Route path="ministries" element={<Ministries />} />
        <Route path="parishes" element={<Parishes />} />
        <Route path="news-events" element={<NewsEvents />} />
        <Route path="give" element={<Give />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={page('Page not found')} />
      </Route>
    </Routes>
  )
}