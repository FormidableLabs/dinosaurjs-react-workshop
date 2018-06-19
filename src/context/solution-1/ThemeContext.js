import { createContext } from "react";

const { Provider, Consumer } = createContext({
  color: "deeppink"
});

export { Provider, Consumer };
