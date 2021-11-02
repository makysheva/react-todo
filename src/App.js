import React from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import styles from './App.module.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const App = () => {
  const [mainList, setMainList] = React.useState([]);

  const onShowTodo = (arr) => {
    setMainList([...mainList, arr]);
  };

  const deleteTodo = (todoIndex) => {
    const newTodo = mainList.filter((_, index) => index !== todoIndex);
    setMainList(newTodo);
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
          <TodoList mainList={mainList} deleteTodo={deleteTodo} />
        </div>
      </CardContent>
    </Card>
  );
};

export default App;
