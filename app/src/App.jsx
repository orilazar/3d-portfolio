import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { About, Contact, Home, Main, NotFound } from "./pages";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider>
      <main className="bg-zinc-900" style={{ overflow: "hidden" }}>
        {/* <BrightnessEffect /> */}
        <Router>
          <Navbar />
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<Main />} />
            <Route
              path="/*"
              element={
                <>
                  <Routes>
                    <Route path="/about" element={<About />} />
                    {/* <Route path="/projects" element={<Projects />} /> */}
                    <Route path="/contact" element={<Contact />} />

                    <Route path="/*" element={<NotFound />} />
                  </Routes>
                  <Footer />
                </>
              }
            />
          </Routes>
        </Router>
      </main>
    </ChakraProvider>
  );
};

export default App;
