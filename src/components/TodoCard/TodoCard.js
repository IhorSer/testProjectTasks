import React from 'react';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import CheckIcon from '@material-ui/icons/Check';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PanToolIcon from '@material-ui/icons/PanTool';
import { taskDelete, taskUpdate } from '../../redux/actions/taskActions';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import { styles } from './styles';
import { uuid } from 'uuidv4'; 

export const TodoCard = ({todo, user}) => {
    const classes = styles();
    const dispatch = useDispatch();
    const isDeletable = todo.creator?.uid === user?.uid && todo.isTaken === false && !todo.isDone;
    const isApprovable = todo.creator?.uid === user?.uid && todo.isTaken === true && !todo.isDone;
    const isTakable = todo.creator?.uid !== user?.uid && todo.isTaken === false && !todo.isDone;
    const isWaitable = todo.creator?.uid !== user?.uid && todo.executor?.uid === user?.uid && !todo.isDone;

    const additionClass = isTakable ? 
        classes.takableTodo : 
            (isApprovable || isWaitable) ? classes.pendingTodo :
                todo.isDone ? classes.doneTodo : classes.nobodyWantsTodo;

    const onDelete = () => {
        taskDelete(todo, dispatch);
    }
    const onTakeTodo = () => {
        todo.isTaken = true;
        todo.executor = user;
        taskUpdate(todo, dispatch);
    }
    const onApproveTodo = () => {
        todo.isTaken = false;
        todo.isDone = true;
        taskUpdate(todo, dispatch);
    }
    const onRefuseTodo = () => {
        todo.isTaken = false;
        todo.executor = null;
        taskUpdate(todo, dispatch);
    }
    return (
        <Card className={classes.card}>
        <div className={classes.circle}>
          { todo?.isDone && (
              <CheckIcon fontSize={'small'}/>
            )
          }
          {
            (isApprovable || isWaitable) && (
              <AccessTimeIcon fontSize={'small'}/>
            )
          }
          {
            isTakable && (
              <PanToolIcon fontSize={'small'}/>
            )
          }
        </div>
          <CardHeader className={clsx(classes.cardHeader, additionClass)}
            avatar={
              <Avatar aria-label='recipe'>
                {todo.creator?.email.slice(0,1).toUpperCase()}
              </Avatar>
            }
            title={todo.title}
            subheader={todo.creator?.email}
          />
        <CardContent className={classes.contentContainer}>
          <Typography variant='body2' color='textSecondary' component='p' className={classes.desc}>
            {todo.description}
          </Typography>
          <Grid container className={classes.chips}>
          {todo.chips?.map((item) => (
                <Chip label={item.name} key={uuid()} color='default' variant='outlined' className={classes.chip} />
            ))}
            </Grid>
        </CardContent>
        <CardActions disableSpacing className={classes.buttonsContainer}>
            {isDeletable && (
              <Grid container className={classes.todoBtnDeleteContainer}>
                <Button variant='outlined' color='secondary'
                  onClick={onDelete}>DELETE TODO</Button>
              </Grid>)}
            {isTakable && (
              <Button variant='outlined' color='primary' onClick={onTakeTodo}>TAKE TODO</Button>
            )}
            {isApprovable && (
              <Grid container className={classes.todoBtnApproveContainer}>
                <Button variant='outlined' color='primary' onClick={onApproveTodo}>APPROVE</Button>
                <Button variant='outlined' color='secondary' onClick={onRefuseTodo}>REFUSE</Button>
              </Grid>
            )}
        </CardActions>
      </Card>
    )
}