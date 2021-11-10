import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './Form.module.scss';

const Form = ({ onShow }) => {
  const [field, setField] = React.useState({ text: '', isEdit: false });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setField({ ...field, [name]: value, isEdit: false });
  };

  const handleClickAdd = () => {
    if (onShow) {
      onShow(field);
    }

    setField({ text: '', isEdit: false });
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
            value={field.text}
            name="text"
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
