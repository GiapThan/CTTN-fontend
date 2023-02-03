import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';

import style from './MucLuc.module.scss';
import { setIdDocView } from '../../Redux/documentSlice';
import { group, Lesson } from '../../Access/db';

const cx = classNames.bind(style);

const MucLuc = () => {
  const dispatch = useDispatch();

  const handleGetDocByLesson = (id) => {
    dispatch(setIdDocView({ idLesson: id }));
  };

  return (
    <div className={cx('wrapper')}>
      <h3 className={cx('title')}>Mục lục</h3>
      <div className={cx('group')}>
        {group.map((eg, ig) => {
          let newLesson = Lesson.filter((e) => e.groupId === eg.id);
          return (
            <>
              <h4>{eg.name}</h4>
              <ul className={cx('list')}>
                {newLesson.map((e, i) => (
                  <li
                    key={i}
                    onClick={() => handleGetDocByLesson(e.id)}
                    className={cx('item')}
                  >
                    <FontAwesomeIcon className={cx('icon')} icon={faShare} />
                    <span>{e.name}</span>
                  </li>
                ))}
              </ul>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default MucLuc;
