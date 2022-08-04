import type { User } from '../../services/userApi';

export const UserItem = (props: User) => {
    const { name, email, picture } = props;
    return (
        <div key={name.first} className={'panel panel-default margin-bottom-10'}>
            <div className={'panel-body display-flex align-items-center padding-10'}>
                <div className="width-60 aspect-ratio-1">
                    <img className="img-responsive rounded-circle" src={picture.thumbnail} />
                </div>
                <div className="margin-left-10">
                    <div className="text-size-18 text-medium text-color-darker">{`${name.first} ${name.last}`}</div>
                    <div className="text-color-gray">{email}</div>
                </div>
            </div>
        </div>
    );
};
