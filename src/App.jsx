// import React from "react";
import Pricecard from "./components/Pricecard";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css"; // Import the CSS file
import { FaGithub } from "react-icons/fa";
import "./index.css";
function App() {
  let data = [
    {
      plan: "FREE",
      price: 0,
      user: "Single User",
      isUser: true,
      storage: "5 GB",
      isStorage: true,
      publicProjects: "Unlimited Public Projects",
      isPublicProjects: true,
      communityAccess: "Community Access",
      isCommunityAccess: true,
      privateProjects: "Unlimited Private Projects",
      isPrivateProjects: false,
      phoneSupport: "Dedicated Phone Support",
      isPhoneSupport: false,
      subDomain: "Free Subdomain",
      isSubDomain: false,
      reports: "Monthly Status Reports",
      isReports: false,
    },
    {
      plan: "PLUS",
      price: 9,
      user: "5 Users",
      isUser: true,
      storage: "50 GB",
      isStorage: true,
      publicProjects: "Unlimited Public Projects",
      isPublicProjects: true,
      communityAccess: "Community Access",
      isCommunityAccess: true,
      privateProjects: "Unlimited Private Projects",
      isPrivateProjects: true,
      phoneSupport: "Dedicated Phone Support",
      isPhoneSupport: true,
      subDomain: "Free Subdomain",
      isSubDomain: true,
      reports: "Monthly Status Reports",
      isReports: false,
    },
    {
      plan: "PRO",
      price: 49,
      user: "Unlimited Users",
      isUser: true,
      storage: "150 GB",
      isStorage: true,
      publicProjects: "Unlimited Public Projects",
      isPublicProjects: true,
      communityAccess: "Community Access",
      isCommunityAccess: true,
      privateProjects: "Unlimited Private Projects",
      isPrivateProjects: true,
      phoneSupport: "Dedicated Phone Support",
      isPhoneSupport: true,
      subDomain: "Free Subdomains",
      isSubDomain: true,
      reports: "Monthly Status Reports",
      isReports: true,
    },
  ];
  return (
    <>
      <section className="pricing py-5">
        <header className="text-center my-4">
          <h1 className="text-black">React Price Card</h1>
          <h2 className="text-black">
            Created by Harish G - Batch59WD-T{" "}
            <a
              href="https://github.com/harish-govindasamy?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} className="github-icon" />
            </a>
          </h2>
        </header>
        <div className="container">
          <div className="row justify-content-center">
            {data.map((e, i) => {
              return <Pricecard price={e} key={i} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
