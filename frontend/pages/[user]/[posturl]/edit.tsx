import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';
import { postAPI } from '../../../api';
import Write from '../../write';

const Edit = () => {
  const router = useRouter();
  const { posturl } = router.query;
  const { data, error, status } = useQuery('postDetail', () => postAPI.detail(posturl), {
    refetchOnWindowFocus: false,
    enabled: !!posturl,
  });

  if (status === 'error') {
    return <span>Error: {(error as any).message}</span>;
  }

  return <Write modifyTitle={data?.data?.title} modifyContent={data?.data?.content} id={data?.data?.id} />;
};

export default Edit;