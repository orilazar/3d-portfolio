import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Navbar, ScrollProvider } from "./components";
import { About, Contact, Main, NotFound } from "./pages";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider>
      <ScrollProvider>
        <main className="bg-zinc-900" style={{ overflow: "hidden" }}>
          {/* <BrightnessEffect /> */}
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route
                path="/*"
                element={
                  <>
                    <Routes>
                      <Route path="/*" element={<NotFound />} />
                    </Routes>
                  </>
                }
              />
            </Routes>
          </Router>
        </main>
      </ScrollProvider>
    </ChakraProvider>
  );
};

export default App;
