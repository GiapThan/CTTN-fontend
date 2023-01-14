import classNames from 'classnames/bind';

import style from './Footer.module.scss';

const cx = classNames.bind(style);

const Footer = () => {
  return (
    <footer class={cx('wrapper')}>
      <section>
        <p>
          Email: 48.01.toan.spb@gmail.com <br />
          Địa chỉ: 280 An Dương Vương, phường 4, quận 5, Tp. Hồ Chí Minh
        </p>
      </section>
      <section>© Copyright 2023</section>
    </footer>
  );
};

export default Footer;
