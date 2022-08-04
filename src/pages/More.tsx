import { FormattedMessage } from 'react-intl';

const More = () => (
    <div className={'intro'}>
    <h1>
        <FormattedMessage id={'intl-msg:starterTemplate.sublink.more'} />
    </h1>
    <div className={'panel panel-default shadow-default'}>
        <div className={'panel-body'}>{'Hello again'}</div>
    </div>
</div>
);

export default More;
