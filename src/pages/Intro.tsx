import { FormattedMessage } from 'react-intl';

const Intro = () => (
    <div className={'intro'}>
        <h1>
            <FormattedMessage id={'intl-msg:starterTemplate.sublink.intro'} />
        </h1>
        <div className={'panel panel-default shadow-default'}>
            <div className={'panel-body'}>{'Hello there!'}</div>
        </div>
    </div>
);

export default Intro;
