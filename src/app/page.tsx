import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { 
  Brain, 
  Target, 
  TrendingUp, 
  Play, 
  CheckCircle, 
  ArrowRight,
  Star,
  BookOpen,
  Zap,
  Shield,
  BarChart3
} from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">USMLE NextGen</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" size="sm" asChild>
              <Link href="/auth/signin">Sign In</Link>
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700" asChild>
              <Link href="/auth/signup">Start Free</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20"></div>
        <div className="container relative mx-auto px-4 py-24 sm:py-32">
          <div className="text-center max-w-4xl mx-auto">
            {/* Trust Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800 rounded-full text-sm font-medium text-green-700 dark:text-green-300 mb-8">
              <CheckCircle className="w-4 h-4 mr-2" />
              Trusted by 10,000+ medical students
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Master the USMLE with
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {" "}AI-Powered Learning
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Experience personalized AI tutoring, adaptive question banks, and comprehensive analytics designed by medical educators.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-4"
                asChild
              >
                <Link href="/dashboard">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-4" asChild>
                <Link href="#features">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Everything you need to excel
            </h2>
            <p className="text-xl text-gray-600">
              Our platform combines cutting-edge AI with proven learning methodologies 
              used by top medical schools worldwide.
            </p>
          </div>

          {/* Main Features Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-blue-900">AI Tutor (MedInsight)</CardTitle>
                <CardDescription className="text-blue-700">
                  24/7 personalized coaching with Socratic questioning and concept bridging
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-blue-600" /> Socratic hinting</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-blue-600" /> Misconception diagnosis</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-blue-600" /> Adaptive remediation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-green-900">Smart Question Bank</CardTitle>
                <CardDescription className="text-green-700">
                  Curated questions with advanced filtering and AI difficulty assessment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-green-800">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" /> Step 1, 2 CK, 3 coverage</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" /> Organ system filtering</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" /> Video explanations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-purple-900">Predictive Analytics</CardTitle>
                <CardDescription className="text-purple-700">
                  Advanced performance tracking with exam readiness scoring
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-purple-800">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-purple-600" /> Readiness score prediction</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-purple-600" /> Weakness identification</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-purple-600" /> Study recommendations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-orange-900">Spaced Repetition</CardTitle>
                <CardDescription className="text-orange-700">
                  Research-backed flashcard system for long-term retention
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-orange-800">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-orange-600" /> SuperMemo algorithm</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-orange-600" /> Active recall training</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-orange-600" /> Automated scheduling</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Feature Highlight */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                  <Star className="w-4 h-4 mr-1" />
                  Most Advanced Feature
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  MedInsight AI Tutor
                </h3>
                <p className="text-gray-600 mb-6">
                  Our flagship AI tutor uses advanced natural language processing to provide 
                  personalized explanations, identify knowledge gaps, and guide you through 
                  complex medical concepts using the Socratic method.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <Shield className="w-5 h-5 mr-3 text-green-500" />
                    <span>HIPAA-compliant and secure</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <BookOpen className="w-5 h-5 mr-3 text-blue-500" />
                    <span>Covers all USMLE topics comprehensively</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <TrendingUp className="w-5 h-5 mr-3 text-purple-500" />
                    <span>Adapts to your learning style</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl p-8">
                <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">AI</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-800">
                        &ldquo;Let&apos;s explore this ECG together. What do you notice about the ST segments in leads II, III, and aVF?&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">You</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-800">
                        &ldquo;I see ST elevation in those leads. That suggests an inferior MI, right?&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the plan that fits your study timeline. All plans include full access to our AI tutor and question bank.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card className="border-2 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Free</CardTitle>
                <div className="text-4xl font-bold text-muted-foreground my-4">$0</div>
                <CardDescription>Perfect for getting started</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-green-600" />50 practice questions/month</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-green-600" />Basic AI tutor access</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-green-600" />Performance tracking</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-green-600" />Study mode access</li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/dashboard">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="border-2 border-blue-500 hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Pro</CardTitle>
                <div className="text-4xl font-bold text-blue-600 my-4">$29</div>
                <CardDescription>For serious USMLE preparation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-green-600" />Unlimited practice questions</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-green-600" />Advanced AI tutor with explanations</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-green-600" />Detailed analytics dashboard</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-green-600" />Spaced repetition flashcards</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-green-600" />Video explanations</li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/dashboard">Start Free Trial</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="border-2 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Premium</CardTitle>
                <div className="text-4xl font-bold text-purple-600 my-4">$49</div>
                <CardDescription>Complete USMLE mastery</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-green-600" />Everything in Pro</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-green-600" />Personalized study plans</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-green-600" />1-on-1 tutor sessions</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-green-600" />Predictive scoring</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-green-600" />Priority support</li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                  <Link href="/dashboard">Start Free Trial</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Built by Medical Educators, Powered by AI
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                USMLE NextGen was created by a team of medical educators and AI researchers who understand 
                the challenges of medical school and board preparation. Our platform combines proven 
                educational methodologies with cutting-edge artificial intelligence.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Evidence-Based Learning</h3>
                    <p className="text-muted-foreground">Our methods are backed by cognitive science research and proven in medical education.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Personalized Experience</h3>
                    <p className="text-muted-foreground">AI adapts to your learning style, strengths, and areas for improvement.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Continuous Innovation</h3>
                    <p className="text-muted-foreground">We constantly update our platform based on student feedback and the latest in medical education.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-blue-100 dark:bg-blue-950/50 p-6 rounded-xl">
                    <Brain className="h-8 w-8 text-blue-600 mb-2" />
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100">AI-Powered</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300">Advanced machine learning</p>
                  </div>
                  <div className="bg-green-100 dark:bg-green-950/50 p-6 rounded-xl">
                    <Shield className="h-8 w-8 text-green-600 mb-2" />
                    <h4 className="font-semibold text-green-900 dark:text-green-100">Secure</h4>
                    <p className="text-sm text-green-700 dark:text-green-300">HIPAA compliant platform</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-purple-100 dark:bg-purple-950/50 p-6 rounded-xl">
                    <BookOpen className="h-8 w-8 text-purple-600 mb-2" />
                    <h4 className="font-semibold text-purple-900 dark:text-purple-100">Comprehensive</h4>
                    <p className="text-sm text-purple-700 dark:text-purple-300">All USMLE steps covered</p>
                  </div>
                  <div className="bg-orange-100 dark:bg-orange-950/50 p-6 rounded-xl">
                    <Star className="h-8 w-8 text-orange-600 mb-2" />
                    <h4 className="font-semibold text-orange-900 dark:text-orange-100">Proven</h4>
                    <p className="text-sm text-orange-700 dark:text-orange-300">95% pass rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Proven Results That Speak for Themselves
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of medical students who have already improved their USMLE scores
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Pass Rate</div>
              <div className="text-sm text-gray-500">First attempt</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">+25</div>
              <div className="text-gray-600">Score Improvement</div>
              <div className="text-sm text-gray-500">Average points</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">10k+</div>
              <div className="text-gray-600">Active Students</div>
              <div className="text-sm text-gray-500">Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">4.9★</div>
              <div className="text-gray-600">Student Rating</div>
              <div className="text-sm text-gray-500">Based on 2,500+ reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to transform your USMLE preparation?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Start your free trial today and experience the power of AI-driven medical education. 
            No credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button 
              size="lg" 
              variant="secondary" 
              className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
              asChild
            >
              <Link href="/auth/signup">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
              asChild
            >
              <Link href="/demo">
                Schedule Demo
              </Link>
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-6 text-blue-200 text-sm">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              Free 14-day trial
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              No credit card required
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-gray-900">USMLE NextGen</span>
              </div>
              <p className="text-sm text-gray-600">
                AI-powered USMLE preparation platform designed for medical student success.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Product</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="#features" className="hover:text-gray-900">Features</Link></li>
                <li><Link href="/demo" className="hover:text-gray-900">Demo</Link></li>
                <li><Link href="/pricing" className="hover:text-gray-900">Pricing</Link></li>
                <li><Link href="/api" className="hover:text-gray-900">API</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/blog" className="hover:text-gray-900">Blog</Link></li>
                <li><Link href="/guides" className="hover:text-gray-900">Study Guides</Link></li>
                <li><Link href="/support" className="hover:text-gray-900">Support</Link></li>
                <li><Link href="/community" className="hover:text-gray-900">Community</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/about" className="hover:text-gray-900">About</Link></li>
                <li><Link href="/careers" className="hover:text-gray-900">Careers</Link></li>
                <li><Link href="/privacy" className="hover:text-gray-900">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-gray-900">Terms</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t pt-8 text-center text-sm text-gray-600">
            <p>&copy; 2024 USMLE NextGen. All rights reserved. Built for medical students, by medical educators.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
