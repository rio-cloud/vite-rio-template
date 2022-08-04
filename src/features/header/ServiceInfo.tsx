import { Link } from 'react-router-dom';
import ActionBarItem from '@rio-cloud/rio-uikit/lib/es/ActionBarItem';

const serviceInfoTitle = 'Service XYZ';
const serviceInfoVersion = 'v1.1.0';

const ServiceInfo = () => {
    const handleClick = () => {};

    const title = (
        <div>
            <span>{serviceInfoTitle}</span>
            <span className={'text-color-gray margin-left-10'}>{serviceInfoVersion}</span>
        </div>
    );

    return (
        <ActionBarItem id={'serviceInfo'} className={'myItem'}>
            <ActionBarItem.Icon>
                <span className={'icon rioglyph rioglyph-info-sign'} />
            </ActionBarItem.Icon>
            <ActionBarItem.Popover title={title}>
                <div>
                    <div className={'line-height-largest'}>
                        <a href={'/'} onClick={handleClick}>
                            <span>{'Release notes'}</span>
                        </a>
                    </div>
                    <div className={'line-height-largest'}>
                        <Link to={'/abcd'}>{'Link'}</Link>
                    </div>
                </div>
            </ActionBarItem.Popover>
        </ActionBarItem>
    );
};

export default ServiceInfo;
