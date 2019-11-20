import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import green from '@material-ui/core/colors/green';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginTop: 15,
    background: "#fff"
  },
  title: {
    fontSize: 20,
    letterSpacing: "2px",
    lineHeight: "50%",
    marginTop: "15px"
  },
  pos: {
    marginBottom: 12,
  },
});

function Todo({deleteTodo, completeTodo, todo, key, id}){
  const classes = useStyles();


  return (
    <>
    <Card className={classes.card} key={key}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom style={{textDecoration: todo.isCompleted ? 'line-through': ''}}>
          {todo.text}
        </Typography>
      </CardContent>
      <Button onClick={() => deleteTodo(id)} variant="contained" size="small" color="secondary">
          X
      </Button>
      <Button onClick={() => completeTodo(id)} variant="contained" size="small" style={deleteButton}>
          <span role="img" aria-label="complete">V</span>
      </Button>
    </Card>
    </>
  );
}

export default Todo;

const deleteButton = {
  background: `${green[500]}`,
  color: '#fff'
}