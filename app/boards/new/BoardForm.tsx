"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { Button } from "~/src/components/form/Bouton";
import ImageUploader from "~/src/components/form/ImageUploader";
import { Input } from "~/src/components/form/Input";

export const BoardForm = () => {
  const router = useRouter();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = String(formData.get("title"));

    fetch("/api/boards", {
      method: "POST",
      body: JSON.stringify({
        title,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        router.push("/");
      });
  };
  return (
    <div className="flex flex-col gap-10 my-4 mx-14">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <Input label="titre" name="title" />
        <Button type="submit">Créer</Button>
      </form>
    </div>
  );
};
