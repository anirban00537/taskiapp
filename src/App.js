import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAndSetTaskAction } from "./state/action/TaskAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAndSetTaskAction());
  }, []);
  return <div className="Apps">ge</div>;
}

export default App;
