import React from "react";
import DoctorCard from "../../Component/doctorcard/DoctorCard";
import profile1 from "../../../assets/profile-1.png";
import profile2 from "../../../assets/profile-2.png";
import profile3 from "../../../assets/profile-3.png";
import profile4 from "../../../assets/profile-4.png";
import "./Doctor.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span  className="meet_doctor">Meet Our Doctors</span>
        </h3>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Dr. Kathryn Murphy"
          title="Cardiologists"
         
        />
        <DoctorCard
          img={profile2}
          name="Dr. Jacob Jones"
          title="Orthopedics"
          
        />
        <DoctorCard
          img={profile3}
          name="Dr. Jenny Wilson"
          title="Diabetologists"
       
        />
        <DoctorCard
          img={profile4}
          name="Dr. Albert Flores"
          title="Nephrologists"
         
        />
      </div>
    </div>
  );
}

export default Doctors;
