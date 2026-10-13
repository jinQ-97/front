import CardRayout from './CardRayout';

const PerentCardLayout = () => {
    // props children : 컴포넌트 태그 사이에 넣은 내용을 전달받는 props

    return (
        <div>
            <CardRayout>
                <p>Props of Components</p>
            </CardRayout>
            <CardRayout title="Details">
                <ul>
                    <li>Feature A</li>
                    <li>Feature B</li>
                    <li>Feature C</li>
                </ul>
            </CardRayout>
            <CardRayout title="Contact">
                <p>Email : exapmle@exapmle.com</p>
                <p>Phone : 010-1234-5678</p>
            </CardRayout>
        </div>
    );
};

export default PerentCardLayout;