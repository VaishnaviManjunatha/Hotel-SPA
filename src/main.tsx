import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

{
  /*Below is the coding attempt for fetching details using Mock API*/
}
// async function deferRender() {
//   const { worker } = await import("./mocks/browser.ts");
//   return worker.start({
//     serviceWorker: {
//       url: "/mockServiceWorker.js",
//     },
//   });
// }

// deferRender().then(() => {
//   createRoot(document.getElementById("root")!).render(
//     <StrictMode>
//       <App />
//     </StrictMode>
//   );
// });
