import { useSelector } from "react-redux";
import { useAppSelector } from '../store/store';

interface IPostAuthor {
    userId: string;
  }

const PostAuthor: React.FC<IPostAuthor> = ({ userId }) => {
    
    const users = useAppSelector(state => state.users)

    const author = users.find(user => user.id === userId);

    return <span>by {author ? author.name : 'Unknown author'}</span>
}
export default PostAuthor