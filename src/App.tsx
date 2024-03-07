import ListGroup from "./components/ListGroup";

function App() {
  let items = ["BeiJing", "ShangHai", "ShenZheng", "GuangZhou"];

  const handleClick = (item: string) => console.log(item);

  return (
    <>
      <ListGroup items={items} heading="Cities" selectItem={handleClick} />
    </>
  );
}

export default App;
