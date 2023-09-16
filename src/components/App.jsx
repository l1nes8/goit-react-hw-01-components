import user from '../user.json';
import { Profile } from './profile';
import dataList from '../data.json';
import { Statistics } from './statistics';
import friends from '../friends.json';
import { FriendList } from './friendList';
import transaction from '../transactions.json';
import { TransactionHistory } from './transactionHistory';

export const App = () => {
  return (
    <>
      <h1>Profile</h1>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h1>Statistics</h1>
      <Statistics title="Upload Stats" dataList={dataList} />
      <h1>FriendList</h1>
      <FriendList friends={friends} />
      <h1>TransactionHistory</h1>
      <TransactionHistory items={transaction} />
    </>
  );
};
