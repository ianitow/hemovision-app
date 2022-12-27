import React from 'react';
import { Layout } from 'src/components/layout/Layout';
import ProfilePage from 'src/domain/Profile/ProfilePage';
import user from 'src/mocks/userProfile';
export function Profile() {
  return (
    <Layout resetStyle={true}>
      <ProfilePage user={user} />
    </Layout>
  );
}
