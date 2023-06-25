import React from 'react';
import dynamic from "next/dynamic";

const FormRenderwithoutssr = dynamic(() => import('@/modules/schema/formRender'), {
  ssr: false,
});

export default function Home() {

  return (
      <FormRenderwithoutssr />
  );
}