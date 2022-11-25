import logo from './logo.svg';
import AppStyle from './App.module.css';

function App() {
  return (
    <div className={AppStyle.App}>
      <header className={AppStyle.AppHeader}>
        <img src={logo} className={AppStyle.AppLogo} alt="logo" />
      </header>
    </div>
  );
}

export default App;
