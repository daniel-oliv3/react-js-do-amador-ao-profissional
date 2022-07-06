import { createRoot } from 'react-dom/client';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import App from './App';

const root = document.querySelector("#root");
createRoot(root).render(<App/>);