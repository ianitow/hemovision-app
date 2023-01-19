import React from 'react';
import { View } from 'react-native';
import { Layout } from 'src/components/layout/Layout';
import { Title } from 'src/components/title/Title';
import NotificationList from 'src/domain/Notifications/NotificationList';
import data from 'src/mocks/notifications';
export function Notifications() {
  return (
    <Layout>
      <View>
        <Title>Recentes</Title>
        <NotificationList />
      </View>
      <View>
        <Title>Ontem</Title>
        <NotificationList data={data} />
      </View>
      <View>
        <Title>Muito tempo atrás</Title>
        <NotificationList />
      </View>
    </Layout>
  );
}
