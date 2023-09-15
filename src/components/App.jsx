import user from '../user.json';
import { Profile } from './profile';
import dataList from '../data.json';
import { Statistics } from './statistics';

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

      {/* <FriendList /> */}
    </>
  );
};
