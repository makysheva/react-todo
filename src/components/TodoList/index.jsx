import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import Input from '@mui/material/Input';
import styles from './TodoList.module.scss';

const TodoList = ({ mainList, setMainList, deleteTodo, editTodo, toggleMode }) => {
  return (
    <Card sx={{ maxWidth: 500 }} className={styles.card}>
      <CardContent>
        <Box
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          className={styles.box}>
          {mainList.length
            ? mainList.map((item, i) => {
                return (
                  <List
                    key={i}
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    className={styles.list}>
                    <ListItem
                      className={styles.itemText}
                      secondaryAction={
                        <>
                          <IconButton
                            edge="end"
                            aria-label="edit"
                            className={styles.editBtn}
                            onClick={() => toggleMode(i)}>
                            {item.isEdit ? <SaveIcon /> : <EditIcon />}
                          </IconButton>
                          <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() => {
                              deleteTodo(i);
                            }}>
                            <DeleteIcon />
                          </IconButton>
                        </>
                      }
                      disablePadding>
                      <ListItemButton role={undefined} dense>
                        <ListItemIcon>
                          <Checkbox edge="start" tabIndex={-1} disableRipple />
                        </ListItemIcon>
                        {item.isEdit ? (
                          <Input
                            autoFocus
                            onChange={(event) => editTodo(i, 'text', event)}
                            value={item.text}></Input>
                        ) : (
                          <ListItemText primary={item.text}>{item.text}</ListItemText>
                        )}
                      </ListItemButton>
                    </ListItem>
                  </List>
                );
              })
            : 'Список пуст'}
        </Box>
      </CardContent>
    </Card>
  );
};

export default TodoList;
