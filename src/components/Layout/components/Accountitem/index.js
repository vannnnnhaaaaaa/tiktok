import classNames from "classnames/bind";
import styles from './Accountitem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)
function Accountitem() {
    return ( 
        <div className={cx('wrapper')} >
      
          <img className={cx('avatar') } src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/85adf054b54f88a4525bedcefe40bfa1.jpeg?lk3s=a5d48078&nonce=25202&refresh_token=a2dc70cac5b43740cacdcc55b326f3a1&x-expires=1731038400&x-signature=VUKLA9qL5buVnssd4g%2FnoIuFfPo%3D&shp=a5d48078&shcp=81f88b70"  alt="Hoa" />
          <div className={cx('info')}>
              <p className={cx('name')} >
                  <span>Nguyen Van A</span>
                  <FontAwesomeIcon className={cx('checkicon')} icon={faCheckCircle} />
              </p>
              <span className={cx('username')}>nguyenvana</span>
          </div>
        </div>
      );
}

export default Accountitem;