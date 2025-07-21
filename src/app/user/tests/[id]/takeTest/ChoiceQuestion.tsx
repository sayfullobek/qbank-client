import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calculator, Edit3, Clock, AlertTriangle, X } from 'lucide-react';

interface Question {
  id: number;
  questionId: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

interface Answer {
  selectedOption: number | null;
  isSubmitted: boolean;
  isCorrect: boolean | null;
}

const questions: Question[] = [
  {
    id: 1,
    questionId: "1750",
    question: "A 45-year-old patient presents with chest pain radiating to the left arm, diaphoresis, and nausea. The ECG shows ST-elevation in leads II, III, and aVF. What is the most likely diagnosis?",
    options: [
      "Anterior myocardial infarction",
      "Inferior myocardial infarction", 
      "Lateral myocardial infarction",
      "Posterior myocardial infarction",
      "Unstable angina"
    ],
    correctAnswer: 1,
    explanation: "ST-elevation in leads II, III, and aVF indicates inferior wall myocardial infarction."
  },
  {
    id: 2,
    questionId: "1751",
    question: "A 28-year-old woman presents with sudden onset of severe headache, photophobia, and neck stiffness. Lumbar puncture reveals increased opening pressure and neutrophilic pleocytosis. What is the most appropriate initial treatment?",
    options: [
      "Oral antibiotics",
      "Intravenous dexamethasone followed by antibiotics",
      "Immediate surgery",
      "Antiviral therapy",
      "Analgesics only"
    ],
    correctAnswer: 1,
    explanation: "Bacterial meningitis requires immediate IV antibiotics, with dexamethasone given first to reduce inflammation."
  },
  {
    id: 3,
    questionId: "1752",
    question: "A 65-year-old diabetic patient develops a non-healing ulcer on the sole of the foot. Which of the following is the most important initial assessment?",
    options: [
      "Blood glucose level",
      "Ankle-brachial index",
      "Complete blood count",
      "Wound culture",
      "X-ray of the foot"
    ],
    correctAnswer: 1,
    explanation: "Ankle-brachial index assesses peripheral arterial disease, which is crucial for diabetic foot ulcer management."
  }
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: Answer }>({});
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showCalculator, setShowCalculator] = useState(false);
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set());
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes
  const [calculatorValue, setCalculatorValue] = useState('0');

  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = answers[currentQuestion.id];

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Load saved answer when question changes
  useEffect(() => {
    if (currentAnswer) {
      setSelectedOption(currentAnswer.selectedOption);
    } else {
      setSelectedOption(null);
    }
  }, [currentQuestionIndex, currentAnswer]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleOptionSelect = (optionIndex: number) => {
    if (!currentAnswer?.isSubmitted) {
      setSelectedOption(optionIndex);
    }
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;

    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: {
        selectedOption,
        isSubmitted: true,
        isCorrect
      }
    }));
  };

  const handleNavigation = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    } else if (direction === 'next' && currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const canNavigate = currentAnswer?.isSubmitted || false;

  const toggleFlag = () => {
    setFlaggedQuestions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(currentQuestion.id)) {
        newSet.delete(currentQuestion.id);
      } else {
        newSet.add(currentQuestion.id);
      }
      return newSet;
    });
  };

  const handleCalculatorInput = (input: string) => {
    if (input === 'C') {
      setCalculatorValue('0');
    } else if (input === '=') {
      try {
        const result = eval(calculatorValue);
        setCalculatorValue(result.toString());
      } catch {
        setCalculatorValue('Error');
      }
    } else {
      setCalculatorValue(prev => prev === '0' ? input : prev + input);
    }
  };

  const getOptionClass = (optionIndex: number) => {
    if (!currentAnswer?.isSubmitted) {
      return selectedOption === optionIndex 
        ? 'bg-blue-50 border-blue-500 text-blue-900' 
        : 'bg-white border-gray-300 hover:bg-gray-50';
    }

    if (optionIndex === currentQuestion.correctAnswer) {
      return 'bg-green-50 border-green-500 text-green-900';
    }

    if (selectedOption === optionIndex && !currentAnswer.isCorrect) {
      return 'bg-red-50 border-red-500 text-red-900';
    }

    return 'bg-gray-50 border-gray-300 text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-lg font-semibold text-gray-900">
              Item {currentQuestionIndex + 1} of {questions.length} | Question Id: {currentQuestion.questionId}
            </span>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Tarjima qilish
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          {/* Navigation */}
          <div className="flex items-center justify-between mb-6">
            <button 
              onClick={() => handleNavigation('prev')}
              disabled={currentQuestionIndex === 0 || !canNavigate}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Previous</span>
            </button>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleFlag}
                className={`p-2 rounded-lg transition-colors ${
                  flaggedQuestions.has(currentQuestion.id) 
                    ? 'bg-yellow-100 text-yellow-600' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <Edit3 className="w-5 h-5" />
              </button>
            </div>

            <button 
              onClick={() => handleNavigation('next')}
              disabled={currentQuestionIndex === questions.length - 1 || !canNavigate}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
            >
              <span>Next</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Question {currentQuestionIndex + 1}
            </h2>
            <p className="text-gray-800 leading-relaxed">
              {currentQuestion.question}
            </p>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-8">
            {currentQuestion.options.map((option, index) => (
              <label 
                key={index}
                className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${getOptionClass(index)}`}
              >
                <input
                  type="radio"
                  name="answer"
                  value={index}
                  checked={selectedOption === index}
                  onChange={() => handleOptionSelect(index)}
                  disabled={currentAnswer?.isSubmitted}
                  className="mt-1 w-4 h-4 text-blue-600"
                />
                <span className="flex-1">
                  <strong className="mr-2">{String.fromCharCode(65 + index)}.</strong>
                  {option}
                </span>
              </label>
            ))}
          </div>

          {/* Submit Button */}
          {!currentAnswer?.isSubmitted && (
            <div className="mb-6">
              <button
                onClick={handleSubmit}
                disabled={selectedOption === null}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
              >
                Submit Answer
              </button>
            </div>
          )}

          {/* Feedback */}
          {currentAnswer?.isSubmitted && (
            <div className={`p-4 rounded-lg mb-6 ${
              currentAnswer.isCorrect 
                ? 'bg-green-50 border border-green-200' 
                : 'bg-red-50 border border-red-200'
            }`}>
              <div className="flex items-center space-x-2 mb-2">
                {currentAnswer.isCorrect ? (
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                ) : (
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✗</span>
                  </div>
                )}
                <span className={`font-semibold ${
                  currentAnswer.isCorrect ? 'text-green-800' : 'text-red-800'
                }`}>
                  {currentAnswer.isCorrect ? 'Correct!' : 'Incorrect'}
                </span>
              </div>
              {currentQuestion.explanation && (
                <p className="text-gray-700 text-sm">
                  <strong>Explanation:</strong> {currentQuestion.explanation}
                </p>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Bottom Bar */}
      <footer className="bg-white border-t border-gray-200 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-gray-600" />
              <span className="font-mono text-lg font-semibold text-gray-900">
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors">
              Suspend Test
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
              End Test
            </button>
          </div>
        </div>
      </footer>

      {/* Floating Calculator Button */}
      <button
        onClick={() => setShowCalculator(true)}
        className="fixed right-6 bottom-20 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        <Calculator className="w-6 h-6" />
      </button>

      {/* Calculator Modal */}
      {showCalculator && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-80">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Calculator</h3>
              <button 
                onClick={() => setShowCalculator(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="mb-4">
              <input
                type="text"
                value={calculatorValue}
                readOnly
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-right text-lg font-mono"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {['C', '/', '*', '-', '7', '8', '9', '+', '4', '5', '6', '+', '1', '2', '3', '=', '0', '.', '='].map((btn, index) => (
                <button
                  key={index}
                  onClick={() => handleCalculatorInput(btn)}
                  className={`p-3 rounded-lg font-semibold transition-colors ${
                    btn === '=' ? 'bg-blue-600 text-white hover:bg-blue-700 col-span-2' :
                    ['C', '/', '*', '-', '+'].includes(btn) ? 'bg-gray-200 hover:bg-gray-300' :
                    'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;