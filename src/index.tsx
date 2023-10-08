import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider/index';
import App from './app/App';

import 'shared/config/i18n/i18n';

render(
    <ThemeProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById('root'),
);
