import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "../component/loader/Loader";

const Homepage = React.lazy(() => import("../pages/homePage"));
const Organization = React.lazy(() => import("../pages/organization"));
const Calendar = React.lazy(() => import("../pages/calender"));
const ContactList = React.lazy(() => import("../pages/contact"));
const ReligiousEventList = React.lazy(() => import("../pages/religiousEvent"));
const Advertise = React.lazy(() => import("../pages/advertise"));
const Deceased = React.lazy(() => import("../pages/desease"));
const UpcommingEvents = React.lazy(() => import("../pages/upcommingevent"));
const About = React.lazy(() => import("../pages/about"));

export default function Navigation() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/organization" element={<Organization />} />
          <Route exact path="/deceased" element={<Deceased />} />
          <Route exact path="/iraniancalendar" element={<Calendar />} />
          <Route exact path="/contact" element={<ContactList />} />
          <Route
            exact
            path="/religiousevent"
            element={<ReligiousEventList />}
          />
          <Route exact path="/advertisers" element={<Advertise />} />
          <Route exact path="/upcomingevent" element={<UpcommingEvents />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
