"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { useDashboardAccess } from "@/context/DashboardAccessContext"
import { useSession, signOut } from "next-auth/react"
import { useEffect } from "react"
import Link from "next/link"
import { 
  Brain, 
  Target, 
  TrendingUp, 
  Clock, 
  Award, 
  BookOpen,
  Play,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Flame,
  Calendar,
  Settings,
  LogOut
} from "lucide-react"

export default function Dashboard() {
  const { setHasVisitedDashboard } = useDashboardAccess();
  const { data: session, status } = useSession();

  useEffect(() => {
    setHasVisitedDashboard(true);
  }, [setHasVisitedDashboard]);

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
          <nav className="flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/dashboard" className="text-sm font-medium text-blue-600 border-b-2 border-blue-600">
              Dashboard
            </Link>
            <Link href="/study-modes" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Study Modes
            </Link>
            <Link href="/questions" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Questions
            </Link>
            <Link href="/analytics" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Analytics
            </Link>
            <Link href="/tutor" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              AI Tutor
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" size="sm" asChild>
              <Link href="/settings">
                <Settings className="h-4 w-4" />
              </Link>
            </Button>
            
            {/* User Menu */}
            <div className="relative group">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center cursor-pointer">
                {session?.user?.image ? (
                  <img 
                    src={session.user.image} 
                    alt="Profile" 
                    className="w-8 h-8 rounded-full"
                  />
                ) : (
                  <span className="text-white text-sm font-bold">
                    {session?.user?.name?.charAt(0).toUpperCase() || 'U'}
                  </span>
                )}
              </div>
              
              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  {session?.user && (
                    <>
                      <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b">
                        <div className="font-medium">{session.user.name}</div>
                        <div className="text-gray-500">{session.user.email}</div>
                      </div>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-left text-red-600 hover:text-red-700 hover:bg-red-50"
                        onClick={() => signOut({ callbackUrl: "/" })}
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Sign Out
                      </Button>
                    </>
                  )}
                  {!session && (
                    <Button variant="ghost" className="w-full justify-start" asChild>
                      <Link href="/auth/signin">
                        Sign In
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Good morning, {session?.user?.name?.split(' ')[0] || 'Student'}! 👋
              </h1>
              <p className="text-muted-foreground mt-1">
                Ready to continue your USMLE preparation?
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Current Streak</div>
              <div className="flex items-center text-orange-600 font-semibold">
                <Flame className="w-5 h-5 mr-1" />
                7 days
              </div>
            </div>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-900">Readiness Score</CardTitle>
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <Award className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-700 mb-1">78%</div>
              <div className="flex items-center text-xs text-blue-600">
                <TrendingUp className="w-3 h-3 mr-1" />
                +5% from last week
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-900">Questions Completed</CardTitle>
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <Target className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-700 mb-1">1,247</div>
              <div className="flex items-center text-xs text-green-600">
                <CheckCircle className="w-3 h-3 mr-1" />
                85% accuracy rate
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-purple-900">Study Time</CardTitle>
              <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                <Clock className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-700 mb-1">142h</div>
              <div className="flex items-center text-xs text-purple-600">
                <Calendar className="w-3 h-3 mr-1" />
                23h this week
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-orange-900">Concepts Mastered</CardTitle>
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <BookOpen className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-700 mb-1">384</div>
              <div className="flex items-center text-xs text-orange-600">
                <BarChart3 className="w-3 h-3 mr-1" />
                78% complete
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Core Study Features */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Your Study Hub</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Study Modes */}
            <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg text-blue-900">Study Modes</CardTitle>
                <CardDescription className="text-blue-700">Flashcards, Practice Tests, Quick Revise, Focus Mode</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/study-modes">
                    <Play className="mr-2 h-4 w-4" />
                    Start Studying
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Question Bank */}
            <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg text-green-900">Question Bank</CardTitle>
                <CardDescription className="text-green-700">AI-curated questions by subject & topic</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                  <Link href="/questions">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Practice Now
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Analytics */}
            <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg text-purple-900">Analytics</CardTitle>
                <CardDescription className="text-purple-700">Performance tracking, strengths & weaknesses</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                  <Link href="/analytics">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    View Progress
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* AI Tutor */}
            <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg text-orange-900">AI Tutor</CardTitle>
                <CardDescription className="text-orange-700">Personalized hints, explanations & study plans</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="w-full bg-orange-600 hover:bg-orange-700" asChild>
                  <Link href="/tutor">
                    <Brain className="mr-2 h-4 w-4" />
                    Chat Now
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Quick Practice</CardTitle>
                    <CardDescription className="text-sm">AI-selected weak areas</CardDescription>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                <span>20 questions</span>
                <span>~25 min</span>
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700" asChild>
                <Link href="/questions">Start Practice</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">AI Tutor Chat</CardTitle>
                    <CardDescription className="text-sm">Get personalized help</CardDescription>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-green-600 transition-colors" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-gray-600 mb-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span>MedInsight is online</span>
              </div>
              <Button className="w-full bg-gradient-to-r from-green-600 to-green-700" asChild>
                <Link href="/tutor">Chat with AI</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Flashcards Due</CardTitle>
                    <CardDescription className="text-sm">Spaced repetition review</CardDescription>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                <span>15 cards due</span>
                <span>~10 min</span>
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700">
                Review Cards
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Performance Analytics */}
        <div className="grid gap-6 lg:grid-cols-3 mb-8">
          <Card className="lg:col-span-2 border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl">Performance by System</CardTitle>
                  <CardDescription>Your accuracy across different organ systems</CardDescription>
                </div>
                <Button variant="outline" size="sm">View Details</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { system: "Cardiovascular", accuracy: 92, color: "bg-green-500", questions: 145 },
                  { system: "Respiratory", accuracy: 85, color: "bg-blue-500", questions: 120 },
                  { system: "Nervous System", accuracy: 68, color: "bg-red-500", questions: 89 },
                  { system: "Gastrointestinal", accuracy: 78, color: "bg-yellow-500", questions: 102 },
                  { system: "Endocrine", accuracy: 74, color: "bg-purple-500", questions: 67 },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 flex-1">
                      <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                      <span className="text-sm font-medium text-gray-800">{item.system}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${item.color}`}
                          style={{ width: `${item.accuracy}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-700 w-12 text-right">
                        {item.accuracy}%
                      </span>
                      <span className="text-xs text-gray-500 w-16 text-right">
                        {item.questions} qs
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Today&apos;s Goals</CardTitle>
              <CardDescription>Your daily targets</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Practice Questions</span>
                  <span className="text-sm text-gray-500">18/25</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '72%' }}></div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Study Time</span>
                  <span className="text-sm text-gray-500">1.5/2 hours</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Flashcard Reviews</span>
                  <span className="text-sm text-gray-500">8/15</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '53%' }}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Recommendations */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Brain className="h-6 w-6 text-blue-600" />
              <CardTitle className="text-xl">AI-Powered Recommendations</CardTitle>
            </div>
            <CardDescription>Personalized study suggestions based on your performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="h-5 w-5 text-red-600" />
                  <span className="font-semibold text-red-800">Priority Focus</span>
                </div>
                <p className="text-sm text-red-700 mb-3">
                  Your Nervous System performance is below target. Focus on neuroanatomy and pathophysiology.
                </p>
                <Button size="sm" variant="outline" className="border-red-300 text-red-700 hover:bg-red-100">
                  Start Focused Practice
                </Button>
              </div>

              <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold text-blue-800">Spaced Review</span>
                </div>
                <p className="text-sm text-blue-700 mb-3">
                  15 cardiology flashcards are due for review to maintain long-term retention.
                </p>
                <Button size="sm" variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100">
                  Review Cards
                </Button>
              </div>

              <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-green-800">Strength</span>
                </div>
                <p className="text-sm text-green-700 mb-3">
                  Excellent cardiovascular performance! Consider teaching concepts to reinforce learning.
                </p>
                <Button size="sm" variant="outline" className="border-green-300 text-green-700 hover:bg-green-100">
                  Explore Advanced
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}