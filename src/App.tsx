import { SnackbarProvider } from "./Context/Snackbar"
import CustomRouter from "./Routes/index"

function App() {

  return (
    <>
        <SnackbarProvider>
        <CustomRouter />
        </SnackbarProvider>
    </>
  )
}

export default App
