import type { User } from '../../services/userApi';

export const UserItem = (props: User) => {
    const { id, first_name, last_name, username, avatar } = props;
    return (
        <div key={id} className={'panel panel-default shadow-default'}>
            <div className={'panel-body display-flex align-items-center'}>
                <div className="margin-5 width-50 aspect-ratio-1">
                    <img className="img-responsive" src={avatar} />
                </div>
                <div className='margin-left-10'>
                    <div className='text-size-18 text-medium text-color-darker'>
                        {`${first_name} ${last_name}`}
                    </div>
                    <div className='text-color-gray'>{username}</div>
                </div>
            </div>
        </div>
    );
};
