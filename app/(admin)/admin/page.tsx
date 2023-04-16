"use client";

import React, { useState, useEffect } from 'react';
import buildHasuraProvider from 'ra-data-hasura';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import en from 'ra-language-english';
import zh from './chinese-translation';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LayersIcon from '@mui/icons-material/Layers';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ToysIcon from '@mui/icons-material/Toys';
import SettingsIcon from '@mui/icons-material/Settings';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { DataProvider } from 'ra-core';
import { Admin, Resource } from 'react-admin';
import { VideoList, VideoEdit, VideoCreate } from '../modules/videos';
import { CategoryList, CategoryCreate, CategoryEdit } from '../modules/categories';
import { ConfigList, ConfigCreate, ConfigEdit } from '../modules/configs';
import { AdList, AdCreate, AdEdit } from '../modules/ads';
import { PaymentList } from '../modules/payments';
import { OrderList } from '../modules/orders';
// import Dashboard from './Dashboard';
import addUploadFeature from '@/components/admin/addUploadFeature';
import authProvider from '@/components/admin/authProvider';

const myClientWithAuth = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret': process.env.NEXT_PUBLIC_AUTH_TOKEN!,
  },
});

const translations = { en, zh };

export const i18nProvider = polyglotI18nProvider(
  locale => (translations as any)[locale],
  'zh', // default locale
  [
    { locale: 'zh', name: '简体中文' },
    { locale: 'en', name: 'English' },
  ],
);

const AdminPage = () => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);

  useEffect(() => {
    const buildDataProvider = async () => {
      const dataProvider = await buildHasuraProvider({ client: myClientWithAuth });
      setDataProvider(() => dataProvider);
    };
    buildDataProvider();
  }, []);

  if (!dataProvider) return <p>Loading...</p>;

  const uploadCapableDataProvider = addUploadFeature(dataProvider);

  return (
    <Admin
      title="Esportube管理中心"
      i18nProvider={i18nProvider}
      dataProvider={uploadCapableDataProvider}
      authProvider={authProvider}
    >
      <Resource
        name="configs"
        options={{ label: '系统设置' }}
        icon={SettingsIcon}
        list={ConfigList}
        edit={ConfigEdit}
        create={ConfigCreate}
      />
      <Resource
        name="videos"
        options={{ label: '视频列表' }}
        icon={SubscriptionsIcon}
        list={VideoList}
        edit={VideoEdit}
        create={VideoCreate}
      />
      <Resource
        name="categories"
        options={{ label: '分类列表' }}
        icon={LayersIcon}
        list={CategoryList}
        edit={CategoryEdit}
        create={CategoryCreate}
      />
      <Resource
        name="ads"
        options={{ label: '广告列表' }}
        icon={ToysIcon}
        list={AdList}
        edit={AdEdit}
        create={AdCreate}
      />
      <Resource
        name="orders"
        options={{ label: '订单列表' }}
        icon={ViewHeadlineIcon}
        list={OrderList}
      />
      <Resource
        name="payments"
        options={{ label: '收入列表' }}
        icon={AttachMoneyIcon}
        list={PaymentList}
      />
    </Admin>
  );
};

export default AdminPage;