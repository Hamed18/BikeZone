import MainLayout from "./components/layout/MainLayout";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <MainLayout />
      </ThemeProvider>
    </div>
  );
}

export default App;
