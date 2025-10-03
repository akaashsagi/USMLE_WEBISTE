import { create } from 'zustand'
import { User, Question, UserProgress, AITutorSession, QuizSettings } from '@/types'

interface AuthState {
  user: User | null
  isLoading: boolean
  error: string | null
  setUser: (user: User | null) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  clearError: () => void
}

interface QuestionState {
  currentQuestion: Question | null
  questionHistory: Question[]
  currentQuizSettings: QuizSettings | null
  isLoading: boolean
  error: string | null
  setCurrentQuestion: (question: Question | null) => void
  addToHistory: (question: Question) => void
  setQuizSettings: (settings: QuizSettings) => void
  clearHistory: () => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
}

interface ProgressState {
  userProgress: UserProgress | null
  isLoading: boolean
  error: string | null
  setUserProgress: (progress: UserProgress) => void
  updateReadinessScore: (score: number) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
}

interface TutorState {
  currentSession: AITutorSession | null
  isTyping: boolean
  error: string | null
  setCurrentSession: (session: AITutorSession | null) => void
  setIsTyping: (typing: boolean) => void
  setError: (error: string | null) => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: true,
  error: null,
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
  clearError: () => set({ error: null }),
}))

export const useQuestionStore = create<QuestionState>((set) => ({
  currentQuestion: null,
  questionHistory: [],
  currentQuizSettings: null,
  isLoading: false,
  error: null,
  setCurrentQuestion: (question) => set({ currentQuestion: question }),
  addToHistory: (question) => 
    set((state) => ({ 
      questionHistory: [...state.questionHistory, question] 
    })),
  setQuizSettings: (settings) => set({ currentQuizSettings: settings }),
  clearHistory: () => set({ questionHistory: [] }),
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
}))

export const useProgressStore = create<ProgressState>((set) => ({
  userProgress: null,
  isLoading: false,
  error: null,
  setUserProgress: (progress) => set({ userProgress: progress }),
  updateReadinessScore: (score) =>
    set((state) => ({
      userProgress: state.userProgress
        ? { ...state.userProgress, readinessScore: score }
        : null,
    })),
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
}))

export const useTutorStore = create<TutorState>((set) => ({
  currentSession: null,
  isTyping: false,
  error: null,
  setCurrentSession: (session) => set({ currentSession: session }),
  setIsTyping: (typing) => set({ isTyping: typing }),
  setError: (error) => set({ error }),
}))