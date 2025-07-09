export type CreateQuestionResponse = {
  question: {
    id: string
    roomId: string
    question: string
    answer: string | null
    similarity: number
    createdAt: string
  }
}
