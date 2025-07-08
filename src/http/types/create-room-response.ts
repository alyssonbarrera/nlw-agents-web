export type CreateRoomResponse = {
  room: {
    id: string
    name: string
    description: string
    createdAt: string
    questionsCount: number
  }
}
