import { Button } from "@mui/material";
import { useRegister } from "../../../hooks/Auth";
import type { RegisterSchemaType } from "../../../Schemas/Auth.schema";
import { useState } from "react";

const Register = () => {
    const [register, setRegister] = useState<RegisterSchemaType>({
        name: "",
        email: "",
        password: "",
    })

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegister({
            ...register,
            [e.target.name]: e.target.value
        })
    }
    const { onSubmit } = useRegister()
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(register);
    };

    return <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label htmlFor="register-name" className="block text-sm font-medium text-primary-light_text mb-1">
                Full Name
            </label>
            <input
                onChange={onChange}
                name="name"
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 rounded-md border border-primary-border bg-primary-darker text-primary-light_text placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-lighter"
            />
        </div>

        <div>
            <label htmlFor="register-email" className="block text-sm font-medium text-primary-light_text mb-1">
                Email
            </label>
            <input
                onChange={onChange}
                name="email"
                placeholder="your@email.com"
                autoComplete="email"
                required
                className="w-full px-4 py-2 rounded-md border border-primary-border bg-primary-darker text-primary-light_text placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-lighter"
            />
        </div>

        <div>
            <label htmlFor="register-password" className="block text-sm font-medium text-primary-light_text mb-1">
                Password
            </label>
            <input
                onChange={onChange}
                name="password"
                type="password"
                placeholder="••••••"
                required
                className="w-full px-4 py-2 rounded-md border border-primary-border bg-primary-darker text-primary-light_text placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-lighter"
            />
        </div>

        <Button
            type="submit"
            fullWidth
            variant="contained"
            className='text-primary-light_text bg-primary-lighter hover:bg-primary-lighter'
        >
            Create Account
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

        <p className="text-xs text-primary-light_text text-center">
            By signing up, you agree to our Terms of Service and Privacy Policy.
        </p>
    </form>
};

export default Register  