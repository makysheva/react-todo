import React from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import styles from './App.module.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const App = () => {
  const [mainList, setMainList] = React.useState([]);

  const onShowTodo = (obj) => {
    setMainList([...mainList, obj]);
  };

  const deleteTodo = (todoIndex) => {
    const newTodo = mainList.filter((_, index) => index !== todoIndex);
    setMainList(newTodo);
  };

  const editTodo = (i, field, event) => {
    setMainList(
      mainList.map((todo, index) => {
        if (index === i) {
          todo[field] = event.target.value;
        }

        return todo;
      }),
    );
  };

  const toggleMode = (i) => {
    setMainList(
      mainList.map((todo, index) => {
        if (index === i) {
          todo.isEdit = !todo.isEdit;
        }

        return todo;
      }),
    );
  };

  return (
    <Card sx={{ maxWidth: 550 }} className={styles.card}>
      <CardContent>
        <div className={styles.container}>
          <h2>React Todo</h2>
          <Form onShow={onShowTodo} />
        </div>

        <div className={styles.container}>
          <h2>Задачи</h2>
          <TodoList
            mainList={mainList}
            setMainList={setMainList}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleMode={toggleMode}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default App;
