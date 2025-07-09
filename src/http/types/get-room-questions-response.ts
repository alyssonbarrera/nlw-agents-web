export type GetRoomQuestionsResponse = {
  questions: Array<{
    id: string
    question: string
    answer: string | null
    roomId: string
    createdAt: string
    isGeneratingAnswer?: boolean
  }>
}
