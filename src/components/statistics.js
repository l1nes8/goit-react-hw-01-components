const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const Statistics = ({ title, dataList }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {dataList.map(data => (
          <li
            className="item"
            key={data.id}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className="label">{data.label} </span>
            <span className="percentage">{data.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
