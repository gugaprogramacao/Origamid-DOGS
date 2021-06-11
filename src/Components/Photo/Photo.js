import React from 'react';
import { useParams } from 'react-router-dom';

import useFetch from '../../Hooks/useFetch';

import { SOLO_PHOTO_GET } from '../../api';

import PhotoContent from './PhotoContent';

import Loading from '../Helper/Loading';
import Error from '../Helper/Error';
import Head from '../Helper/Head';

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = SOLO_PHOTO_GET(id);
    request(url, options);
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />

        <PhotoContent single data={data} />
      </section>
    );
  return null;
};

export default Photo;
