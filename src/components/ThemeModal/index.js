import { useDispatch } from 'react-redux';
import ThemItem from './ThemItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { setIsOpenThemModal } from '~/redux/audioSlice';
import { themeDynamics } from '~/components/ThemProvider/Theme';

import styles from './ThemModal.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default function ThemModal() {
    const dispatch = useDispatch();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h2>Theme</h2>
                <span
                    className={cx('icon')}
                    onClick={() => {
                        dispatch(setIsOpenThemModal(false));
                    }}
                >
                    <FontAwesomeIcon icon={faXmark} />
                </span>
            </div>
            <div className={cx('content')}>
                <div className={cx('section')}>
                    <div className={cx('grid')}>
                        {themeDynamics.map((theme) => (
                            <ThemItem data={theme} key={theme.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
