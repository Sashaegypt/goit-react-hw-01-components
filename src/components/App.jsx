import { UserProfile } from 'components/UserProfile/User.Profile';
import user from 'data/user.json';
import { UserStatistic } from 'components/UserStatistic/UserStatistic';
import data from 'data/data.json'
import { UserFriendsList } from 'components/UserFriendsList/UserFriendsList';
import friends from 'data/data.json'
import { UserTransaction } from 'components/UserTransactionHistory/UserTransaction';
import transactions from 'data/transactions.json'

   
export const App = () => {
  return (
    <div className=''>
      <UserProfile
       username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <UserStatistic title="Upload stats" stats={data} />
      <UserFriendsList friends={friends} />;
      <UserTransaction items={transactions} />
    </div>
  );
};
