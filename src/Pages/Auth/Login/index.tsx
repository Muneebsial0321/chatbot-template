import { Button } from "@mui/material";
import { useState } from "react";
import type { LoginSchemaType } from "../../../Schemas/Auth.schema";
import { useLogin } from "../../../hooks/Auth";

const Login = () => {

    const [register, setRegister] = useState<LoginSchemaType>({
        email: "",
        password: "",
    })

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegister({
            ...register,
            [e.target.name]: e.target.value
        })
    }
    const { onSubmit } = useLogin()
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(register);
    };

  return <form onSubmit={handleSubmit} className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-primary-light_text mb-1">
        Email
      </label>
      <input
        type="email"
        name="email"
        onChange={onChange}
        placeholder="your@email.com"
        autoComplete="email"
        required
        className="w-full px-4 py-2 rounded-md border border-primary-border bg-primary-darker text-primary-light_text placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-lighter"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-primary-light_text mb-1">
        Password
      </label>
      <input
        name="password"
        type="password"
        onChange={onChange}
        placeholder="••••••"
        autoComplete="current-password"
        required
        className="w-full px-4 py-2 rounded-md border border-primary-border bg-primary-darker text-primary-light_text placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-lighter"
      />
    </div>

    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <input
          id="remember"
          name="remember"
          type="checkbox"
          className="h-4 w-4 text-primary-lighter focus:ring-primary-lighter border-primary-border rounded"
        />
        <label htmlFor="remember" className="ml-2 block text-sm text-primary-light_text">
          Remember me
        </label>
      </div>
      <div className="text-sm">
        <a href="#" className="font-medium text-primary-lighter hover:text-white">
          Forgot password?
        </a>
      </div>
    </div>

    <Button
      type="submit"
      fullWidth
      variant="contained"
      className='text-primary-light_text bg-primary-lighter hover:bg-primary-lighter'
      sx={{
        mt: 2,
        mb: 2,
        bgcolor: 'primary.lighter',
        '&:hover': {
          bgcolor: 'primary.light',
          opacity: 0.9,
        },
      }}
    >
      Sign in
    </Button>

    <div className="relative mt-6">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-primary-border"></div>
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="px-2 bg-primary-light_bg text-primary-light_text">
          Or continue with
        </span>
      </div>
    </div>

    <div className="mt-6 grid grid-cols-2 gap-3">
      <Button
        fullWidth
        variant="outlined"
        className='text-primary-light_text border-primary-lighter'
      >
        Google
      </Button>
      <Button
        fullWidth
        variant="outlined"
        className='text-primary-light_text border-primary-lighter'
      >
        Facebook
      </Button>
    </div>
  </form>
};

export default Login;