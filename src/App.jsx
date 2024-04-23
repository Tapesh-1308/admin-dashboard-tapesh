import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./pages/global/Topbar";
import { Outlet } from "react-router-dom";
import Sidebar from "./pages/global/Sidebar";
import { useMemo, useState } from "react";

const App = () => {
	const [theme, colorMode] = useMode();
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [isToggled, setIsToggled] = useState(false);

	const matches = useMediaQuery('(min-width:769px)');
	const memoizedOutletContent = useMemo(() => <Outlet />, []);
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className="app">
					<Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} isToggled={isToggled} toggleSideBar={() => setIsToggled(!isToggled)}/>
          <main className="content" style={{ paddingLeft:  matches && (!isCollapsed ? "250px" : "80px"), transitionDelay: "240ms"}}>
            <Topbar toggleSideBar={() => setIsToggled(!isToggled)}/>
						{memoizedOutletContent}
          </main>
        </div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
};

export default App;
