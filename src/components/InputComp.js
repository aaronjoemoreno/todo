import React, {useState} from "react"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function InputComp({addTodo}){

    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
      };

    const useStyles = makeStyles(theme => ({
        button: {
          margin: theme.spacing(1),
        },
        input: {
          display: 'none',
        },
      }));

      const classes = useStyles();

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder="task" style={mainInput}
                type="text"
                className="input"
                value={value}
                onChange={e => setValue(e.target.value)}/>
                <Button variant="outlined" className={classes.button} style={{fontSize: "1.2rem"}} color="inherit" onClick={handleSubmit}>
                    +
                </Button>
            </form>
        </>
    )
}

export default InputComp;

const mainInput = {
    minWidth: '200px',
    minHeight: '30px'
}