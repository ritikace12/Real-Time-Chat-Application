import React from "react";
import { useNavigate } from "react-router-dom";
import FAQSection from "./FAQSection";
import heroImage from "../assets/hero-image.jpeg";
import Social from "../assets/Social.avif";
import Religious from "../assets/Religious.webp";
import Charity from "../assets/Charity.avif";
import find from "../assets/find.avif";
import join from "../assets/join.avif";
import share from "../assets/share.avif";

const Home = () => {
  const navigate = useNavigate(); // For navigation

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center bg-white">
      {/* Animated Background */}
      <div className="absolute inset-0 "></div>

      {/* Navbar */}
      <nav className="relative w-full flex justify-between items-center py-4 px-6 border-b border-gray-300 bg-white ">
        <h2 className="text-3xl font-bold text-gray-900  ">
          <span className="text-[#181D3B]">C</span>ommunion
          <span className="text-[#F67974]">Hub</span>
        </h2>
        <div className="hidden md:flex gap-10 text-[#181D3B] font-bold">
        <a href="/" className="hover:text-[#F67974] transition-all duration-300">Home</a>
          <a href="/events" className="hover:text-[#F67974] transition-all duration-300">Events</a>
          <a href="#" className="hover:text-[#F67974] transition-all duration-300">About</a>
          <a href="#" className="hover:text-[#F67974] transition-all duration-300">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-between w-full bg-white max-w-7xl px-6 py-12 md:py-20 z-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-[#181D3B] leading-tight animate-fadeIn">
            Connecting People <br /> Across Faiths & Interests
          </h1>
          <p className="text-lg text-gray-600 animate-fadeIn delay-200">
            Join us in celebrating unity through events, faith-based gatherings, and social interactions. Be a part of something meaningful.
          </p>
          <button
            className="mt-4 px-6 py-3 bg-[#F67974] text-white rounded-lg text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-100"
            onClick={() => navigate("/events")}
          >
            Explore Events ⌲
          </button>
        </div>

        {/* Right Content (Image) */}
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src={heroImage}
            alt="Community Gathering"
            className="w-full max-w-md md:max-w-lg rounded-lg "
          />
        </div>
      </div>

          {/* Community Section */}
<section className="relative w-full max-w-7xl px-6 py-12 text-center">
  <h2 className="text-3xl font-bold text-[#181D3B] mb-6 animate-fadeIn">
    Our Community
  </h2>
  <p className="text-lg text-gray-600 mb-8">
    Engage in events that bring people together, strengthen faith, and support those in need.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    
    {/* Social Section */}
    <div className="p-4 bg-white shadow-md rounded-lg hover:scale-105 transition-transform duration-300 ">
      <img src={Social} alt="Social Gatherings" className="w-full h-40 object-cover rounded-lg " />
      <h3 className="mt-4 text-xl font-semibold text-[#F67974]">Social</h3>
      <p className="text-gray-600">Connect through fun, engaging activities and build lasting relationships.</p>
    </div>

    {/* Religious Section */}
    <div className="p-4 bg-white shadow-md rounded-lg hover:scale-105 transition-transform duration-300 ">
      <img src={Religious} alt="Religious Gatherings" className="w-full h-40 object-cover rounded-md" />
      <h3 className="mt-4 text-xl font-semibold text-[#F67974]">Religious</h3>
      <p className="text-gray-600">Join faith-based events, spiritual discussions, and prayer groups.</p>
    </div>

    {/* Charity Section */}
    <div className="p-4 bg-white shadow-md rounded-lg hover:scale-105 transition-transform duration-300 ">
      <img src={Charity} alt="Charity & Volunteer" className="w-full h-40 object-cover rounded-md" />
      <h3 className="mt-4 text-xl font-semibold text-[#F67974]">Charity</h3>
      <p className="text-gray-600">Make a difference by participating in volunteer and charity initiatives.</p>
    </div>

  </div>
</section>

      {/* How It Works Section */}
      <section className="relative w-full max-w-7xl px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-[#181D3B] mb-6 animate-fadeIn">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="p-4 bg-white shadow-md rounded-lg hover:scale-105 transition-transform duration-300 ">
            <img src={find} alt="Step 1" className="w-full h-40 object-cover rounded-md" />
            <h3 className="mt-4 text-xl font-semibold text-[#F67974]">Find Events</h3>
            <p className="text-gray-600">Browse a variety of events based on your interests and beliefs.</p>
          </div>

          {/* Step 2 */}
          <div className="p-4 bg-white shadow-md rounded-lg hover:scale-105 transition-transform duration-300 ">
            <img src={join}  alt="Step 2" className="w-full h-40 object-cover rounded-md" />
            <h3 className="mt-4 text-xl font-semibold text-[#F67974]">Join & Engage</h3>
            <p className="text-gray-600">Participate in gatherings and make meaningful connections.</p>
          </div>

          {/* Step 3 */}
          <div className="p-4 bg-white shadow-md rounded-lg hover:scale-105 transition-transform duration-300 ">
            <img src={share}  alt="Step 3" className="w-full h-40 object-cover rounded-md" />
            <h3 className="mt-4 text-xl font-semibold text-[#F67974]">Share & Inspire</h3>
            <p className="text-gray-600">Host events, share stories, and build a thriving community.</p>
          </div>
        </div>
      </section>

 {/* FAQ Section */}
<section>
<FAQSection />
</section >


{/* Footer Section */}
<footer className="relative w-full py-4 bg-[#181D3B] text-center text-white z-10">
        <p className="text-sm">© 2025 CommunionHub. All Rights Reserved.</p>
      </footer>


    </div>
  );
};

export default Home;





