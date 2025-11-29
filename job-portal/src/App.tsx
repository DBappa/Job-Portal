import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/tiptap/styles.css";
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import { createTheme, Divider, MantineProvider} from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import FindJobs from "./Pages/FindJobs";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import FindTalentPage from "./Pages/FindTalentPage";
import TalentProfilePage from "./Pages/TalentProfilePage";
import PostJobPage from "./Pages/PostJobPage";
import JobDescPage from "./Pages/JobDescPage";
import ApplyJobPage from "./Pages/ApplyJobPage";
import CompanyPage from "./Pages/CompanyPage";
import PostedJobPage from "./Pages/PostedJobPage";
import JobHistoryPage from "./Pages/JobHistoryPage";
import SignUpPages from "./Pages/SignUpPages";
import ProfilePage from "./Pages/ProfilePage";


function AppContent() {
  const location = useLocation();
  const hideDivider = location.pathname === "/signup" || location.pathname === "/login";

  return (
    <>
      {!hideDivider && <Header />} 
      {!hideDivider && <Divider size="xs" />}
      <Routes>
        <Route path="/find-jobs" element={<FindJobs />} />
        <Route path="/find-talent" element={<FindTalentPage />} />
        <Route path="/jobs" element={<JobDescPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/apply-job" element={<ApplyJobPage />} />
        <Route path="/talent-profile" element={<TalentProfilePage />} />
        <Route path="/post-job" element={<PostJobPage />} />
        <Route path="/posted-jobs" element={<PostedJobPage />} />
        <Route path="/job-history" element={<JobHistoryPage />} />
        <Route path="/signup" element={<SignUpPages />} />
        <Route path="/login" element={<SignUpPages />} />
        <Route path="/profile" element={<ProfilePage />} />

        <Route path="*" element={<HomePage />} />
      </Routes>
      {!hideDivider && <Footer />} 
      
    </>
  );
}

export default function App() {
  const theme = createTheme({
    primaryColor: "bright-sun",
    primaryShade: 4,
    focusRing: "never",
    fontFamily: "Poppins, sans-serif",
    colors: {
      "mine-shaft": [
        "#f6f6f6",
        "#e7e7e7",
        "#d1d1d1",
        "#b0b0b0",
        "#888888",
        "#6d6d6d",
        "#5d5d5d",
        "#4f4f4f",
        "#454545",
        "#3d3d3d",
        "#2d2d2d",
      ],
      "bright-sun": [
        "#fffbeb",
        "#fff3c6",
        "#ffe588",
        "#ffd149",
        "#ffbd20",
        "#f99b07",
        "#dd7302",
        "#b75006",
        "#943c0c",
        "#7a330d",
      ],
    },
  });

  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <Notifications position="top-center" zIndex={1000} />
      <div className="relative">
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </div>
    </MantineProvider>
  );
}
