"use client";
import { post } from "@/utils";
import Image from "next/image";
import { useState } from "react";

interface IUser {
  email: string;
  password: string;
}

interface IError {
  errors: string[];
  status: string;
}

export default function Home() {
  const [user, setUser] = useState<IUser>({
    email: "",
    password: "",
  });

  const handleInputChange = (event: any) => {
    const name = event?.target.name;
    const value = event.target.value;
    setUser((prev): IUser => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const register = async () => {
    try {
      const { status, errors } = await post("/user/create", user);

      if (status === "ERROR") {
        alert(errors[0] ?? errors.message ?? "");
      }

      if (status === "SUCCESS") {
        alert("user created ");
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <input name="email" onChange={handleInputChange} placeholder="email" />
      <input
        name="password"
        onChange={handleInputChange}
        placeholder="password"
      />
      <button onClick={register}>Create user</button>
    </main>
  );
}
