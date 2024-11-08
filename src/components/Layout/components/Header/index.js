import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Tippy from '@tippyjs/react/headless';
import Accountitem from '../Accountitem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { wrapper as PopperWrapper } from '~/components/Popper';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faSignIn,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { icon } from '@fortawesome/fontawesome-svg-core';
const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon :<FontAwesomeIcon icon={faEarthAsia} />,
        title : 'English'
    },
    {
        icon :<FontAwesomeIcon icon={faCircleQuestion} />,
        title : 'Feedback and help ' ,
        to : '/feedback'
    },
    {
        icon :<FontAwesomeIcon icon={faKeyboard} />,
        title : 'Keyboard shortcuts'
    },
]
function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <Tippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div
                            className={cx('search-result')}
                            tabIndex="-1"
                            {...attrs}
                        >
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <Accountitem />
                                <Accountitem />
                                <Accountitem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            className={cx('input')}
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                        />

                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>

                        <FontAwesomeIcon
                            className={cx('loading')}
                            icon={faSpinner}
                        />
                        <Tippy content="Tìm kiếm">
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </Tippy>
                    </div>
                </Tippy>

                <div className={cx('actions')}>
                    <Button text>upload</Button>
                    <Button primary>Login</Button>
                    <Menu items ={MENU_ITEMS}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu  >
                </div>
            </div>
        </header>
    );
}

export default Header;
