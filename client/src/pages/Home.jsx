import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.icon}>💰</div>
        <h1 className={styles.title}>Controle de Gastos</h1>
        <p className={styles.subtitle}>
          Gerencie suas despesas e receitas de forma simples e eficiente.
        </p>
        <div className={styles.buttons}>
          <button className={styles.btnPrimary} onClick={() => navigate('/login')}>
            Entrar
          </button>
          <button className={styles.btnSecondary} onClick={() => navigate('/register')}>
            Criar conta
          </button>
        </div>
      </div>
    </div>
  )
}
