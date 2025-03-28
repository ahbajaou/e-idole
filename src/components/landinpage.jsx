
import React, { useState } from 'react';
import { 
  Image, 
  Users, 
  Award, 
  Globe, 
  MessageCircle,
  Mail, 
  Lock, 
  User, 
  ArrowRight 
} from 'lucide-react';

import { useNavigate } from "react-router-dom";

// import ChatInterface from './components/ChatBox.jsx'
// import React, { useState } from 'react';
// import { 
//   Mail, 
//   Lock, 
//   User, 
//   ArrowRight 
// } from 'lucide-react';

const AuthComponent = () => {
  const [isLogin, setIsLogin] = useState(true);
    const Navigation = useNavigate();
  const renderForm = () => {
    return isLogin ? renderLoginForm() : renderRegisterForm();
  };

  const renderLoginForm = () => (
    <form className="space-y-6">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Mail className="text-gray-400" size={20} />
        </div>
        <input 
          type="email" 
          placeholder="Email Address" 
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E80015]/50 transition duration-300"
        />
      </div>
      
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Lock className="text-gray-400" size={20} />
        </div>
        <input 
          type="password" 
          placeholder="Password" 
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E80015]/50 transition duration-300"
        />
      </div>
      
      <div className="flex justify-between items-center">
        <a 
          href="#" 
          className="text-sm text-[#E80015] hover:underline transition"
        >
          Forgot Password?
        </a>
      </div>
      
      <button 
        type="submit" 
        onClick={(e) => Navigation('/chat')}
        className="w-full bg-gradient-to-r from-[#E80015] to-red-700 text-white py-3 rounded-lg hover:opacity-90 transition duration-300 flex items-center justify-center space-x-2"
      >
        <span>Login</span>
        <ArrowRight size={20} />
      </button>
    </form>
  );

  const renderRegisterForm = () => (
    <form className="space-y-6">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <User className="text-gray-400" size={20} />
        </div>
        <input 
          type="text" 
          placeholder="Full Name" 
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E80015]/50 transition duration-300"
        />
      </div>
      
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Mail className="text-gray-400" size={20} />
        </div>
        <input 
          type="email" 
          placeholder="Email Address" 
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E80015]/50 transition duration-300"
        />
      </div>
      
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Lock className="text-gray-400" size={20} />
        </div>
        <input 
          type="password" 
          placeholder="Password" 
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E80015]/50 transition duration-300"
        />
      </div>
      
      <button 
        type="submit" 
        className="w-full bg-gradient-to-r from-[#E80015] to-red-700 text-white py-3 rounded-lg hover:opacity-90 transition duration-300 flex items-center justify-center space-x-2"
      >
        <span>Create Account</span>
        <ArrowRight size={20} />
      </button>
    </form>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="p-8">
          <div className="flex mb-8">
            <button 
              onClick={() => setIsLogin(true)}
              className={`w-1/2 py-3 text-center transition duration-300 ${
                isLogin 
                  ? 'text-[#E80015] border-b-2 border-[#E80015] font-semibold' 
                  : 'text-gray-500 hover:text-[#E80015]'
              }`}
            >
              Login
            </button>
            <button 
              onClick={() => setIsLogin(false)}
              className={`w-1/2 py-3 text-center transition duration-300 ${
                !isLogin 
                  ? 'text-[#E80015] border-b-2 border-[#E80015] font-semibold' 
                  : 'text-gray-500 hover:text-[#E80015]'
              }`}
            >
              Register
            </button>
          </div>
          
          {renderForm()}
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {isLogin 
                ? "Don't have an account? " 
                : "Already have an account? "}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="text-[#E80015] hover:underline"
              >
                {isLogin ? "Register" : "Login"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default AuthComponent;

const EIdolsWebsite = () => {
  const [activeSection, setActiveSection] = useState(true);

  return (
    <div className="bg-white text-black font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50  bg-white ">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold text-[#E80015]">E-IDOLS</div>
          <div className="space-x-6">
            <a onClick={(e) => setActiveSection(true)}  href="#home" className="hover:text-[#E80015] transition">Home</a>
            <a onClick={(e) => setActiveSection(true)}  href="#about" className="hover:text-[#E80015] transition">About</a>
            <a onClick={(e) => setActiveSection(true)}  href="#services" className="hover:text-[#E80015] transition">Services</a>
            <button onClick={(e) => setActiveSection(false)} className="bg-[#E80015] text-white px-4 py-2 rounded-full hover:bg-black transition">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}

      {activeSection ? (
        <>
       <section 
       id="home"
       className="h-screen flex items-center justify-center text-center relative pt-16 bg-white px-4"
     >
       <div className="h-[90%] container mx-auto bg-gray-100 rounded-3xl  p-12 flex flex-col items-center justify-center">
         <h1 className="text-6xl font-bold mb-4">
           <span className="text-[#E80015]">E-IDOLS</span> TALENT AGENCY
         </h1>
         <p className="text-xl text-gray-700 mb-8">
           Discovering and Elevating Digital Talents
         </p>
         <button onClick={(e) => setActiveSection(false)}  className="bg-[#E80015] text-white px-8 py-3 rounded-full hover:bg-black transition">
           Explore Talents
         </button>
       </div>
     </section>

     <section 
       id="about" 
       className="py-16 bg-white px-4"
     >
       <div className="container mx-auto bg-white rounded-3xl  p-12">
         <div className="grid md:grid-cols-2 gap-12 items-center">
           <div>
             <h2 className="text-4xl font-bold mb-6 text-[#E80015]">About E-Idols</h2>
             <p className="text-gray-700 mb-4">
               E-Idols is a pioneering talent management agency specializing in digital influencers, content creators, and emerging talents across various platforms.
             </p>
             <p className="text-gray-700">
               Our mission is to identify, nurture, and propel unique talents to global recognition.
             </p>
           </div>
           <div className="bg-gray-100 rounded-lg overflow-hidden">
             <Image size={600} className="w-full h-80 object-cover" />
           </div>
         </div>
       </div>
     </section>


     <section 
       id="services" 
       className="py-16 bg-white px-4 h-screen"
     >
       <div className="h-[100%] container mx-auto bg-gray-100 rounded-3xl  p-12 flex items-center justify-center flex-col">
         <h2 className="text-4xl font-bold text-center mb-12 text-[#E80015] ">
           Our Services
         </h2>
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
           {[
             { icon: MessageCircle, title: 'Talent Management', desc: 'Comprehensive career support' },
             { icon: Award, title: 'Brand Partnerships', desc: 'Strategic collaboration' },
             { icon: Globe, title: 'Global Positioning', desc: 'International talent placement' },
             { icon: Users, title: 'Content Strategy', desc: 'Innovative content development' }
           ].map((service, index) => (
             <div 
               key={index} 
               className="bg-gray-50 rounded-lg p-6 text-center shadow-md"
             >
               <div className="mb-4 flex justify-center">
                 <service.icon size={48} className="text-[#E80015]" />
               </div>
               <h3 className="text-xl font-semibold mb-4 text-[#E80015]">{service.title}</h3>
               <p className="text-gray-600">{service.desc}</p>
             </div>
           ))}
         </div>
       </div>
     </section>

     <footer className="bg-black text-white py-12">
       <div className="container mx-auto px-4 text-center">
         <div className="mb-8">
           <h3 className="text-3xl font-bold text-[#E80015]">E-IDOLS</h3>
           <p className="text-gray-400 mt-4">
             Connecting Talents. Creating Legacies.
           </p>
         </div>
         <div className="flex justify-center space-x-6 mb-8">
           <a href="#" className="hover:text-[#E80015] transition">Instagram</a>
           <a href="#" className="hover:text-[#E80015] transition">Twitter</a>
           <a href="#" className="hover:text-[#E80015] transition">LinkedIn</a>
         </div>
         <p className="text-gray-500">&copy; 2024 E-Idols Talent Agency. All Rights Reserved.</p>
       </div>
     </footer>
     </> 
      ) : (
        <AuthComponent/>
      )}

    </div>
  );
};

export default EIdolsWebsite;