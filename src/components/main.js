function Main(props) {
  return (
    <main className="mainPage">
      <section className="mainIntro">{props.children[0]}</section>
      <div className="mainLayout">
        <section className="mainLeft">{props.children[1]}</section>
        <aside className="mainRight">{props.children[2]}</aside>
      </div>
    </main>
  );
}

export default Main;