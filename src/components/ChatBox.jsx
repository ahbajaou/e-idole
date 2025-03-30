import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ImprovedChatInterface = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [activeSection, setActiveSection] = useState('Chat');
  const [activeModule, setActiveModule] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);

  // Example prompts that users can click - updated to match your design
  const examplePrompts = [
    "How do I help a creator grow their audience?",
    "How can I plan a weekly content schedule for my talent?",
    "What should I do when a brand contacts my talent?"
  ];

  // All training modules
  const trainingModules = [
    { id: 1, title: "Foundations of Talent Management" },
    { id: 2, title: "Talent Acquisition" },
    { id: 3, title: "Performance Management" },
    { id: 4, title: "Learning & Development" },
    { id: 5, title: "Compensation" },
    { id: 6, title: "Succession Planning" }
  ];

  const handleSendMessage = (message = inputMessage) => {
    if (message.trim()) {
      const newUserMessage = { text: message, sender: 'user' };

      const botResponse = {
        text: generateBotResponse(message),
        sender: 'bot'
      };

      setMessages(prevMessages => [...prevMessages, newUserMessage, botResponse]);
      setInputMessage('');
      setShowWelcomeScreen(false);
    }
  };

  const generateBotResponse = (userInput) => {
    const lowercaseInput = userInput.toLowerCase();

    // Basic responses based on the example prompts
    if (lowercaseInput.includes('grow audience') || lowercaseInput.includes('grow their audience')) {
      return "To help a creator grow their audience, focus on these key strategies: 1) Analyze their current audience demographics and engagement patterns, 2) Develop a consistent posting schedule across platforms, 3) Collaborate with complementary creators for cross-promotion, 4) Engage authentically with their community, and 5) Experiment with new content formats based on platform trends.";
    }

    if (lowercaseInput.includes('brand contacts') || lowercaseInput.includes('brand partnership')) {
      return "When a brand contacts your talent, follow these steps: 1) Research the brand thoroughly to ensure alignment with your talent's values and audience, 2) Request a detailed brief about the collaboration opportunity, 3) Prepare a counter-offer that includes clear deliverables and compensation, 4) Negotiate favorable terms including usage rights and exclusivity periods, and 5) Get everything in writing before proceeding.";
    }

    if (lowercaseInput.includes('content schedule') || lowercaseInput.includes('weekly schedule')) {
      return "To plan an effective weekly content schedule: 1) Analyze which days and times generate highest engagement, 2) Balance content types (educational, entertaining, promotional) throughout the week, 3) Create a content calendar template with all platforms, 4) Build in flexibility for trending topics, and 5) Schedule regular performance reviews to optimize the strategy.";
    }

    if (lowercaseInput.includes('module') || lowercaseInput.includes('training') || lowercaseInput.includes('learn')) {
      return "We have 6 comprehensive modules in our Talent Management training program: Foundations of Talent Management, Talent Acquisition, Performance Management, Learning & Development, Compensation, and Succession Planning. Which specific area would you like to explore?";
    }

    return "That's a great question about talent management! Could you provide more context or specifics about your situation so I can give you a more tailored response?";
  };

  const handleModuleSelect = (moduleIndex) => {
    setActiveModule(moduleIndex);
    // Close sidebar on small screens after selection
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handlePromptClick = (prompt) => {
    // Add the user's message first
    const newUserMessage = { text: prompt, sender: 'user' };

    const botResponse = {
      text: generateBotResponse(prompt),
      sender: 'bot'
    };

    setMessages([newUserMessage, botResponse]);
    setInputMessage(''); // Clear the input field
    setShowWelcomeScreen(false); // Hide the welcome screen after a question is clicked
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Navbar */}
      <header className="flex justify-center items-center px-4 py-3 bg-white w-full shadow-md z-10">
        <div className="w-full flex justify-between items-center max-w-6xl mx-auto">
          <button
            className="md:hidden mr-2 p-2"
            onClick={toggleSidebar}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={sidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
          <div className="text-xl font-bold flex-1 text-center md:text-left">
            <span className="text-red-600">E-IDOLS</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1 w-full overflow-hidden">
        {/* Sidebar - responsive */}
        <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transform transition-transform duration-300 fixed md:relative z-10 md:z-0 top-0 left-0 pt-16 md:pt-0 w-64 bg-gray-100 border-r h-full overflow-auto`}>
          <div className="p-4 space-y-3">
            <div className="bg-white p-3 rounded shadow-sm">
              <h3 className="font-semibold text-sm">Current Module</h3>
              <p className="text-xs text-gray-600">
                Foundations of Talent Management
              </p>
            </div>

            <div className="bg-white p-3 rounded shadow-sm">
              <h3 className="font-semibold text-sm">Progress</h3>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div
                  className="bg-red-600 h-2 rounded-full"
                  style={{ width: '30%' }}
                ></div>
              </div>
              <p className="text-xs text-gray-600 mt-1">
                30% complete
              </p>
            </div>

            <div className="space-y-1">
              <button
                className={`w-full text-left p-2 text-sm rounded ${activeSection === 'Chat' ? 'bg-red-600 text-white' : 'hover:bg-gray-200'
                  }`}
                onClick={() => setActiveSection('Chat')}
              >
                Chat
              </button>
              <button
                className={`w-full text-left p-2 text-sm rounded ${activeSection === 'Quiz' ? 'bg-red-600 text-white' : 'hover:bg-gray-200'
                  }`}
                onClick={() => {
                  setActiveSection('Quiz');
                  navigate('/quiz');
                }}
              >
                Quiz
              </button>
            </div>
          </div>
        </div>

        {/* Main Content - with sidebar overlay for small screens */}
        <div className={`flex-1 overflow-hidden transition-all duration-300 ${sidebarOpen ? 'md:ml-0' : 'ml-0'}`}>
          <div className="h-full flex flex-col">
            {/* Chat Messages Area */}
            <div className="flex-1 overflow-y-auto p-4">
              {showWelcomeScreen ? (
                <div className="flex flex-col items-center h-full">
                  {/* Welcome Text - positioned above the questions */}
                  <div className="text-center mt-16 mb-8">
                    <h2 className="text-xl text-gray-700">Hi there</h2>
                    <h1 className="text-2xl font-bold mt-2">How i can Help you?</h1>
                  </div>

                  {/* Question Buttons */}
                  <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
                    {examplePrompts.map((prompt, index) => (
                      <button
                        key={index}
                        className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg text-sm shadow-sm w-60 text-center"
                        onClick={() => handlePromptClick(prompt)}
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                /* Chat Messages */
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`p-3 rounded-lg max-w-[80%] ${message.sender === 'user'
                            ? 'bg-red-600 text-white'
                            : 'bg-gray-200 text-black'
                          }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="bg-gray-100 border-t p-4 flex items-center space-x-2">
              <input
                type="text"
                placeholder="Typing..."
                className="flex-1 p-2 border rounded-lg"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button
                className="bg-red-600 text-white hover:bg-red-600 px-4 py-2 rounded-lg"
                onClick={() => handleSendMessage()}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImprovedChatInterface;