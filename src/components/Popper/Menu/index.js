import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuWrapper from '../Wrapper';
import MenuItem from './MenuItem';
const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };
    return (
        <Tippy
            interactive
            delay={[0,700]}
            onClickOutside={() => Tippy.hide()}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <MenuWrapper className={cx('menu-popper')}>{renderItems()}</MenuWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
