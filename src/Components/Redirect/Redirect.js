import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { publicRoutes } from '../../Routes';

const Redirect = () => {
  const navigation = useNavigate();

  useEffect(() => {
    navigation(publicRoutes.home);
  });
  return <p>Đang được chuyển hướng</p>;
};

export default Redirect;
