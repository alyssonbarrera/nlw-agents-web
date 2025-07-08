export type GetRoomsResponse = {
  rooms: Array<{
    id: string
    name: string
    description: string
    createdAt: string
    questionsCount: number
  }>
}
