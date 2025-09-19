import { useTheme } from "../../context/ThemeContext"

export const ThemeTest = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <>
            <div className=" flex gap-3 items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white p-3">
                <h1 className="text-2xl font-bold">
                    {theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"}
                </h1>
                <button
                    onClick={toggleTheme}
                    className="mt-4 px-4 py-2 rounded bg-gray-200 dark:bg-gray-700"
                >
                    Toggle Theme
                </button>
            </div>
        </>
    )
}

