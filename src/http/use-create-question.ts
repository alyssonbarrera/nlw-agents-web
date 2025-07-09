import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { CreateQuestionRequest } from './types/create-question-request'
import type { CreateQuestionResponse } from './types/create-question-response'
import type { GetRoomQuestionsResponse } from './types/get-room-questions-response'

export function useCreateQuestion(roomId: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: CreateQuestionRequest) => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      )

      const result: CreateQuestionResponse = await response.json()

      return result
    },
    onMutate: ({ question }) => {
      const data = queryClient.getQueryData<GetRoomQuestionsResponse>([
        'get-questions',
        roomId,
      ])

      const questionsArray = data?.questions ?? []

      const newQuestion = {
        id: crypto.randomUUID(),
        roomId,
        question,
        answer: null,
        createdAt: new Date().toISOString(),
        isGeneratingAnswer: true,
      }

      queryClient.setQueryData<GetRoomQuestionsResponse>(
        ['get-questions', roomId],
        {
          questions: [newQuestion, ...questionsArray],
        }
      )

      return { newQuestion, previousQuestions: questionsArray }
    },

    onSuccess: (data, _variables, context) => {
      queryClient.setQueryData<GetRoomQuestionsResponse>(
        ['get-questions', roomId],
        (oldData) => {
          if (!oldData) {
            return oldData
          }

          if (!context.newQuestion) {
            return oldData
          }

          return {
            questions: oldData.questions.map((question) => {
              if (question.id === context.newQuestion.id) {
                return {
                  ...data.question,
                  isGeneratingAnswer: false,
                }
              }

              return question
            }),
          }
        }
      )
    },

    onError: (_error, _variables, context) => {
      if (context?.previousQuestions) {
        queryClient.setQueryData<GetRoomQuestionsResponse>(
          ['get-questions', roomId],
          {
            questions: context.previousQuestions,
          }
        )
      }
    },
  })
}
