import Spinner from '@rio-cloud/rio-uikit/lib/es/Spinner';

import { User, useFetchUsersQuery } from '../../services/userApi';
import { UserItem } from './UserItem';

const RandomUsers = () => {
    // Automatically fetch data and return query values via the query hook
    const { data, error, isLoading } = useFetchUsersQuery('20', { refetchOnFocus: true });

    return (
        <div className={'RandomUser'}>
            <div className="text-size-20 text-medium margin-bottom-15">Random Users</div>
            {isLoading && <Spinner />}
            {error && <div>{'Users could not be fetched'}</div>}
            {data && data.map((user: User) => <UserItem key={user.name.last} {...user} />)}
        </div>
    );
};

export default RandomUsers;
