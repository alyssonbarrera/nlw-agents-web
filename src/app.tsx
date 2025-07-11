import { QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { queryClient } from './lib/react-query'
import { CreateRoom } from './pages/create-room'
import { RecordRoomAudio } from './pages/record-room-audio'
import { Room } from './pages/room'

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<CreateRoom />} index />
          <Route element={<Room />} path="/rooms/:roomId" />
          <Route element={<RecordRoomAudio />} path="/rooms/:roomId/audio" />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
