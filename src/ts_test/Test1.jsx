import "./Test1.css"

export default function Test1() {
    const todoItems = [
        {
            date: "三月22",
            title: "学习React",
            duration: 40
        },
        {
            date: "三月23",
            title: "学习Vue",
            duration: 80
        },
        {
            date: "三月24",
            title: "学习Webpack",
            duration: 20
        },
        {
            date: "三月25",
            title: "学习Javascript",
            duration: 40
        }
    ];

    return (
        <div className="Test1">
            This is Test1!
            <div className="itemsContainer borderDesc">
                {todoItems.map((item) => (
                    <div key={item.date} className="todoItems borderDesc">
                        <div>{item.date}</div>
                        <div>{item.title}</div>
                        <div>{item.duration}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
