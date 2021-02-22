import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { useAuth } from '../../hooks/Auth';

import {
  Container,
  Header,
  TitleHeader,
  UserName,
  ProfileButton,
  UserAvatar,
} from './styles';

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();

  const { navigate } = useNavigation();

  const navigateToProfile = useCallback(() => {
    navigate('Profile');
  }, [navigate]);

  return (
    <Container>
      <Header>
        <TitleHeader>
          Bem vindo
          {'\n'}
          <UserName>{user.name}</UserName>
        </TitleHeader>
        <ProfileButton onPress={navigateToProfile}>
          <UserAvatar source={{ uri: user.avatar_url }} />
        </ProfileButton>
      </Header>
    </Container>
  );
};

export default Dashboard;
