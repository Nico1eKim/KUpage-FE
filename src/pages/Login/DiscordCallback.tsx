import { useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import useApi from '../../hooks/useApi';
import useUserStore from '../../hooks/useUserStore';

const DiscordCallback = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const navigate = useNavigate();
  const { api } = useApi();
  const hasFetchedRef = useRef(false);

  useEffect(() => {
    if (!code || hasFetchedRef.current) return;

    hasFetchedRef.current = true;

    const fetchToken = async () => {
      try {
        const response = await api.get(`/oauth2/code/discord?code=${code}`, { skipAuth: true });
        const data = response.data;
        const accessToken = data.result.tokenResponse.accessToken;
        console.log('response:', response);
        console.log('data:', data);

        if (accessToken) {
          const role = data.result.role;
          localStorage.setItem('accessToken', accessToken);
          useUserStore.getState().setauths(role);
          useUserStore.getState().setIsLoggedIn(true);
          console.log(data.code);
          navigate('/');
        } else {
          localStorage.setItem('guestToken', data.result.guestToken);
          console.log(data.code);
          navigate('/signup');
        }
      } catch (err) {
        console.error('Discord 로그인 오류', err);
      }
    };

    fetchToken();
  }, [code, api, navigate]);

  return <div>로그인 처리 중입니다...</div>;
};

export default DiscordCallback;
