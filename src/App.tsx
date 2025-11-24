import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <>
      <MainLayout>
        <HomePage />
      </MainLayout>
    </>
  );
}

export default App;
