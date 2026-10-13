import styles from "./Card.module.css";


// interface 타입지정 , export = 외부에서 사용가능
export interface Card{
    idx?:number; // ? : 있을 수도 있고 없을 수도 있다
    title:string;
    content?:string;
    author?:string;
}

const InfoCard = ({idx, title, content='(No Content)', author}:Card) => {
    return (
        <div className={styles.card} key={idx}>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>Author : {author}</p>
        </div>
    );
};

export default InfoCard;