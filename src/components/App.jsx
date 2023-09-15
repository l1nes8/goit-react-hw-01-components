import user from '../user.json';
import { Profile } from './profile';
import dataList from '../data.json';
import { Statistics } from './statistics';
import friends from '../friends.json';
import { FriendList } from './friendList';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Statistics" dataList={dataList} />
      <FriendList friends={friends} />;
    </>
  );
};
