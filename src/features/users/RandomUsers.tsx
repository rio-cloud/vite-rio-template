import { FormattedMessage } from 'react-intl';
import Spinner from '@rio-cloud/rio-uikit/lib/es/Spinner';

import { User, useFetchUsersWithLimitQuery } from '../../services/userApi';
import { UserItem } from './UserItem';

const RandomUsers = () => {
    // Automatically fetch data and return query values via the query hook
    const { data, error, isLoading } = useFetchUsersWithLimitQuery('20', { refetchOnFocus: true });

    return (
        <div className={'intro'}>
            <div className="text-size-20 text-medium">Random Users</div>
            {isLoading && <Spinner />}
            {error && <div>{'Users could not be fetched'}</div>}
            {data && data.map((user: User) => <UserItem key={user.id} {...user} />)}
        </div>
    );
};

export default RandomUsers;
