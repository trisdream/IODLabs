import { useState } from "react";
import "./App.css";
import { Clock } from "../components/Clock";
import { UserProvider } from "../context/UserContext";
import MyThemeProvider from "../context/ThemeContext";
import PostListReducer from "../components/PostListReducer";
import { LoginForm } from "../components/LoginForm";
import { EmojiProvider } from "../components/EmojiContext";
import { BitcoinRates } from "../components/BitcoinRates";
import ThemeSwitcher from "../components/ThemeSwitcher";

function App() {
  // Multiple context providers can be nested at the top level
  return (
    <>
      <UserProvider>
        {" "}
        {/* provider components at top level */}
        <MyThemeProvider>
          <PostListReducer />
          <LoginForm />
          <EmojiProvider>
            <BitcoinRates />
          </EmojiProvider>
        </MyThemeProvider>
      </UserProvider>
    </>
  );
}
export default App;
