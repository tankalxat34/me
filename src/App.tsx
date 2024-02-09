import styles from "./App.module.sass";
import AppRouter from "./routes/AppRouter";
import c from "./utils/classnames";

const App = () => {
  return (
    <div className={c(styles.app)}>
      <AppRouter />
    </div>
  );
};

export default App;
