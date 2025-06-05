import { SnackbarProvider } from "./Context/Snackbar"
import CustomRouter from "./Routes/index"
import Sidebar from "./Shared/SideBar"

function App() {

  return (
    <>
        <SnackbarProvider>
          <Sidebar children={<CustomRouter />}/>
        </SnackbarProvider>
    </>
  )
}

export default App
