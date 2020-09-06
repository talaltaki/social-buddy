import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
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

const Posts = (props) => {
  const classes = useStyles();

  const classesImage = useStylesImage();

  const { id, title, body } = props.post;

  return (
    <Card
      className={classes.root}
      style={{
        marginTop: "70px",
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography
            style={{ display: "flex" }}
            gutterBottom
            variant="h5"
            component="h2"
          >
            <div className={classesImage.root}>
              <Avatar alt="" src={`https://picsum.photos/100.jpg?${id}`} />
            </div>
            <div style={{ marginTop: "10px" }}>{title}</div>
          </Typography>
          <Typography
            variant="body2"
            component="p"
            style={{ marginTop: "5px" }}
          >
            {body}
          </Typography>
        </CardContent>

        <CardMedia
          component="img"
          alt="Post Image"
          height="400"
          image={`https://picsum.photos/700.jpg?${id}`}
          title={title}
        />

        <CardActions style={{ marginLeft: "70px" }}>
          <IconButton aria-label="" color="primary">
            <ThumbUpIcon />
          </IconButton>
          <IconButton aria-label="" color="primary">
            <ThumbDownIcon />
          </IconButton>
          <IconButton aria-label="" color="primary">
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="" color="primary">
            <CommentIcon />
          </IconButton>

          <Link
            style={{ textDecoration: "none", marginBottom: "7px" }}
            to={`/posts/${id}`}
          >
            <Button size="small" color="primary">
              Read Comments
            </Button>
          </Link>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default Posts;
