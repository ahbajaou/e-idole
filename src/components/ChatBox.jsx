import React, { useState } from 'react';

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hi there! I'm your E-IDOLS Talent Management Training Assistant. How can I help you today?",
      sender: 'bot'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [activeSection, setActiveSection] = useState('Quiz');

  // Quiz Questions (Same as previous version)
  const quizQuestions = [
    {
      id: 1,
      category: "Talent Acquisition",
      question: "What is the primary goal of strategic talent acquisition?",
      options: [
        "Filling immediate job vacancies",
        "Attracting top talent aligned with company goals",
        "Reducing recruitment costs",
        "Increasing employee headcount"
      ],
      correctAnswer: 1,
      explanation: "Strategic talent acquisition focuses on finding candidates who not only meet job requirements but also align with the organization's long-term objectives and culture."
    },
    // ... (rest of the questions remain the same)
  ];

  const [currentQuiz, setCurrentQuiz] = useState({
    questions: quizQuestions,
    currentQuestionIndex: 0,
    selectedAnswer: null,
    score: 0,
    quizCompleted: false,
    showExplanation: false
  });

  const handleAnswerSelect = (selectedOptionIndex) => {
    const updatedQuiz = { ...currentQuiz };
    const currentQuestion = updatedQuiz.questions[updatedQuiz.currentQuestionIndex];
    
    updatedQuiz.selectedAnswer = selectedOptionIndex;
    
    if (selectedOptionIndex === currentQuestion.correctAnswer) {
      updatedQuiz.score += 1;
    }
    
    updatedQuiz.showExplanation = true;
    
    setCurrentQuiz(updatedQuiz);
  };

  const handleNextQuestion = () => {
    const updatedQuiz = { ...currentQuiz };
    
    if (updatedQuiz.currentQuestionIndex < updatedQuiz.questions.length - 1) {
      updatedQuiz.currentQuestionIndex += 1;
      updatedQuiz.selectedAnswer = null;
      updatedQuiz.showExplanation = false;
    } else {
      updatedQuiz.quizCompleted = true;
    }
    
    setCurrentQuiz(updatedQuiz);
  };

  const restartQuiz = () => {
    setCurrentQuiz({
      questions: quizQuestions,
      currentQuestionIndex: 0,
      selectedAnswer: null,
      score: 0,
      quizCompleted: false,
      showExplanation: false
    });
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b z-20">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center space-x-4">
            <div className="text-xl font-bold text-red-500">E-IDOLS</div>
            <nav className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-red-500">Home</a>
              <a href="#" className="text-gray-600 hover:text-red-500">About</a>
              <a href="#" className="text-gray-600 hover:text-red-500">Services</a>
            </nav>
          </div>
          <button className="bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded">Login</button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex w-full pt-16">
        {/* Sidebar */}
        <div className="w-64 bg-gray-100 p-4 border-r h-[calc(100vh-4rem)]">
          <div className="space-y-4">
            <div className="bg-white p-3 rounded shadow-sm">
              <h3 className="font-semibold text-sm">Current Module</h3>
              <p className="text-xs text-gray-600">Talent Management Quiz</p>
            </div>
            
            <div className="bg-white p-3 rounded shadow-sm">
              <h3 className="font-semibold text-sm">Progress</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div 
                  className="bg-red-500 h-2.5 rounded-full" 
                  style={{
                    width: `${((currentQuiz.currentQuestionIndex + 1) / quizQuestions.length) * 100}%`
                  }}
                ></div>
              </div>
              <p className="text-xs text-gray-600 mt-1">
                {currentQuiz.currentQuestionIndex + 1} of {quizQuestions.length}
              </p>
            </div>

            <div className="space-y-2">
              {['Chat', 'Modules', 'Quiz', 'Resources'].map((section) => (
                <button
                  key={section}
                  className={`w-full text-left p-2 rounded ${
                    activeSection === section 
                      ? 'bg-red-500 text-white' 
                      : 'hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveSection(section)}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Quiz Content Area */}
        <div className="flex-1 flex items-center justify-center p-6">
          {!currentQuiz.quizCompleted ? (
            <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl p-8 min-h-[500px] flex flex-col">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-red-500 mb-2">
                  {quizQuestions[currentQuiz.currentQuestionIndex].category}
                </h2>
                <p className="text-xl font-semibold text-gray-800">
                  {quizQuestions[currentQuiz.currentQuestionIndex].question}
                </p>
              </div>

              <div className="space-y-4 mb-6 flex-grow">
                {quizQuestions[currentQuiz.currentQuestionIndex].options.map((option, index) => (
                  <button
                    key={index}
                    className={`w-full p-4 text-left rounded-lg transition-all duration-300 h-16 flex items-center ${
                      currentQuiz.selectedAnswer !== null
                        ? index === quizQuestions[currentQuiz.currentQuestionIndex].correctAnswer
                          ? 'bg-green-100 border-2 border-green-500'
                          : currentQuiz.selectedAnswer === index
                          ? 'bg-red-100 border-2 border-red-500'
                          : 'bg-gray-100'
                        : 'hover:bg-gray-100 hover:shadow-md'
                    }`}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={currentQuiz.selectedAnswer !== null}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {currentQuiz.showExplanation && (
                <div className="bg-blue-50 p-4 rounded-lg mb-6 min-h-[100px]">
                  <h3 className="font-bold text-blue-700 mb-2">Explanation</h3>
                  <p className="text-blue-800">
                    {quizQuestions[currentQuiz.currentQuestionIndex].explanation}
                  </p>
                </div>
              )}

              {currentQuiz.selectedAnswer !== null && (
                <button
                  className="w-full bg-red-500 text-white p-4 rounded-lg hover:bg-red-600 transition-colors"
                  onClick={handleNextQuestion}
                >
                  {currentQuiz.currentQuestionIndex < quizQuestions.length - 1 
                    ? 'Next Question' 
                    : 'Finish Quiz'}
                </button>
              )}
            </div>
          ) : (
            <div className="text-center bg-white rounded-xl shadow-2xl p-12 max-w-md">
              <h2 className="text-3xl font-bold text-red-500 mb-6">Quiz Completed!</h2>
              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <p className="text-xl mb-2">Your Score:</p>
                <p className="text-4xl font-bold text-red-500">
                  {currentQuiz.score} / {quizQuestions.length}
                </p>
              </div>
              <button
                className="w-full bg-red-500 text-white p-4 rounded-lg hover:bg-red-600 transition-colors"
                onClick={restartQuiz}
              >
                Restart Quiz
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;