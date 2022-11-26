import Header from './template/default/components/header/default/Header';
import mainStyle from './App.module.css';
import templFontStyle from './template/default/css/fonts.module.css';
import templStyle from './template/default/css/style.module.css';

function App() {
  return (
    <div className={ templStyle.content }>
      <Header/>
    </div>
  );
}

export default App;
