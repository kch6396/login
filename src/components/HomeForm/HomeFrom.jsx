import { Header } from "./HomeForm.styles";

const HomeForm = () => {
  const user = localStorage.getItem("username");
  const id = localStorage.getItem("id");
  return (
    <Header>
      <div>username : {user}</div>
      <div>id : {id}</div>
    </Header>
  );
};

export default HomeForm;
