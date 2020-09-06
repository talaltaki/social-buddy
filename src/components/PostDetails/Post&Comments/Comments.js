import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import { CardActions } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    marginTop: 5,
    marginBottom: 5,
  },
});

const useStylesImage = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Comments = (props) => {
  const classes = useStyles();

  const classesImage = useStylesImage();

  const { id, name, email, body } = props.comment;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography
            style={{ display: "flex" }}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            <div className={classesImage.root}>
              <Avatar alt="" src={`https://picsum.photos/100.jpg?${id}`} />
            </div>
            <div style={{ marginTop: "18px" }}>{email.toLowerCase()}</div>
          </Typography>

          <Typography gutterBottom variant="body2" component="p">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {body}
          </Typography>
        </CardContent>

        <CardActions style={{ marginLeft: "190px" }}>
          <IconButton aria-label="" color="primary">
            <ThumbUpIcon />
          </IconButton>
          <IconButton aria-label="" color="primary">
            <ThumbDownIcon />
          </IconButton>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default Comments;
