import React, { useEffect } from "react";
import { AuthContext } from "../../Context/Context";
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import "../MainApp/mainapp.css";
import Header from "../Static/Header/Header";
import Footer from "../Static/Footer/Footer";
import HomePage from "../HomePage/HomePage";
import Login from "../Form_User/Login/Login";
import RegisterForm from "../Form_User/Register/RegisterForm";
import UserCandidate from "../Form_User/User_info/User_cadidate/UserCandidate";
import UserRecruiter from "../Form_User/User_info/User_recruiter/UserRecruiter";
import { UserProvider } from "../../Context/UserContext";
import JobAndLocation from "../JobAndLocation/JobAndLocation";
import ForgotPassword from "../Form_User/ForgotPassword/ForgotPassword";
import UpdatePassword from "../Form_User/UpdatePassword/UpdatePassword";
import UpdateInfoUser from "../Form_User/updateInfoUser/UpdateUserInfo";
import { AllJob } from "../AllJob/AllJob";
import UploadRecruiment from "../UploadRecruiment/UploadRecruiment";
import RJDetails from "../RecruiterJobDetails/RJDetails";
import { JobProvider } from "../../Context/JobContext";
import JobDetail from "../JobDetail/JobDetail";
import { AvailableRecruitment } from "../AvailableRecruitment/AvailableRecruitment";
import CandidateList from "../CandidateList/CandidateList";
import { JobCandidateApplication } from "../JobCandidateApplication/JobCandidateApplication";
import CompanyPages from "../AboutPages/CompanyPages/CompanyPages";
import UpdateRecruiment from "../UpdateRecruitment/UpdateRecruitment";
import CovenantPage from "../AboutPages/CovenantPage/CovenantPage";
import TermPage from "../AboutPages/TermPage/TermPage";
import PrivacyPage from "../AboutPages/PrivacyPage/PrivacyPage";
import ContactPage from "../AboutPages/ContactPage/ContactPage";
import { CompanyPage } from "../CompanyPage/CompanyPage";
import CompanyDetail from "../CompanyDetailPage/CompanyDetail";
import { ListRcmCompany } from "../ListRcmCompany/ListRcmCompany";
import NotFound from "../NotFound/NotFound";

export default function MainApp() {
  return (
    <AuthContext.Provider value={null}>
      <UserProvider>
        <JobProvider>
          <HashRouter>
            <div className="main-app">
              <Header />
              <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/update_info" element={<UpdateInfoUser />}></Route>
                <Route
                  path="/forgot_password"
                  element={<ForgotPassword />}
                ></Route>
                <Route path="/register" element={<RegisterForm />}></Route>
                <Route
                  path="/job&location"
                  element={<JobAndLocation />}
                ></Route>
                <Route path="/allJob" element={<AllJob />}></Route>
                <Route
                  path="/upload_recruiment"
                  element={<UploadRecruiment />}
                ></Route>
                <Route path="RJDetails">
                  <Route path=":id" element={<RJDetails />}></Route>
                </Route>
                <Route path="jobDetail">
                  <Route path=":id" element={<JobDetail />}></Route>
                </Route>
                <Route
                  path="/availablerecruitment"
                  element={<AvailableRecruitment />}
                ></Route>
                <Route path="/update" element={<UpdateRecruiment />}></Route>
                <Route path="/candidateList/:id" element={<CandidateList />} />
                <Route
                  path="/candidateApplication"
                  element={<JobCandidateApplication />}
                />
                <Route path="/company_about" element={<CompanyPages />}></Route>
                <Route
                  path="/update/:id"
                  element={<UpdateRecruiment />}
                ></Route>
                <Route path="/covenantPage" element={<CovenantPage />} />
                <Route path="/termPage" element={<TermPage />} />
                <Route path="/privacyPage" element={<PrivacyPage />} />
                <Route path="/contactPage" element={<ContactPage />} />
                <Route path="/company" element={<CompanyPage />} />
                <Route path="/CompanyDetail/:id" element={<CompanyDetail />} />
                <Route
                  path="/ListRcmCompany/:id"
                  element={<ListRcmCompany />}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>

              <Footer />
            </div>
          </HashRouter>
        </JobProvider>
      </UserProvider>
    </AuthContext.Provider>
  );
}
