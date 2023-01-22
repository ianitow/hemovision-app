import React from 'react';
import { Layout } from 'src/components/layout/Layout';
import { CommentPage } from 'src/domain/Comment/CommentPage';
export function Comment() {
  return (
    <Layout resetStyle={true}>
      <CommentPage />
    </Layout>
  );
}
