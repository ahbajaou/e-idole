
import React, { useState } from 'react';
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
            title: "Why Become a Talent Manager?",
            questions: [
                {
                    id: 1,
                    question: "Why is becoming a Talent Manager considered a career of the future?",
                    options: [
                        "It requires no communication skills",
                        "It replaces content creators",
                        "It provides independence and growing market demand",
                        "It guarantees a fixed salary from day one"
                    ],
                    correctAnswer: 2,
                    explanation: "As the creator economy grows, talent managers are increasingly in demand, offering career independence and growth opportunities in an expanding market."
                },
                {
                    id: 2,
                    question: "What is a key benefit of a career in talent management?",
                    options: [
                        "Limited working hours",
                        "No need for industry knowledge",
                        "Building valuable industry connections",
                        "Avoiding digital platforms entirely"
                    ],
                    correctAnswer: 2,
                    explanation: "Talent management allows you to build valuable connections across the digital industry, creating a network that enhances your career opportunities and knowledge."
                }
            ]
        },
        {
            id: 3,
            title: "Daily Life of a Talent Manager",
            questions: [
                {
                    id: 1,
                    question: "What is one of the daily responsibilities of a Talent Manager?",
                    options: [
                        "Designing mobile apps",
                        "Analyzing campaign performance and adjusting strategies",
                        "Writing blog posts for influencers",
                        "Creating TikTok dances"
                    ],
                    correctAnswer: 1,
                    explanation: "Talent managers regularly analyze campaign and content performance, using data to refine strategies and improve results for their talents."
                },
                {
                    id: 2,
                    question: "Which of these tasks is typically part of a talent manager's weekly schedule?",
                    options: [
                        "Coding websites for clients",
                        "Negotiating brand partnerships and reviewing contracts",
                        "Creating all content for their talents",
                        "Managing the technical aspects of servers"
                    ],
                    correctAnswer: 1,
                    explanation: "Negotiating partnerships and reviewing contracts are regular responsibilities of talent managers, ensuring their talents receive fair compensation and beneficial opportunities."
                }
            ]
        },
        {
            id: 4,
            title: "Key Competencies of a Talent Manager",
            questions: [
                {
                    id: 1,
                    question: "What is one of the most important soft skills for a Talent Manager?",
                    options: [
                        "Coding",
                        "Empathy and active listening",
                        "Singing",
                        "Drawing"
                    ],
                    correctAnswer: 1,
                    explanation: "Empathy and active listening are crucial for understanding talent needs, audience preferences, and brand requirements to create successful partnerships."
                },
                {
                    id: 2,
                    question: "Which business skill is essential for successful talent management?",
                    options: [
                        "Advanced programming",
                        "Strategic planning and market analysis",
                        "Graphic design expertise",
                        "Video production"
                    ],
                    correctAnswer: 1,
                    explanation: "Strategic planning and market analysis allow talent managers to identify opportunities, position their talents effectively, and develop long-term career plans."
                }
            ]
        },
        {
            id: 5,
            title: "Finding Your First Talents",
            questions: [
                {
                    id: 1,
                    question: "What is the first step before contacting a talent?",
                    options: [
                        "Sending them a price list",
                        "Analyzing their strengths and weaknesses",
                        "Asking them to promote your own profile",
                        "Posting about them in forums"
                    ],
                    correctAnswer: 1,
                    explanation: "Before approaching potential talents, you should analyze their content, audience, and potential to identify their strengths and areas for growth."
                },
                {
                    id: 2,
                    question: "What should be included in your initial outreach to a potential talent?",
                    options: [
                        "Immediate requests for collaboration",
                        "Criticism of their current content",
                        "Specific observations about their work and potential value you could add",
                        "Demands for immediate response"
                    ],
                    correctAnswer: 2,
                    explanation: "Your initial outreach should demonstrate that you've studied their work and include specific observations along with a clear explanation of how you could add value to their career."
                }
            ]
        },
        {
            id: 6,
            title: "Managing Your Talents & Structuring Your Offer",
            questions: [
                {
                    id: 1,
                    question: "What is a good way to formalize a new collaboration?",
                    options: [
                        "A quick DM exchange",
                        "A handshake",
                        "A written contract clearly outlining responsibilities",
                        "Ignoring formalities altogether"
                    ],
                    correctAnswer: 2,
                    explanation: "A clear written contract protects both parties by establishing expectations, compensation structures, and responsibilities from the beginning of the relationship."
                },
                {
                    id: 2,
                    question: "How should you structure your compensation model?",
                    options: [
                        "Always demanding upfront payment",
                        "Working for free until you're established",
                        "Creating a flexible model that aligns with each talent's situation and growth",
                        "Charging the same rate for all talents regardless of their following"
                    ],
                    correctAnswer: 2,
                    explanation: "A flexible compensation model allows you to work with talents at different career stages and ensures your compensation grows alongside your talents' success."
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
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const handleModuleSelect = (moduleIndex) => {
        setActiveModule(moduleIndex);
        setCurrentQuiz({
            currentQuestionIndex: 0,
            selectedAnswer: null,
            score: 0,
            quizCompleted: false,
            showExplanation: false
        });
        // Close sidebar on small screens after selection
        if (window.innerWidth < 768) {
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
                                className={`w-full text-left p-2 text-sm rounded ${activeSection === 'Chat' ? 'bg-red-600 text-white' : 'hover:bg-gray-200'
                                    }`}
                                onClick={() => {
                                    setActiveSection('Chat');
                                    navigate('/chat');
                                }}
                            >
                                Chat
                            </button>
                            <button
                                className={`w-full text-left p-2 text-sm rounded ${activeSection === 'Quiz' ? 'bg-red-600 text-white' : 'hover:bg-gray-200'
                                    }`}
                                onClick={() => {
                                    setActiveSection('Quiz');
                                    // navigate('/quiz');
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

                {/* Main Content - with sidebar overlay for small screens */}
                <div className={`flex-1 overflow-auto p-3 md:p-4 transition-all duration-300 ${sidebarOpen ? 'md:ml-0' : 'ml-0'}`}>
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