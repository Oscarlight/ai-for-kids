import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router as WouterRouter } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import CoursePage from "./pages/CoursePage";
import ShowSharePage from "./pages/ShowSharePage";

// Detect base path from Vite's import.meta.env.BASE_URL
const base = import.meta.env.BASE_URL || "/";

function AppRouter() {
  return (
    <WouterRouter base={base.endsWith("/") ? base.slice(0, -1) : base}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/course/:id"} component={CoursePage} />
        <Route path={"/show-share/:id"} component={ShowSharePage} />
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <LanguageProvider defaultLang="zh">
          <TooltipProvider>
            <Toaster />
            <AppRouter />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
