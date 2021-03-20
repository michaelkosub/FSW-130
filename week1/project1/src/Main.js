import React from "react"
import ThemeContext from "./ThemeContext"

const Main = () => {
    return ( 
        <main>
            <ThemeContext.Consumer>
                {theme => (
                    <div className={`${theme.style}-main flex-center flex-column`}>
                        <h1>Click to change the theme!</h1>
                        <div className={`${theme.style}-button dropdown`}>
                            <button className={`${theme.style}-button`}>Click</button>
                            <div className="dropdown-content">
                                <a href="#" onClick={() => {theme.setTheme("light")}}>Light</a>
                                <a href="#" onClick={() => {theme.setTheme("dark")}}>Dark</a>
                            </div>
                        </div>
                    </div>
                )}
            </ThemeContext.Consumer>
        </main>
    );
}

export default Main