import styles from '../styles/signup.module.css'

function signin() {
  return (
    <div className={styles.container}>
      <h1 className={styles.formtitle}>Login</h1>
      <form action="/api/signin" method="post" className={styles.form}>
        <label className={styles.label}>Email</label>
        <input
          type="text"
          placeholder="Enter the email"
          name="email"
          className={styles.input}
        />
        <label className={styles.label}>Password</label>
        <input
          type="password"
          placeholder="Enter the password"
          name="password"
          className={styles.input}
        />
        <input type="submit" value="Login" className={styles.btn} />
      </form>
    </div>
  );
}

export default signin;
