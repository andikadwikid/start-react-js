import Button from "./components/Elements/button";

function App() {
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
      <div className="flex gap-x-3">
        <Button variant="bg-green-600">Login</Button>
        <Button variant="bg-slate-600">Register</Button>
        <Button></Button>
      </div>
    </div>
  );
}

export default App;
