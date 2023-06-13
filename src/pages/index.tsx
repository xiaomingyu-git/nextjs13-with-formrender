import React from 'react';
import dynamic from "next/dynamic";

const FormRenderwithoutssr = dynamic(() => import('../pages/schema/formRender'), {
  ssr: false,
});

export default function Home() {

  return (
      <FormRenderwithoutssr />
  );
}