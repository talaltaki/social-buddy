import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import HomeIcon from "@material-ui/icons/Home";

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

const Post = () => {
  const classes = useStyles();

  const classesImage = useStylesImage();

  const { postId } = useParams();

  const [post, setPost] = useState([]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}/`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <>
      <Card
        className={classes.root}
        style={{
          marginTop: "80px",
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
                <Avatar
                  alt=""
                  src={`https://picsum.photos/100.jpg?${postId}`}
                />
              </div>
              <div>{post.title}</div>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {post.body}
            </Typography>
          </CardContent>

          <CardMedia
            component="img"
            alt="Post Image"
            height="400"
            image={`https://picsum.photos/700.jpg?${postId}`}
            title=""
          />

          <CardActions style={{ marginLeft: "130px" }}>
            <IconButton aria-label="" color="primary">
              <ThumbUpIcon />
            </IconButton>
            <IconButton aria-label="" color="primary">
              <ThumbDownIcon />
            </IconButton>
            <IconButton aria-label="" color="primary">
              <ShareIcon />
            </IconButton>
            <Link to="/">
              <IconButton aria-label="" color="primary">
                <HomeIcon />
              </IconButton>
            </Link>
          </CardActions>
        </CardActionArea>
      </Card>

      <Card style={{ marginTop: "20px" }}>
        <CardContent style={{ textAlign: "center" }}>
          <IconButton aria-label="" color="primary">
            <CommentIcon />
            <span style={{ fontSize: "16px", margin: "0 0 3px 7px" }}>
              Comments
            </span>
          </IconButton>
        </CardContent>
      </Card>
    </>
  );
};

export default Post;
