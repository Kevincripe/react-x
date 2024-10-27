import classes from './PostsList.module.css';
import Post from './Post';

function PostsList() {

    return (
            <ul className={classes.posts}>
                <Post author='Kevin' body='This is the first Post' />
                <Post author='Ghost Writer' body='This is the random Post' />
            </ul>
    );
}

export default PostsList;