import React from 'react';
import Header from '../../components/header';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return (
    <>
      <Header>Companies (String{params.id})</Header>
      <p>{new Date().toTimeString()}</p>
    </>
  );
}
