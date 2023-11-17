import ReactDOM from "react-dom/client";
import { Link } from "./components/Link";

const element = (
  <div>
    <h1>Nasza Strona!</h1>
    <main>
      <Link text="Sprawdź strone kursu!" shouldOpenNewTab={true} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        repellendus veritatis officiis fuga sequi necessitatibus alias dicta
        omnis error deleniti.
      </p>
      <Link shouldOpenNewTab={false} />
    </main>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(element);
