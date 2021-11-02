import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './Form.module.scss';

const Form = ({ onShow }) => {
  const [todo, setTodo] = React.useState([]);
  const [field, setField] = React.useState([]);

  const onChangeInput = (e) => {
    const { value } = e.target;
    setField(value);
  };

  const handleClickAdd = () => {
    setTodo([...todo, field]);

    if (onShow) {
      onShow([...todo, field]);
    }

    setField([]);
    setTodo([]);
  };

  return (
    <Card sx={{ maxWidth: 500 }} className={styles.card}>
      <CardContent>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          className={styles.box}>
          <TextField
            required
            id="outlined-required"
            value={field}
            onChange={onChangeInput}
            placeholder="Введите задачу"
            className={styles.textfield}
          />

          <Button variant="contained" className={styles.btn} onClick={handleClickAdd}>
            Добавить
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Form;
