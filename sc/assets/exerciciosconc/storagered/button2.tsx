import { UseTheme } from "@/reducers/DAL"

export const ThemeS = () => {
    const ThemeCtx = UseTheme()
    function HandT() {
        if (ThemeCtx) {
            ThemeCtx?.setTheme(ThemeCtx.theme === 'dark' ? 'light' : 'dark')
        }
    }

    return (
        <div
            className="fixed top-0 left-0 right-0 text-center p-3 cursor-pointer"
            onClick={HandT}>
            {ThemeCtx?.theme === 'dark' ? 'Change to Dark' : 'Change to Light'}
        </div>
    )
}