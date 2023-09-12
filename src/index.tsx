import { render } from "react-dom";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider/index";

import "shared/config/routeConfig/i18n/i18n";

render(
    <ThemeProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById('root'),
)