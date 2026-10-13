import InfoCard, { type Card } from "./InfoCard";

const Card = () => {
    // 화면에 보여줄 데이터 따로 작업
    const cards:Card[] = [
        {
            idx : 1,
            title :"Props in React",
            content :"Props pass data from one component to another.",
            author :"Alice",
        },
        {
            idx : 2,
            title :"React Compositio",
            content :"Props pass data from one component to another.", 
            author :"Charlie",
        },
        { title:"React Props" },
    ]

    return (
        <div>
            {/* 자바스크립트 코드 {} */}
            {cards.map((card) => (<InfoCard key={card.idx} title={card.title} content={card.content} author={card.author}/>))}
        </div>
    );
};

export default Card;