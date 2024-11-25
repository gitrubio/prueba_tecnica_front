import {  loginUser } from "@/api/authApi";
import LoginForm from "@/components/organisms/LoginForm/LoginForm";
import { useAlertStore } from "@/hooks/useAlertStore";
import { useAuthStore } from "@/hooks/useAuthStore";
import  { useState } from "react";
import { NavLink } from "react-router-dom";

export function LoginView() {
  const [loading, setLoading] = useState<boolean>(false);
  const { handledLogin } = useAuthStore();
  const { handleAddAlert } = useAlertStore();
  const onLogin = async (email: string,password: string) => {
    try {
      setLoading(true);
      const data = await loginUser(email, password);
      if (data) handledLogin(data);
      setLoading(false);
    } catch  {
        handleAddAlert({ message: 'Error al iniciar sesión', type : 'error' });
        setLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 ">
      <div className="flex flex-col items-center justify-start px-6 py-4 mx-auto md:h-screen lg:py-0">
        <NavLink
          to="/"
          className="flex items-center mb-2 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img alt="  Drinks Store" src={"images/logo.png"} className="h-52 w-auto" />
        
        </NavLink>
        <LoginForm loading={loading} onLogin={onLogin} />
      </div>
    </section>
  );
}
