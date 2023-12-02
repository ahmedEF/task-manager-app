"use client";

import FormField from "./FormFields";

export default function Form({ handleSubmit,setStatus,status,obj }: any) {
  return (
    <FormField
      onSubmit={handleSubmit}
      position={status}
      setPosition={setStatus}
      obj={obj}
    />
  );
}
