import { PinContextProvider } from './component/context/PinContextProvider'
import { PinPage } from './pages/main_content/PinContext'

export default function App() {
	return <PinContextProvider children={<PinPage />} />
}
