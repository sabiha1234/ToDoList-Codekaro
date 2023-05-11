import styles from './ProfileCard.module.css'
function ProfileCard() {
    return (
      
        <div className={styles.Card}>
            <img src="https://source.unsplash.com/1600x900/?boy" className={styles.cardimg}/>
            <h3>Arpit Khare</h3>
            <p>Co-founder & MD Biox Medical / Clinical Director Pallmall Medical</p>
            <button className={styles.btn}>Follow Now</button>
        </div>
      
    );
  }
  
  export default ProfileCard;
  