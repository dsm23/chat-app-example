import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Button } from "~/components/button";
import { ThemeProvider } from "~/components/theme-provider";
import { ThemeSwitcher } from "~/components/theme-switcher";
import Auth from "~/pages/auth";
import Chat from "~/pages/chat";
import Profile from "~/pages/profile";

const App = () => (
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <main>
                <section className="bg-white dark:bg-gray-900">
                  <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
                    <div className="mx-auto place-self-center">
                      <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
                        Vite Enterprise Boilerplate
                      </h1>
                      <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                        Jumpstart your enterprise project with our
                        feature-packed, high-performance Vite boilerplate!
                        Experience rapid UI development, AI-powered code
                        reviews, and an extensive suite of tools for a smooth
                        and enjoyable development process.
                      </p>

                      <Button asChild>
                        <a
                          href="https://github.com/dsm23/dsm23-vite-spa-template"
                          className="mr-3"
                        >
                          Get started
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href="https://vercel.com/new/git/external?repository-url=https://github.com/dsm23/dsm23-vite-spa-template/">
                          Deploy Now
                        </a>
                      </Button>
                    </div>
                  </div>
                </section>
              </main>
              <footer className="mx-auto flex w-full items-center justify-center border-t py-16 text-center text-xs">
                <ThemeSwitcher />
              </footer>
            </>
          }
        />
        <Route path="/auth" element={<Auth />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
