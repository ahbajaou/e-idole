import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TalentManagementQuiz = () => {
    // All quiz modules with their questions
    const navigate = useNavigate();
    const quizModules = [
        {
            id: 1,
            title: "Foundations of Talent Management",
            questions: [
                {
                    id: 1,
                    question: "What is the primary role of a Talent Manager in the digital world?",
                    options: [
                        "Create video content for influencers",
                        "Negotiate and manage talent partnerships and career growth",
                        "Post on social media on behalf of the talent",
                        "Handle technical support for online platforms"
                    ],
                    correctAnswer: 1,
                    explanation: "Talent Managers primarily negotiate opportunities and manage partnerships to support their talents' career growth and development."
                },
                {
                    id: 2,
                    question: "Which of the following best describes talent management?",
                    options: [
                        "A short-term strategy to increase social media followers",
                        "A comprehensive approach to developing digital creators' careers",
                        "A technical role focused on video editing",
                        "A customer service position for online platforms"
                    ],
                    correctAnswer: 1,
                    explanation: "Talent management is a comprehensive approach that involves strategic planning, relationship building, and career development for digital creators."
                }
            ]
        },
        {
            id: 2,
            title: "Talent Acquisition",
            questions: [
                {
                    id: 1,
                    question: "What is the first step in the talent acquisition process?",
                    options: [
                        "Immediately posting job openings",
                        "Identifying talent needs and creating job descriptions",
                        "Conducting interviews",
                        "Making job offers"
                    ],
                    correctAnswer: 1,
                    explanation: "The first step in talent acquisition is identifying the organization's needs and creating detailed job descriptions that align with business objectives."
                },
                {
                    id: 2,
                    question: "Which factor is most important when evaluating potential talent?",
                    options: [
                        "Number of social media followers",
                        "Alignment with company values and culture",
                        "Previous salary expectations",
                        "Age and experience level"
                    ],
                    correctAnswer: 1,
                    explanation: "Cultural fit and alignment with company values are crucial for long-term success and retention."
                }
            ]
        },
        {
            id: 3,
            title: "Performance Management",
            questions: [
                {
                    id: 1,
                    question: "What is the primary goal of performance management?",
                    options: [
                        "To criticize underperforming employees",
                        "To improve employee performance and achieve organizational goals",
                        "To reduce employee benefits",
                        "To increase workload"
                    ],
                    correctAnswer: 1,
                    explanation: "Performance management aims to improve employee performance and align individual goals with organizational objectives through continuous feedback and development."
                },
                {
                    id: 2,
                    question: "Which is the most effective approach to performance reviews?",
                    options: [
                        "Annual formal reviews only",
                        "Continuous feedback and regular check-ins",
                        "Monthly written reports",
                        "Quarterly team meetings"
                    ],
                    correctAnswer: 1,
                    explanation: "Continuous feedback and regular check-ins provide more timely and actionable insights for improvement."
                }
            ]
        },
        {
            id: 4,
            title: "Learning & Development",
            questions: [
                {
                    id: 1,
                    question: "What is the main purpose of learning and development programs?",
                    options: [
                        "To fill time in the workday",
                        "To enhance employee skills and career growth",
                        "To reduce employee benefits",
                        "To increase company expenses"
                    ],
                    correctAnswer: 1,
                    explanation: "Learning and development programs are designed to enhance employee skills, knowledge, and capabilities for better performance and career growth."
                },
                {
                    id: 2,
                    question: "Which approach is most effective for employee training?",
                    options: [
                        "One-size-fits-all classroom training",
                        "Personalized learning paths with multiple formats",
                        "Online-only courses",
                        "Annual training workshops"
                    ],
                    correctAnswer: 1,
                    explanation: "Personalized learning paths that combine multiple formats (online, in-person, mentoring) are most effective for different learning styles and needs."
                }
            ]
        },
        {
            id: 5,
            title: "Compensation",
            questions: [
                {
                    id: 1,
                    question: "What is the primary consideration in compensation planning?",
                    options: [
                        "Minimizing company expenses",
                        "Market competitiveness and internal equity",
                        "Employee preferences only",
                        "Government regulations only"
                    ],
                    correctAnswer: 1,
                    explanation: "Compensation planning should balance market competitiveness with internal equity to attract and retain talent while maintaining fairness."
                },
                {
                    id: 2,
                    question: "Which factor should NOT influence compensation decisions?",
                    options: [
                        "Market research and industry standards",
                        "Employee performance and contributions",
                        "Personal relationships with management",
                        "Company budget and financial health"
                    ],
                    correctAnswer: 2,
                    explanation: "Personal relationships should never influence compensation decisions as this can lead to bias and unfair practices."
                }
            ]
        },
        {
            id: 6,
            title: "Succession Planning",
            questions: [
                {
                    id: 1,
                    question: "What is the main purpose of succession planning?",
                    options: [
                        "To replace current employees",
                        "To ensure business continuity and leadership development",
                        "To reduce training costs",
                        "To increase employee turnover"
                    ],
                    correctAnswer: 1,
                    explanation: "Succession planning ensures business continuity by developing future leaders and maintaining organizational knowledge."
                },
                {
                    id: 2,
                    question: "Which is a key element of effective succession planning?",
                    options: [
                        "Keeping plans secret from employees",
                        "Identifying and developing high-potential employees",
                        "Waiting until someone leaves to start planning",
                        "Focusing only on senior positions"
                    ],
                    correctAnswer: 1,
                    explanation: "Identifying and developing high-potential employees is crucial for building a strong leadership pipeline."
                }
            ]
        }
    ];

    const [activeSection, setActiveSection] = useState('Quiz');
    const [activeModule, setActiveModule] = useState(0);
    const [currentQuiz, setCurrentQuiz] = useState({
        currentQuestionIndex: 0,
        selectedAnswer: null,
        score: 0,
        quizCompleted: false,
        showExplanation: false
    });
    const [sidebarOpen, setSidebarOpen] = useState(false); // Default to closed
    const [isMobile, setIsMobile] = useState(false);

    // Set sidebar default state based on screen size - matching chat behavior
    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            setSidebarOpen(!mobile); // Open on desktop, closed on mobile
        };
        
        // Check on mount
        checkMobile();
        
        // Add event listener to handle window resize
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleModuleSelect = (moduleIndex) => {
        setActiveModule(moduleIndex);
        setCurrentQuiz({
            currentQuestionIndex: 0,
            selectedAnswer: null,
            score: 0,
            quizCompleted: false,
            showExplanation: false
        });
        // Close sidebar on mobile when selecting a module
        if (isMobile) {
            setSidebarOpen(false);
        }
    };

    const handleAnswerSelect = (selectedOptionIndex) => {
        const updatedQuiz = { ...currentQuiz };
        const currentQuestion = quizModules[activeModule].questions[updatedQuiz.currentQuestionIndex];

        updatedQuiz.selectedAnswer = selectedOptionIndex;

        if (selectedOptionIndex === currentQuestion.correctAnswer) {
            updatedQuiz.score += 1;
        }

        updatedQuiz.showExplanation = true;

        setCurrentQuiz(updatedQuiz);
    };

    const handleNextQuestion = () => {
        const updatedQuiz = { ...currentQuiz };
        const currentModuleQuestions = quizModules[activeModule].questions;

        if (updatedQuiz.currentQuestionIndex < currentModuleQuestions.length - 1) {
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
            currentQuestionIndex: 0,
            selectedAnswer: null,
            score: 0,
            quizCompleted: false,
            showExplanation: false
        });
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    // Handle navigation to Chat and close sidebar on mobile
    const handleChatNavigation = () => {
        setActiveSection('Chat');
        
        // Close sidebar on mobile
        if (isMobile) {
            setSidebarOpen(false);
        }
        
        // Then navigate
        navigate('/chat');
    };

    const currentModule = quizModules[activeModule];
    const currentQuestion = currentModule.questions[currentQuiz.currentQuestionIndex];
    const totalQuestions = currentModule.questions.length;

    return (
        <div className="flex flex-col h-screen bg-white">
            {/* Navbar */}
            <header className="flex justify-center items-center px-4 py-3 bg-white w-full shadow-md z-10">
                <div className="w-full flex justify-between items-center max-w-6xl mx-auto">
                    <button
                        className="md:hidden mr-2 p-2"
                        onClick={toggleSidebar}
                        aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
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
                {/* Mobile Overlay - only show when sidebar is open on mobile */}
                {sidebarOpen && isMobile && (
                    <div 
                        className="fixed inset-0 bg-black bg-opacity-50 z-10" 
                        onClick={toggleSidebar}
                        aria-label="Close sidebar"
                    ></div>
                )}
                
                {/* Sidebar - responsive */}
                <div 
                    className={`
                        fixed md:relative z-20 top-0 left-0 pt-16 md:pt-0 w-64 bg-gray-100 border-r h-full overflow-auto
                        transform transition-transform duration-300 ease-in-out
                        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
                        md:translate-x-0
                    `}
                >
                    <div className="p-4 space-y-3">
                        <div className="bg-white p-3 rounded shadow-sm">
                            <h3 className="font-semibold text-sm">Current Module</h3>
                            <p className="text-xs text-gray-600">
                                Module {currentModule.id}: {currentModule.title}
                            </p>
                        </div>

                        <div className="bg-white p-3 rounded shadow-sm">
                            <h3 className="font-semibold text-sm">Progress</h3>
                            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                <div
                                    className="bg-red-600 h-2 rounded-full"
                                    style={{
                                        width: `${((currentQuiz.currentQuestionIndex + 1) / totalQuestions) * 100}%`
                                    }}
                                ></div>
                            </div>
                            <p className="text-xs text-gray-600 mt-1">
                                {currentQuiz.currentQuestionIndex + 1} of {totalQuestions}
                            </p>
                        </div>

                        <div className="space-y-1">
                            <button
                                className={`w-full text-left p-2 text-sm rounded ${activeSection === 'Chat' ? 'bg-red-600 text-white' : 'hover:bg-gray-200'}`}
                                onClick={handleChatNavigation}
                            >
                                Chat
                            </button>
                            <button
                                className={`w-full text-left p-2 text-sm rounded ${activeSection === 'Quiz' ? 'bg-red-600 text-white' : 'hover:bg-gray-200'}`}
                                onClick={() => {
                                    setActiveSection('Quiz');
                                    if (isMobile) {
                                        setSidebarOpen(false);
                                    }
                                }}
                            >
                                Quiz
                            </button>
                        </div>

                        {activeSection === 'Quiz' && (
                            <div className="mt-2">
                                <h3 className="font-semibold text-sm mb-1">Quiz Modules</h3>
                                <div className="space-y-1">
                                    {quizModules.map((module, index) => (
                                        <button
                                            key={module.id}
                                            className={`w-full text-left p-2 text-xs rounded ${activeModule === index
                                                ? 'bg-red-100 text-red-700 font-medium'
                                                : 'hover:bg-gray-200'
                                                }`}
                                            onClick={() => handleModuleSelect(index)}
                                        >
                                            {module.id}. {module.title}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 overflow-auto p-3 md:p-4 transition-all duration-300">
                    <div className="w-full max-w-2xl mx-auto">
                        {!currentQuiz.quizCompleted ? (
                            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
                                <div className="mb-4">
                                    <h2 className="text-xs font-medium text-gray-500 mb-1">
                                        Module {currentModule.id}:
                                    </h2>
                                    <h2 className="text-lg sm:text-xl font-bold text-red-600 mb-3 line-clamp-2">
                                        {currentModule.title}
                                    </h2>
                                    <p className="text-base sm:text-lg font-semibold text-gray-800">
                                        {currentQuestion.question}
                                    </p>
                                </div>

                                <div className="space-y-3 mb-4">
                                    {currentQuestion.options.map((option, index) => (
                                        <button
                                            key={index}
                                            className={`w-full p-3 text-left rounded-lg transition-all duration-300 flex items-center ${currentQuiz.selectedAnswer !== null
                                                ? index === currentQuestion.correctAnswer
                                                    ? 'bg-green-100 border border-green-500 shadow-sm'
                                                    : currentQuiz.selectedAnswer === index
                                                        ? 'bg-red-100 border border-red-600 shadow-sm'
                                                        : 'bg-gray-50 border border-gray-200'
                                                : 'hover:bg-gray-50 hover:shadow-sm border border-gray-200'
                                                } min-h-[44px] text-sm sm:text-base`}
                                            onClick={() => handleAnswerSelect(index)}
                                            disabled={currentQuiz.selectedAnswer !== null}
                                        >
                                            <div className="flex items-center">
                                                <div className={`w-5 h-5 flex items-center justify-center rounded-full mr-2 text-xs ${currentQuiz.selectedAnswer !== null
                                                    ? index === currentQuestion.correctAnswer
                                                        ? 'bg-green-500 text-white'
                                                        : currentQuiz.selectedAnswer === index
                                                            ? 'bg-red-600 text-white'
                                                            : 'bg-gray-300 text-white'
                                                    : 'bg-gray-200 text-gray-700'
                                                    }`}>
                                                    {String.fromCharCode(65 + index)}
                                                </div>
                                                <span className="line-clamp-2">{option}</span>
                                            </div>

                                            {currentQuiz.selectedAnswer !== null && index === currentQuestion.correctAnswer && (
                                                <svg className="w-4 h-4 ml-auto text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            )}

                                            {currentQuiz.selectedAnswer === index && index !== currentQuestion.correctAnswer && (
                                                <svg className="w-4 h-4 ml-auto text-red-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            )}
                                        </button>
                                    ))}
                                </div>

                                {currentQuiz.showExplanation && (
                                    <div className="bg-blue-50 p-3 rounded-lg mb-4 border border-blue-200 text-sm">
                                        <h3 className="font-bold text-blue-700 mb-1 text-sm">Explanation</h3>
                                        <p className="text-blue-800">
                                            {currentQuestion.explanation}
                                        </p>
                                    </div>
                                )}

                                {currentQuiz.selectedAnswer !== null && (
                                    <button
                                        className="w-full bg-red-600 text-white p-3 rounded-lg hover:bg-red-600 transition-colors font-medium shadow-sm text-sm sm:text-base"
                                        onClick={handleNextQuestion}
                                    >
                                        {currentQuiz.currentQuestionIndex < totalQuestions - 1
                                            ? 'Next Question'
                                            : 'Finish Quiz'}
                                    </button>
                                )}
                            </div>
                        ) : (
                            <div className="text-center bg-white rounded-lg shadow-lg p-6 sm:p-8">
                                <h2 className="text-xl sm:text-2xl font-bold text-red-600 mb-1">Quiz Completed!</h2>
                                <p className="text-gray-600 mb-4 text-sm">Module: {currentModule.title}</p>

                                <div className="bg-gray-50 p-4 rounded-lg mb-6 shadow-inner">
                                    <p className="text-base sm:text-lg mb-1 text-gray-700">Your Score:</p>
                                    <p className="text-3xl sm:text-4xl font-bold text-red-600 mb-1">
                                        {currentQuiz.score} / {totalQuestions}
                                    </p>
                                    <p className="text-gray-500 text-sm">
                                        {(currentQuiz.score / totalQuestions * 100).toFixed(0)}%
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        className="bg-gray-200 text-gray-800 p-3 rounded-lg hover:bg-gray-300 transition-colors font-medium text-sm"
                                        onClick={() => handleModuleSelect(activeModule)}
                                    >
                                        Restart Module
                                    </button>
                                    <button
                                        className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-600 transition-colors font-medium text-sm"
                                        onClick={() => {
                                            const nextModule = (activeModule + 1) % quizModules.length;
                                            handleModuleSelect(nextModule);
                                        }}
                                    >
                                        Next Module
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TalentManagementQuiz;