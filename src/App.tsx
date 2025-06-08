import { SnackbarProvider } from "./Context/Snackbar"
import CustomRouter from "./Routes/index"
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient()
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SnackbarProvider>
          <CustomRouter />
        </SnackbarProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
