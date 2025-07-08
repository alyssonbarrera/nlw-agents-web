import { useQuery } from '@tanstack/react-query'
import { Loader } from 'lucide-react'
import { Link } from 'react-router-dom'

type GetRoomsAPIResponse = {
  id: string
  name: string
  description: string
  createdAt: string
}

export function CreateRoom() {
  const { data, isLoading } = useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/rooms')
      const result: GetRoomsAPIResponse[] = await response.json()

      return result
    },
  })

  return (
    <div>
      <h1>Create Room</h1>

      {isLoading && <Loader className="animate-spin" />}
      <div className="flex flex-col gap-1">
        {data?.map((room) => (
          <Link key={room.id} to={`/room/${room.id}`}>
            {room.name}
          </Link>
        ))}
      </div>

      <Link className="underline" to="/room">
        Acessar sala
      </Link>
    </div>
  )
}
