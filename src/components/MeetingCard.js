import styles from './MeetingCard.module.css'

function MeetingCard() {
    return (
      
        <div className={styles.Card}>
            <img src="https://source.unsplash.com/1600x900/?salad" className={styles.cardImg} />
            <h3>Arpit Khare</h3>
            <p>Co-founder & MD Biox Medical / Clinical Director Pallmall Medical</p>
            <button className={styles.btn}>Join Meeting</button>
        </div>
      
    );
  }
  
  export default MeetingCard;
  