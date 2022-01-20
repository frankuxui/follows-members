import styles from './Loader.module.css'
import classNames from 'classnames'

const Screen = ({children}) => {
  return (
    <div className={styles.Screen}>
      {children}
    </div>
  )
}

const Balls = ({children}) => {
  return (
    <div className={styles.Balls}>
      {children}
    </div>
  )
}

const LoadingScreen = () => {
  return (
    <Screen>
      <Balls>
        <div className={classNames(styles.Ball, styles.one)}></div>
        <div className={classNames(styles.Ball, styles.two)}></div>
        <div className={classNames(styles.Ball, styles.three)}></div>
      </Balls>
    </Screen>
  );
};

export default LoadingScreen