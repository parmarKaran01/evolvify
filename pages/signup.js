import styles from '../styles/signup.module.css'

export default function SignUp() {
  return (
    <>
      <h1 className={styles.maintitle}>Sign Up</h1>
      <div className={styles.container}>
        <form action="/api/signup" method="post" className={styles.form}>
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
          <input type="submit" value="Register" className={styles.btn} />
        </form>
      </div>
    </>
  );
}
