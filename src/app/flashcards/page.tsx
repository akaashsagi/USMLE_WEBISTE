"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Brain, 
  RotateCcw, 
  CheckCircle,
  XCircle,
  Clock,
  BookOpen,
  Target,
  TrendingUp,
  Flame,
  Calendar,
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Flashcards() {
  const [currentCard, setCurrentCard] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [completedCards, setCompletedCards] = useState(0)

  const flashcards = [
    {
      id: 1,
      front: "What is the most common cause of right heart failure?",
      back: "Left heart failure (most common cause of right heart failure is left heart failure, leading to pulmonary hypertension and eventual right ventricular strain)",
      difficulty: "Medium",
      system: "Cardiovascular",
      nextReview: "Tomorrow",
      repetitions: 3
    },
    {
      id: 2,
      front: "Which enzyme is deficient in Pompe disease?",
      back: "Alpha-1,4-glucosidase (acid maltase) - leads to glycogen accumulation in lysosomes, particularly affecting cardiac and skeletal muscle",
      difficulty: "Hard",
      system: "Biochemistry",
      nextReview: "In 3 days",
      repetitions: 1
    },
    {
      id: 3,
      front: "What is the mechanism of action of ACE inhibitors?",
      back: "Block conversion of Angiotensin I to Angiotensin II by inhibiting ACE, reducing vasoconstriction and aldosterone release, also preventing bradykinin degradation",
      difficulty: "Easy",
      system: "Pharmacology",
      nextReview: "In 1 week",
      repetitions: 5
    }
  ]

  const handleAnswer = () => {
    // TODO: Implement spaced repetition algorithm based on difficulty
    
    setCompletedCards(prev => prev + 1)
    setShowAnswer(false)
    
    if (currentCard < flashcards.length - 1) {
      setCurrentCard(prev => prev + 1)
    } else {
      // Session complete
      setCurrentCard(0)
    }
  }

  const card = flashcards[currentCard]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">USMLE NextGen</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/dashboard" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-4 w-4 inline mr-1" />
              Back to Dashboard
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Session Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Flashcard Review</h1>
          <p className="text-gray-600">Spaced repetition system for long-term retention</p>
          
          {/* Progress Bar */}
          <div className="mt-6 bg-gray-200 rounded-full h-3 max-w-md mx-auto">
            <div 
              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${(completedCards / flashcards.length) * 100}%` }}
            ></div>
          </div>
          <div className="mt-2 text-sm text-gray-600">
            {completedCards} of {flashcards.length} cards completed
          </div>
        </div>

        {/* Session Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="text-center border-0 shadow-md">
            <CardContent className="p-4">
              <Calendar className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <div className="text-lg font-bold text-gray-900">23</div>
              <div className="text-xs text-gray-600">Due Today</div>
            </CardContent>
          </Card>
          
          <Card className="text-center border-0 shadow-md">
            <CardContent className="p-4">
              <Flame className="h-6 w-6 text-orange-600 mx-auto mb-2" />
              <div className="text-lg font-bold text-gray-900">7</div>
              <div className="text-xs text-gray-600">Day Streak</div>
            </CardContent>
          </Card>
          
          <Card className="text-center border-0 shadow-md">
            <CardContent className="p-4">
              <TrendingUp className="h-6 w-6 text-green-600 mx-auto mb-2" />
              <div className="text-lg font-bold text-gray-900">92%</div>
              <div className="text-xs text-gray-600">Retention Rate</div>
            </CardContent>
          </Card>
          
          <Card className="text-center border-0 shadow-md">
            <CardContent className="p-4">
              <Clock className="h-6 w-6 text-purple-600 mx-auto mb-2" />
              <div className="text-lg font-bold text-gray-900">12</div>
              <div className="text-xs text-gray-600">Minutes Left</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Flashcard */}
        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-xl min-h-[400px] relative overflow-hidden">
            {/* Card Header */}
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="text-sm font-medium text-blue-800">{card.system}</div>
                  <div className={`text-xs px-2 py-1 rounded-full ${
                    card.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                    card.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {card.difficulty}
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  Card {currentCard + 1} of {flashcards.length}
                </div>
              </div>
            </CardHeader>

            {/* Card Content */}
            <CardContent className="p-8 flex flex-col justify-center min-h-[300px]">
              <div className="text-center">
                {!showAnswer ? (
                  <>
                    <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-6" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 leading-relaxed">
                      {card.front}
                    </h3>
                    <Button 
                      onClick={() => setShowAnswer(true)}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      Show Answer
                    </Button>
                  </>
                ) : (
                  <>
                    <Target className="h-12 w-12 text-green-600 mx-auto mb-6" />
                    <div className="text-left bg-green-50 rounded-lg p-6 mb-6">
                      <p className="text-gray-800 leading-relaxed">{card.back}</p>
                    </div>
                    
                    {/* Answer Difficulty Buttons */}
                    <div className="space-y-3">
                      <p className="text-sm text-gray-600 mb-4">How well did you know this?</p>
                      <div className="grid gap-3">
                        <Button 
                          onClick={() => handleAnswer()}
                          variant="outline"
                          className="border-red-300 text-red-700 hover:bg-red-50"
                        >
                          <XCircle className="mr-2 h-4 w-4" />
                          Hard - Review tomorrow
                        </Button>
                        <Button 
                          onClick={() => handleAnswer()}
                          variant="outline"
                          className="border-yellow-300 text-yellow-700 hover:bg-yellow-50"
                        >
                          <RotateCcw className="mr-2 h-4 w-4" />
                          Medium - Review in 3 days
                        </Button>
                        <Button 
                          onClick={() => handleAnswer()}
                          variant="outline"
                          className="border-green-300 text-green-700 hover:bg-green-50"
                        >
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Easy - Review in 1 week
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </CardContent>

            {/* Card Footer */}
            <div className="px-6 py-4 bg-gray-50 border-t">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center space-x-4">
                  <span>Repetitions: {card.repetitions}</span>
                  <span>Next review: {card.nextReview}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowAnswer(!showAnswer)}
                  >
                    {showAnswer ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <Button 
              variant="outline" 
              onClick={() => setCurrentCard(Math.max(0, currentCard - 1))}
              disabled={currentCard === 0}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            
            <div className="text-sm text-gray-600">
              {currentCard + 1} / {flashcards.length}
            </div>
            
            <Button 
              variant="outline"
              onClick={() => setCurrentCard(Math.min(flashcards.length - 1, currentCard + 1))}
              disabled={currentCard === flashcards.length - 1}
            >
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Session Complete Modal - would appear when all cards are done */}
        {completedCards === flashcards.length && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <Card className="w-full max-w-md mx-4">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Session Complete!</CardTitle>
                <CardDescription>
                  Great job! You&apos;ve completed your flashcard review for today.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-gray-900">Cards Reviewed</div>
                    <div className="text-gray-600">{flashcards.length}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Time Spent</div>
                    <div className="text-gray-600">8 minutes</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Button className="w-full" asChild>
                    <Link href="/dashboard">Back to Dashboard</Link>
                  </Button>
                  <Button variant="outline" className="w-full" onClick={() => {
                    setCompletedCards(0)
                    setCurrentCard(0)
                    setShowAnswer(false)
                  }}>
                    Review Again
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}