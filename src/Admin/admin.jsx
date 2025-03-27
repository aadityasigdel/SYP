import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminNav from "./AdminNav";
import ChallengesAD from "./ChallangesAd";
import ManageUser from "./manageUser";
import SubmissionsReview from "./SubmissionsReview";

const Admin = () => {
  return (
    <>
      <div className="flex w-full h-screen">
        <AdminNav />

        
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/challanges" element={<ChallengesAD />} />
            <Route path="/manageuser" element={<ManageUser />} />
            <Route path="/submissions" element={<SubmissionsReview />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Admin;
